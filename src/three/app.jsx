// import seven from "src/three-base/seven.js"

// import { string } from "prop-types";

const {Typography,Box,Button,ButtonGroup,Icon,Checkbox,Fab,Container,Grid,Paper,withStyles,InputLabel,makeStyles,ButtonBase,ImageList,ImageListItem,BottomNavigation,BottomNavigationAction,Breadcrumbs,Link,Menu,MenuItem,deepOrangeSvgIcon,IconButton,Stepper,Step,StepLabel,MobileStepper,Tabs,Tab,AppBar,Avatar,Badge,
  List,ListItem,ListItemIcon,Divider,ListItemText,Collapse,Select,ListSubheader,Radio,withWidth,FormLabel,FormControl,FormGroup,Hidden,SvgIcon,Slide,Grow,TextField,
  TableContainer,Table,TableBody,TableHead,TableSortLabel,TableRow,Tooltip,TableCell,TablePagination,FormControlLabel,Switch,lighten,Toolbar}=MaterialUI

const {Autocomplete}=MaterialUILab
  
// const Autocomplete=Ma
  const useStyles1 = theme => ({
    cpaper:{
      [theme.breakpoints.up('sm')]: {
        height:"100vh",
      },
      [theme.breakpoints.down('sm')]: {
        height:"80vh",
        
      },
    },
    canvas:{
      height:"100vh",
      width: "100%",
      [theme.breakpoints.down('sm')]: {
        height:"85vh",
        
      },

    },
    pdrawer:{
      [theme.breakpoints.up('sm')]: {
        height:"100vh",
      },
      [theme.breakpoints.down('sm')]: {
        height:"14vh",
      },
      "overflow-y":"hidden"
    },
    passive_tab_edit:{
      padding :" 6px 10px",
      "min-width":"3vw"
    },
    active_tab_edit:{
      padding :" 6px 10px"
    },
    
    
    
    object3d_mesh:{
      width:"100vh"
    },
    object3d_mesh_grid:{
      height:"100vh",
      margin:0
    },
    object_middle:{
      display:"flex",
     " justify-content": "center",
     
    }



    // active

  });


let svg={
  LightBulbIcon:   <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />,
  objects:<><g  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M1548 4018 l-3 -533 -35 62 c-19 35 -38 59 -42 55 -4 -4 -335 -576 -737 -1272 l-730 -1265 1262 -3 1262 -2 65 -63 c301 -292 681 -440 1090 -424 164 6 276 26 417 73 239 80 438 207 615 392 375 395 502 962 331 1487 -158 488 -565 859 -1080 985 l-43 11 0 514 0 515 -1185 0 -1185 0 -2 -532z m2190 -650 l-3 -1003 -1002 -3 -1003 -2 0 1005 0 1005 1005 0 1005 0 -2 -1002z m388 -97 c166 -64 371 -210 488 -347 152 -177 254 -381 302 -604 26 -120 26 -401 1 -520 -106 -488 -464 -873 -935 -1004 -229 -64 -499 -62 -720 3 -466 139 -817 522 -919 1001 -12 60 -18 130 -18 235 l0 150 798 3 797 2 0 574 0 575 63 -18 c34 -10 98 -33 143 -50z m-2612 -85 l36 -64 0 -466 0 -466 270 0 269 0 26 -43 c20 -35 25 -57 25 -108 0 -234 78 -514 200 -724 22 -37 39 -70 37 -72 -2 -1 -468 -2 -1035 -1 l-1032 3 577 1002 c318 551 581 1002 585 1003 3 0 22 -29 42 -64z"/></g></>
}

