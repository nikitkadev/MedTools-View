import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/ru";

interface MedViewDateInputProps {
  label: string;
}

export const MedViewDateInput = ({ label }: MedViewDateInputProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
      <DatePicker
        label={label}
        slotProps={{
          textField: {
            size: "small",
            fullWidth: true,
            slotProps: {
              inputLabel: { shrink: true },
            },
          },
        }}
      />
    </LocalizationProvider>
  );
};
