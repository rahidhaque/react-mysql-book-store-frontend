import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link as RouterLink } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (

    <div className="App">
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component={RouterLink}
          to="/"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb component={RouterLink} to="/books" label="Books" icon={<BookIcon fontSize="small" />} />
        <StyledBreadcrumb component={RouterLink} to="/add" label="Add" icon={<AddCircleOutlineIcon fontSize="small" />} />
      </Breadcrumbs>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/books" element={<Books></Books>} />
        <Route path="/add" element={<Add></Add>} />
        <Route path="/update" element={<Update></Update>} />
      </Routes>


    </div>

  );
}

export default App;