function Svg_Creator(props) {
  // console.log(props)
  // console.log(props,svg[props.path])
  return (
    <SvgIcon {...props}>
        {svg[props.path]}
       {/* <path d="M1548 4018 l-3 -533 -35 62 c-19 35 -38 59 -42 55 -4 -4 -335 -576 -737 -1272 l-730 -1265 1262 -3 1262 -2 65 -63 c301 -292 681 -440 1090 -424 164 6 276 26 417 73 239 80 438 207 615 392 375 395 502 962 331 1487 -158 488 -565 859 -1080 985 l-43 11 0 514 0 515 -1185 0 -1185 0 -2 -532z m2190 -650 l-3 -1003 -1002 -3 -1003 -2 0 1005 0 1005 1005 0 1005 0 -2 -1002z m388 -97 c166 -64 371 -210 488 -347 152 -177 254 -381 302 -604 26 -120 26 -401 1 -520 -106 -488 -464 -873 -935 -1004 -229 -64 -499 -62 -720 3 -466 139 -817 522 -919 1001 -12 60 -18 130 -18 235 l0 150 798 3 797 2 0 574 0 575 63 -18 c34 -10 98 -33 143 -50z m-2612 -85 l36 -64 0 -466 0 -466 270 0 269 0 26 -43 c20 -35 25 -57 25 -108 0 -234 78 -514 200 -724 22 -37 39 -70 37 -72 -2 -1 -468 -2 -1035 -1 l-1032 3 577 1002 c318 551 581 1002 585 1003 3 0 22 -29 42 -64z"/> */}
    </SvgIcon>
  );
}




class App extends React.Component
{

  render()
  {
    // window.reacthere=true
    const { classes } = this.props;

    return (

        <main>
          
        <Grid container spacing={0}>
            <Grid item lg={9} md={9} xs={12}>
              <Paper >
                <Canvas classs={classes.canvas}/> 
              </Paper>  
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <Paper>
                <Pdrawer classs={classes.pdrawer} passive={classes.passive_tab_edit} active={classes.active_tab_edit}  classes={classes} /> 
              </Paper> 
            </Grid>      
          </Grid>
        </main>
    )
  }
}


class Canvas extends React.Component
{
  
  render()
  {
    
  setTimeout(()=>{$.base.add_in_cavas_item()},10)
  return (
         <Box id="canvas_item">
           {/* <div className={this.props.classs}></div> */}
         </Box>
    )
  }
}

class Pdrawer extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      tabValue:0,
      object_mesh:0
    }

    // console.log(props)
    this.props.tabvlaue={}
    this.props.tab_label=[]
    this.props.bottom_nav_label=[]
    this.props.nav_options= $.nav_options()
    this.props.nav_options.splice(this.props.nav_options.findIndex(ev=>ev == 'Mesh'),1)
    this.props.object_options=["Object3D","Mesh"]

  }
  a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  tabhandleChange = (event, newValue) => {
    this.setState({tabValue:newValue});
  };
  
  svg_name={
    object:<Icon>view_in_ar</Icon>,
    Camera:<Icon>camera</Icon>,
    Light:<Svg_Creator path="LightBulbIcon" />,
    Load:<Svg_Creator path="LightBulbIcon" />,

  }
  create_tabs()
  {
    this.props.tabvlaue={}
    this.props.tab_label=[]
    this.props.bottom_nav_label=[]
    this.props.nav_options.forEach((ev,i)=>{
      // console.log(ev)
        if(ev=="Object3D")
        {
          
          
          this.props.bottom_nav_label.push(<BottomNavigationAction label={`objects`}  />)
          // <Route path="/public/objects"  render={() => <div>Tab 2</div>} />      

          if(this.state.tabValue == i)
            {
              // console.log(ev,this.state.tabValue == i)
              this.props.tab_label.push(<Tab 
                          icon={this.svg_name["object"]} 
                           label = {`objects`} className={this.props.active}  {...this.a11yProps(i)}/>)
      
                
            }
            else
            {
              // console.log(ev,this.state.tabValue == i)
              this.props.tab_label.push(<Tab icon={this.svg_name["object"]}  className={this.props.passive}  {...this.a11yProps(i)}/>)
            }
          
        }
        else
          if( ev!="Mesh")
          {
            // this.props.tabvlaue[ev]=i
            this.props.bottom_nav_label.push(<BottomNavigationAction label={`${ev}`}  />)

            if(this.state.tabValue ==i)
              { 
                // console.log(ev,this.state.tabValue == i)
                
              this.props.tab_label.push(<Tab label = {`${ev}`}   icon={this.svg_name[ev]} className={this.props.active} {...this.a11yProps(i)}/>)
              }
              else
              {
                // console.log(ev,this.state.tabValue == i)
                this.props.tab_label.push(<Tab  icon={this.svg_name[ev]}  className={this.props.passive}  {...this.a11yProps(i)}/>)
              }
            // console.log(ev,"a")
          }
  
      })
      // console.log(this.props.tab_label)

  }

  render()
  {
    
    if (this.state.tabValue == 0)
    {
      let b=$.specific_catogey_options(this.props.nav_options[this.state.tabValue])
    }
    else
    {
    let b=$.specific_catogey_options(this.props.nav_options[this.state.tabValue])
    console.log(b)
    }
    
    this.create_tabs()
    return (
  <>
    {/* nav */}
    <Box className={this.props.classs}>
      
      <>
      <AppBar position="static" >
  
        <Hidden smDown>
          {/* <Toolbar > */}
          <Grid container  spacing={0}>
            <Grid item lg={12} >
              <Toolbar>
              <Typography  variant="h6" noWrap>
                Nebula
                {/* <Svg_Creator path="LightBulbIcon"/> */}
              </Typography>
              </Toolbar>
            </Grid>
            <Grid item lg={12} >
            </Grid>
          </Grid> 

            <Tabs value={this.state.tabValue} 
                // variant="scrollable"
                variant="fullWidth"
                scrollButtons="on"              
                onChange={this.tabhandleChange} aria-label="simple tabs example">
                  
                  {this.props.tab_label.map(ev=>{return(ev)})}
            </Tabs> 
          {/* </Toolbar>  */}
        </Hidden>
        <Hidden mdUp> 
          <BottomNavigation
              value={this.state.tabValue}
              onChange={(event, newValue) => {
                this.setState({tabValue:newValue});
              }}
              showLabels
              // className={classes.root}
            >
            
            {this.props.bottom_nav_label.map(ev=>{return(ev)})}
          </BottomNavigation>
        </Hidden>
      </AppBar>
          <Divider/>
    
        <Box>
          
    
        { (this.state.tabValue == 0) && <Objects3d checked={true} classes={this.props.classes} />}
        { (this.state.tabValue == 1) && <Camera checked={true} />}
        { (this.state.tabValue == 2) && <Light checked={true} />}
        { (this.state.tabValue == 3) && <Load checked={true} />}
        </Box>    
        </>    
    
  

    </Box>

  </>
    )
  }
}


