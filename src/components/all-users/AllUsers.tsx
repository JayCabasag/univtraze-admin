import { TableHead, Table, TableBody, TableCaption, TableCell, TableHeader, TableRow } from '../shared/table/Table';

export default function AllUsers() {
  return (
    <div>
      <h2 className="mt-[40px] text-[28px] font-bold text-[#364D39]">Users</h2>
      <div className="overflow-hidden rounded-xl mt-[20px]">
        <Table>
          <TableCaption>A list of users.</TableCaption>
          <TableHeader className="rounded-md">
            <TableRow className="text-white rounded-t-md bg-gradient-to-b from-[#6BF27F] to-[#28CD41]">
              <TableHead className="text-center">ID-Number</TableHead>
              <TableHead>Fullname</TableHead>
              <TableHead className="">Mobile number</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center ">INV001</TableCell>
              <TableCell className="">INV001</TableCell>
              <TableCell className="">INV001</TableCell>
              <TableCell className="">INV001</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center ">INV001</TableCell>
              <TableCell className="">INV001</TableCell>
              <TableCell className="">INV001</TableCell>
              <TableCell className="">INV001</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center ">INV001</TableCell>
              <TableCell className="">INV001</TableCell>
              <TableCell className="">INV001</TableCell>
              <TableCell className="">INV001</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
