import { TableHead, Table, TableBody, TableCaption, TableCell, TableHeader, TableRow } from '../shared/table/Table';

export default function CommunicableDiseaseReportTable() {
  return (
    <div className="bg-white h-full overflow-hidden rounded-xl w-full">
      <div className="overflow-hidden h-auto rounded-xl">
        <Table>
          <TableCaption>A list of communicable disease victims.</TableCaption>
          <TableHeader className="rounded-md">
            <TableRow className="text-white rounded-t-md bg-gradient-to-b from-[#6BF27F] to-[#28CD41]">
              <TableHead className="text-center">Room No.</TableHead>
              <TableHead>Fullname</TableHead>
              <TableHead>Mobile number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center ">INV001</TableCell>
              <TableCell className="">INV001</TableCell>
              <TableCell className="text-center">INV001</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center ">INV001</TableCell>
              <TableCell className="">INV001</TableCell>
              <TableCell className="text-center">INV001</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center ">INV001</TableCell>
              <TableCell className="">INV001</TableCell>
              <TableCell className="text-center">INV001</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