class Objects3d extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      tab:0,
      change:true
    }
  }

  tabhandleChange = (event, newValue) => {
    this.setState({tab:newValue});
    
  };

  render()
  {
    let a=""
    let catogery=""
    if (this.state.tab ==0 )
    {
      a=$.specific_catogey_options("Object3D")   
      catogery="Object3D"
    }
    else
    if (this.state.tab ==1 )
    {
      a=$.specific_catogey_options("Mesh")
      catogery="Mesh"   
    }
    // rows=a.object
    try {
        rows= a.objects.map(ev=> createData(ev))
     
    } catch (error) {
      rows=[]   
    }
  


    return (<>
            <Grow direction="left" in={this.props.checked} mountOnEnter unmountOnExit>
            
              <Box className={this.props.classes.object_middle} id="classes.object_middle" >
                <Divider />
              
                <br/>
                <Grid container spacing={2} lg={12} id="nmiishf" className={this.props.classes.object3d_mesh_grid}>
                  <Grid item lg={12}  className={this.props.classes.object3d_mesh}>
                 
                    <Box>

                    <BottomNavigation
                          value={this.state.tab}
                          onChange={this.tabhandleChange}
                          showLabels
                          // className={classes.root}
                        >
                            <BottomNavigationAction label="Object3d"
                             icon={<Icon>3d_rotation</Icon>}
                              />
                            <BottomNavigationAction label="Mesh" 
                            icon={<Icon>view_module</Icon>
                          } 
                            />
                      </BottomNavigation>
                      <Divider />
                      {/* <ButtonGroup >
                        <Button onClick={()=>this.setState({object_mesh:0})}>Object3D</Button>
                        <Button onClick={()=>this.setState({object_mesh:1})}>Mesh</Button>
                      </ButtonGroup> */}
                     
     
     
                      <EnhancedTable  catogery={catogery} change={this.state.change} />
     
     
                    </Box>
                  </ Grid>
                
              </Grid>
            </Box>
            </Grow>
            
    </>)
  }
}

