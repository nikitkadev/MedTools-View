import { Skeleton } from "@mui/material";

interface TableSkeletonProps {
  columns: number;
  rows: number;
}

export const TableSkeleton = ({ rows, columns }: TableSkeletonProps) => {
  return Array.from({ length: rows }).map((_, rowIndex) => (
    <tr key={rowIndex}>
      {Array.from({ length: columns }).map((_, columnIndex) => (
        <td key={columnIndex}>
          <Skeleton />
        </td>
      ))}
    </tr>
  ));
};
