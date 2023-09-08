import React, { useEffect, useState } from 'react'

interface UnsavedChangesProps {
  hasUnsavedChanges: boolean
}

const ConfirmationBox = ({ hasUnsavedChanges }: UnsavedChangesProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [nextRouterPath, setNextRouterPath] = React.useState<string>()
  const Router = useRouter()
  const handleClose = () => {
    setOpen(false)
  }

  const onRouteChangeStart = React.useCallback(
    (nextPath: string) => {
      setOpen(true)

      if (!hasUnsavedChanges) {
        return
      }

      setNextRouterPath(nextPath)

      // Throw a fake error message, to stop nextjs from redirect
      throw new Error('Throwing an error to cancel window redirect, Ignore this error message.')
    },
    [hasUnsavedChanges]
  )

  const onRejectRouteChange = () => {
    setNextRouterPath('')
    setOpen(false)
  }

  const onConfirmRouteChange = () => {
    setOpen(false)
    // simply remove the listener here so that it doesn't get triggered when we push the new route.
    // This assumes that the component will be removed anyway as the route changes
    Router.events.off('routeChangeStart', onRouteChangeStart)
    Router.push(nextRouterPath as string)
  }

  useEffect(() => {
    Router.events.on('routeChangeStart', onRouteChangeStart)

    return () => {
      Router.events.off('routeChangeStart', onRouteChangeStart)
    }
  }, [Router.events, onRouteChangeStart])

  if (!hasUnsavedChanges) return <></>

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        sx={classes.dialogContainer}
      >
        <DialogTitle id='alert-dialog-title'>
          <Typography sx={classes.dialogTitleText}>
            You haven&apos;t saved this page yet. Exiting will delete any unsaved changes.
          </Typography>
        </DialogTitle>
        <DialogContent sx={classes.dialogContent}>
          <DialogContentText id='alert-dialog-description'>
            <Typography sx={classes.dialogContentText}>Are you sure you want to exit?</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={classes.dialogActions}>
          <Button
            variant='contained'
            color='inherit'
            disableElevation
            onClick={onRejectRouteChange}
            sx={classes.buttonCancel}
          >
            Cancel
          </Button>
          <Button
            color='primary'
            variant='contained'
            onClick={onConfirmRouteChange}
            sx={classes.buttonOk}
            disableElevation
            autoFocus
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default ConfirmationBox