class Camera extends React.Component
{

  render()
  {
    return (<>
            
            <Grow direction="left" in={this.props.checked} mountOnEnter unmountOnExit>
            <Box>
              <Grid container spacing={0}>
                <Grid item lg={9} md={9} xs={12}>
                  <Box>
                    <ButtonGroup >
                      <Button onClick={()=>this.setState({object_mesh:0})}>Object3D</Button>
                      <Button onClick={()=>this.setState({object_mesh:1})}>Mesh</Button>
                    </ButtonGroup>
             
                  </Box>
                </ Grid>
                
              </Grid>
            </Box>
            </Grow>
            
    </>)
  }
}


function SwitchLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Switch
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      <FormControlLabel control={<Switch />} label="Uncontrolled" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
      <FormControlLabel disabled control={<Switch checked />} label="Disabled" />
    </FormGroup>
  );
}
class Light extends React.Component
{

  render()
  {
    return (<>
            
            <Grow direction="left" in={this.props.checked} mountOnEnter unmountOnExit>
            <Box>
              <Grid container spacing={0}>
                <Grid item lg={9} md={9} xs={12}>
                  <Box>
                    <ButtonGroup >
                      <Button onClick={()=>this.setState({object_mesh:0})}>Object3D</Button>
                      <Button onClick={()=>this.setState({object_mesh:1})}>Mesh</Button>
                      <SwitchLabels />
                    </ButtonGroup>
                  </Box>
                </ Grid>
                
              </Grid>
            </Box>
            </Grow>
            
    </>)
  }
}
class Load extends React.Component
{

  render()
  {
    return (<>
            
            <Grow direction="left" in={this.props.checked} mountOnEnter unmountOnExit>
            <Box>
              <Grid container spacing={0}>
                <Grid item lg={9} md={9} xs={12}>
                  <Box>
                    <ButtonGroup >
                      <Button onClick={()=>this.setState({object_mesh:0})}>Object3D</Button>
                      <Button onClick={()=>this.setState({object_mesh:1})}>Mesh</Button>
                    </ButtonGroup>
                  </Box>
                </ Grid>
                
              </Grid>
            </Box>
            </Grow>
            
    </>)
  }
}

//////////////////////////////////////////////////////////////////////////////////////////
 // TableContainer,Table,TableBody,TableHead,TableSortLabel,TableRow,Tooltip,TableCell,TablePagination,FormControlLabel,Switch,lighten,Toolbar
 function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

let rows = [
  createData('Cup'),
  createData('Donut'),
  createData('Eclair'),
  createData('Frozen yoghurt'),
  createData('Gingerbread'),
  createData('Honeycomb'),
  createData('Ice cream sandwich'),
  createData('Jelly Bean'),
  createData('KitKat'),
  createData('Lollipop'),
  createData('Marshmallow'),
  createData('Nougat'),
  createData('Oreo'),

];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' }
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          
        </TableCell>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
       
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  const handleChangePage = (event, newPage) => {
    console.log(props.selected)
    // call delete for each
    props.selected.forEach(ev=>{})

  };

  

  // console.log(props)
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <ComboBox  style={{ width: "15vw" }}  setvalue={props.setvalue} label="name"/>
        
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={handleChangePage}>
           <Icon>delete</Icon>
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
          <Icon>control_point</Icon>
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};




