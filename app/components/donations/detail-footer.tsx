import { Box, Button, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { DonationFormProps, DonorFormProps } from "../form-components/form-input-props";

type FooterProps = {
  id: string;
  name: string;
  href: string;
  apiUrl: string;
  handleSubmit: UseFormHandleSubmit<DonorFormProps | DonationFormProps>;
  isDirty: boolean;
  errors: FieldErrors<DonorFormProps | DonationFormProps>;
};

export const DetailFooter = ({ id, name, href, apiUrl, handleSubmit, isDirty, errors }: FooterProps) => {
  const router = useRouter();

  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const seconds: number = 4000;
  const handleButtonDisable = () => {
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, seconds);
  };

  // Disable button for n seconds on refresh/load
  useEffect(() => {
    handleButtonDisable();
  }, []);

  // Disable button after it has been pressed for n seconds
  useEffect(() => {
    handleButtonDisable();
  }, [isButtonDisabled]);

  const handleSave = async (data: DonorFormProps | DonationFormProps) => {
    // If fields not changed, don't save
    if (!isDirty || Object.keys(errors).length > 0) {
      alert("Cannot save when fields are unchanged or there are validation errors.");
      return;
    }
    setIsButtonDisabled(true);
    alert("Demo only. Changes are not saved.");
  };

  const handleDelete = async () => {
    const remove = confirm(`Are you sure you would like to delete this ${name}?\nThis cannot be undone.`);

    if (remove) {
      alert("Delete is disabled in demo mode.");
    }
  };

  const handleCancel = () => {
    router.push(href);
  };

  return (
    <Box sx={styles.footerContainer}>
      <Tooltip
        title={
          !isDirty
            ? "Cannot save when fields are unchanged."
            : Object.keys(errors).length > 0
              ? "Cannot save because there are validation errors."
              : "Save all changes."
        }
      >
        <span>
          <Button
            sx={styles.buttonContained}
            variant="contained"
            onClick={handleSubmit(handleSave)}
            disabled={isButtonDisabled || !isDirty || Object.keys(errors).length > 0}
          >
            Save
          </Button>
        </span>
      </Tooltip>
      <Tooltip title={"Delete details"}>
        <span>
          <Button sx={styles.buttonContained} variant="contained" onClick={handleDelete} disabled={isButtonDisabled}>
            Delete
          </Button>
        </span>
      </Tooltip>
      <Tooltip title={"Move back to List page"}>
        <span>
          <Button sx={styles.buttonOutlined} variant="outlined" onClick={handleCancel} disabled={isButtonDisabled}>
            Cancel
          </Button>
        </span>
      </Tooltip>
    </Box>
  );
};

const styles = {
  footerContainer: {
    display: "flex",
    gap: 1,
    py: 2,
    gridColumn: "span 3",
  },
  buttonContained: {
    backgroundColor: "#1a345b",
  },
  buttonOutlined: {
    borderColor: "black",
    color: "black",
  },
};
