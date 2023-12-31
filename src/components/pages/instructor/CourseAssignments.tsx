import Box from "@mui/material/Box";
import ClippedDrawer from "../../organisms/ClippedDrawer";
import AssignmentDashboard from "../../organisms/AssignmentDashboard";

const CourseAssignments = () => {
	return (
		<Box sx={{ display: "flex" }}>
			<ClippedDrawer />
			<AssignmentDashboard />
		</Box>
	);
};

export default CourseAssignments;
