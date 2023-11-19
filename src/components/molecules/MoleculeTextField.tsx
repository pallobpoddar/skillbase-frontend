import React from "react";
import { ControllerRenderProps } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/material";

type Props = {
	type?: string;
	variant?: "filled" | "outlined" | "standard";
	margin?: "dense" | "none" | "normal";
	required?: boolean;
	fullWidth?: boolean;
	id: string;
	label: React.ReactNode;
	autoComplete?: string;
	autoFocus?: boolean;
	InputProps?: object;
	field?:
		| ControllerRenderProps<
				{
					name: string;
					email: string;
					password: string;
				},
				"name"
		  >
		| ControllerRenderProps<
				{
					name: string;
					email: string;
					password: string;
				},
				"email"
		  >
		| ControllerRenderProps<
				{
					name: string;
					email: string;
					password: string;
				},
				"password"
		  >
		| ControllerRenderProps<
				{
					confirmPassword: string;
				},
				"confirmPassword"
		  >;
	error?: boolean;
	helperText?: React.ReactNode;
	sx?: SxProps;
};

const MoleculeTextField = (props: Props) => {
	const { field, ...textFieldProps } = props;

	return <TextField {...textFieldProps} {...field} />;
};

export default MoleculeTextField;