function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  // const [checked, setChecked] = React.useState();
  const [orderBy, setOrderBy] = React.useState('Name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  //////////////////////////////////

  // after search 

  const [value, setValue] = React.useState(null);

  const generate_tab=(v)=>
  {
    const a=[]
    console.log("vale",value)
    for (let i=0;i<v.length;i++)
    {
      // console.log(v[i].name ==value)
      if (v[i].name ==value)
        {
          a.push(v[i])
          
        }
    }
    // console.log(a)
    return a
  }



  // console.log(props)
  let a=""
      a=$.specific_catogey_options(props.catogery) 
    // console.log(a)
        try {
    props.rows= a.objects.map(ev=> createData(ev))
 
} catch (error) {
  props.rows=[]   
}
const tabs_inner_creation_table =(row,index,isItemSelected,labelId)=>
{
  // console.log(row,index)
  return (
    <TableRow
      hover
      // onClick={(event) => handleClick(event, row.name)}
      role="checkbox"
      aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.name}
      selected={isItemSelected}
    >
      <TableCell padding="checkbox">
        <IconButton aria-label="expand row" size="small" onClick={() => {setOpen(!open);setOpens(row.name)}}>
            {open ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon> }
          </IconButton>
      </TableCell>  
      <TableCell padding="checkbox">
          <Checkbox
          checked={isItemSelected}
          inputProps={{ 'aria-labelledby': labelId }}
          onClick={(event) => handleClick(event, row.name)}
        />
      </TableCell>
      <TableCell component="th" id={labelId}  onClick={(event) => handleClick(event, row.name)} scope="row" padding="none">
        {row.name}
      </TableCell>
      <TableCell align="right" onClick={(event) => handleClick(event, row.name)} >{row.calories}</TableCell>
      {/* <TableCell align="right" onClick={(event) => handleClick(event, row.name)} >{row.fat}</TableCell>
      <TableCell align="right" onClick={(event) => handleClick(event, row.name)} >{row.carbs}</TableCell>
      <TableCell align="right" onClick={(event) => handleClick(event, row.name)} >{row.protein}</TableCell> */}
    </TableRow>
  
  );
    }
/////////////////////////////////////////////


    // console.log(props)
    // props.change=false
    //  console.log(a,rows)
  const isSelected = (name) => selected.indexOf(name) !== -1;
  const [open, setOpen] = React.useState(false);
  const [openS, setOpens] = React.useState(false);
  //  const [open, setOpen] = React.useState(true);
  // const [openS, setOpens] = React.useState("scene");



  // console.log(openS)

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);
// console.log(selected)
  return (

    <div className={classes.root}>
      <Slide direction="down" in={open} mountOnEnter unmountOnExit>
        <Box className={classes.inside_colapseable}>
          <Flyin_inner_specific open={open} openS={openS} setOpen={setOpen} setOpenS={setOpens}  catogery={props.catogery} cla={classes}/>
        </Box>
      </Slide>
      <Paper className={classes.paper} elevation={0} >
        <EnhancedTableToolbar   selected={selected} setvalue={setValue}  numSelected={selected.length} />
        <TableContainer id="qq"  className={classes.tbody_check}>
          <Table
            className={classes.table}
            stickyHeader
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
            
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={props.rows.length}
            
            />
            
            {/* {}   generate_tab(stableSort(rows, getComparator(order, orderBy)))*/}

          {value == null &&    
                   <TableBody  className={classes.tbody_check}   >
              {stableSort(props.rows, getComparator(order, orderBy))
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  // console.log(row,index)
                  return tabs_inner_creation_table(row,index,isItemSelected,labelId )
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            }

{value != null &&    
                   <TableBody     >
              {generate_tab(stableSort(props.rows, getComparator(order, orderBy)))
              // stableSort(rows, getComparator(order, orderBy))
                // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  // console.log(row,index)
                  // console.log("kkkkkkkkkkkkkkkkkkk")

                  return tabs_inner_creation_table(row,index,isItemSelected,labelId )
               
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            }



          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
  );
}

class Flyin_inner_specific extends React.Component
{
  constructor(props)
  {
    super(props)
    
    // console.log(props)
    
    this.cc={}
    
    this.state=this.cc
    this.a=$.specific_object_options(this.props.catogery,this.props.openS)

  
    this.close_flyin=this.close_flyin.bind(this)
    this.handelchange=this.handelchange.bind(this)
    this.creation_of_tabs(this.cc)
    this.first=true
    

  }

  handelchange(e)
  {

    let A=e.target.id
    console.log(e.target.value,e.target.id)
    let a=e.target.id.split(".")
    let f=a.length
    let c={}
    let d=c
    a.forEach((ev,ind)=>{
      if(ind <= f-2)
      {
        d[ev]={}
        d=d[ev]
      }
      else
      {
        d[ev]=e.target.value
        console.log('ggggggggggggg')
      }
    })
 
    // console.log(c)
    this.setState(c)
    
    
    $.perform(e.target.value,this.props.openS,this.props.catogery,A)
    // console.log(this.state)
  }
  
  
  getvalue(a="castShadow")
  {
    // console.log(a)
    let A=a
    a=a.split(".")
    let f=a.length
    let d=this.state
    // console.log(this.state)
    if (f == 1)
    {
      return d[A]
      // console.log(d[A])
    }
    a.forEach((ev,ind)=>{
      if(ind <= f-2)
      {

        d=d[ev]
        // console.log('f',ev,d)
  
      }
      else
      {
      // console.log('f',d[ev],ev)
      // console.log(ev,d)
      return d[ev]
  
      }
    })

  }


  createtextinput(n,a,path,id)
  {
    
    
    return       <TextField  onChange={this.handelchange} id={`${id}`} type={a[0]} label={`${n}`} value={this.getvalue(id)}  />
  }
  createSwitch(n,a,path,id)
  { 
    // console.log(id)
    // console.log(this.getvalue(id))
    return  <FormControl variant="filled" >
       <FormControlLabel      value={this.getvalue(id)}  control={<Select
      native
      value={this.getvalue(id)} 
      onChange={this.handelchange}
      inputProps={{
        name: `${n}`,
        id:  `${id}`,
      }}
    >
      <option value={'false'}>false</option>
      <option value={'true'}>true</option>
    </Select> }    label={n} labelPlacement="start"       ></FormControlLabel> 
    
  </FormControl>
    
  }

  


  create(n,a,putinobj,path,k=false,id)
  {
    if(Array.isArray(a))
    {
      //state set
      Reflect.set(path,n,a[a.length-1])
      
      
      // console.log(a)
      let c=<Grid item  lg={k==false?12:6} md={12} >

            {/* <FormLabel> */}
            {a[1]=="#TextField"? this.createtextinput(n,a,path,id): this.createSwitch(n,a,path,id)}
            
            {/* </FormLabel> */}
           </Grid>
           
      putinobj.props.children.push(c)
    }
    else
    if(typeof(a) == 'object')
    {
      
      let paper=<Grid  container lg={12} md={12} spacing={1}></Grid>
      paper.props.children=[]
      paper.props.children.push(<Grid item  lg={12} md={12} ><Typography variant="h6">{n}</Typography></Grid>)

      
      Reflect.set(path,n,{})

      if(Reflect.ownKeys(a).length >0)
      {
        // console.log(a)
        for (let  x in a)
        {
          this.create(x,a[x],paper,path[n],true,`${n}.${x}`)
        }
      }
      // paper.props.children.push(<div>hello</div>)

      
      let p=<Grid item container lg={12} md={12} ><Paper style={{width:"100%",height:"fit-content"}}></Paper></Grid>
      // console.log(p.props.children.props.cg)
      p.props.children.props.children=paper
      putinobj.props.children.push(p)

      // putinobj.props.children.push(paper)
    }

  }

  creation_of_tabs(cc=this.cc)
  {

    let a=this.a    
    // console.log(a)
    

    this.paper=<></>
    this.paper.props.children=[]
    // this.paper.props.children.push(<div>hello</div>)

    if(Reflect.ownKeys(a).length >0)
    {
      for (let x in a)
      {
        // console.log(x)
        if (x != "@custom")
        {
          this.create(x,a[x],this.paper,this.cc,false,`${x}`)
        } 
        else
        {
          
        }
      }
    }

    this.first=false
    // console.log(this.cc)
  }

  close_flyin()
  {
    // console.log('hey',this)
    this.props.setOpen(false)
    // this.props.setOpenS(false)
  }

  render()
  {
    // let a=$.specific_object_options(this.props.catogery,this.props.openS)
    // console.log(a)
    // console.log(this.state.position.x)
     
    console.log("--------------------------------------------------------------------")

    this.creation_of_tabs()
    // this.getvalue()
  return<>
    <Box>
      <Paper elevation={10} className={this.props.cla.papaer} id={"jjjjjjjjjjjjjjjjjjjj"}>
      <Grid container spacing={1} direction="column" >
          <Grid  lg={12} md={12} container item  className={this.props.cla.papaerF} direction="row">
            <Grid item lg={2} md={2} > 
              {/* <Paper>1</Paper> */}
             
                <IconButton aria-label="back" onClick={this.close_flyin} >
                  <Icon>expand_less</Icon>
                </IconButton>
             
            </Grid>   
            <Grid  lg={8} md={8} container  justifyContent="center" alignItems="center" > 
              {/* <Paper>1</Paper> */}
              <Grid item >
                <Breadcrumbs aria-label="breadcrumb">

                  <Typography color="textPrimary" noWrap style={{width:"6vw"}}>{this.props.catogery}</Typography>
                  <Typography color="textPrimary" style={{width:"6vw"}} >{this.props.openS}</Typography>
                </Breadcrumbs>
                
              </Grid>

            </Grid>   
            <Grid item lg={12} md={12}  >
              <Divider />
            </Grid>
          </Grid>



          <Grid  container item lg={12} md={12}  >
            <Grid item lg={12} md={12} style={{height:"10vh"}}> 
              <Box style={{height:"10vh"}}>
              <Container>
                <ComboBox style={{height:"8vh", width: "20vw" }} label={`property search`}/>
              </Container>
              </Box>
            </Grid>
           <Grid    container  item justifyContent="center" alignItems="center" lg={12} md={12}  className={this.props.cla.grid_in_fly} spacing={3}> 
       
            {this.paper}      
            </Grid>    
            
       
         </Grid>
        </Grid>
      </Paper>
    </Box>
    </>
  }

}

  

function ComboBox(props) {

  // console.log(props)
  // console.log(props.style == undefined ? { width: "20vw" } : props.style)


  return (
    <Autocomplete
      id="combo-box-demo"
      options={rows}
      onChange={(event, newValue) => {
        // console.log("newValue",newValue)
        if (newValue == null)
        {
          props.setvalue(null);
        }
        else
        {
          props.setvalue(newValue.name);
        }
        //
      }}
      // style={props.style}
      getOptionLabel={(option) => option.name}
      style={props.style == undefined ? { width: "20vw" } : props.style}
      renderInput={(params) => <TextField {...params} style={props.style} label={props.label} variant="outlined" />}
    />
  );
} 


class DialogFlyin extends React.Component
{
  constructor(props)
  {
    super(props)
  }

mapper={
  $:"TextField",
  string:"string",
  number:"number",
  color:"color"
}

creator(k,v)
{
  // if(Array.isArray(v) )
  // {


  // }
  // else
  // {

  // }

}

  // "create":{
  //   name:"name$string",parent:"scene@Object3D@Mesh",
  // material:"MeshPhongMaterial^moptions@material",moptions:{color: "0xCC8866=color$number"},
  // geometry:"PlaneGeometry^goption@geometry",goption:["50=x$nuber", "50=y$number"]
  //   },

  handleClose()
  {
    // this.props
  }

  operation()
  {

  }
  render()
  {
   return<>
    <Dialog
        open={this.props.open}
        onClose={handleClose}
        scroll={"paper"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >


      </Dialog>
   </> 
  }



}

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // overflow:"hidden",
    // height:"30vh"
  },
  paper: {
    width: '23vw',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
   
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  tbody_check:{
    "height": "50vh",
    "overflow-x": "hidden",
  },
  inside_colapseable:{
    "z-index": "300",
    width:"24vw",
    backgroundColor:"white",
    height:"65vh",
    position:"absolute",
    "box-shadow":" 5px 7px #888888"
    
  },
  papaer:
  {
    height:"65vh",
  
  },
  papaerF:
  {
    height:"6vh",
    // backgroundColor:theme.primary 
  },
  papaerS:
  {
    height:"56vh",
    "overflow-y": "scroll"
    // backgroundColor:theme.primary 
  },
  grid_in_fly:
  {
    "overflow-y": "scroll",
    height:"46vh",
    // "overflow-x": "scroll"
    
  }
}));



const A=withStyles(useStyles1)(App)
// const B= withWidth(A)
// console.log(A.children)
// $.perform(false,'tellme ground','Mesh','visible')
ReactDOM.render(<A/>, document.querySelector("#root"));
  