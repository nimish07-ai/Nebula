const Typography=MaterialUI.Typography
const Box=MaterialUI.Box
const Button=MaterialUI.Button
const Icon=MaterialUI.Icon
const Checkbox=MaterialUI.Checkbox
const Fab=MaterialUI.Fab
const Container=MaterialUI.Container
const Grid=MaterialUI.Grid
const Paper=MaterialUI.Paper
const withStyles=MaterialUI.withStyles
const makeStyles=MaterialUI.makeStyles
const ButtonBase=MaterialUI.ButtonBase
const ImageList=MaterialUI.ImageList
const ImageListItem=MaterialUI.ImageListItem
const BottomNavigation=MaterialUI.BottomNavigation 
const BottomNavigationAction=MaterialUI.BottomNavigationAction 
const Breadcrumbs=MaterialUI.Breadcrumbs
const Link=MaterialUI.Link
const Menu=MaterialUI.Menu
const MenuItem=MaterialUI.MenuItem
const deepOrange=MaterialUI.colors.deepOrange
const {SvgIcon,IconButton,Stepper,Step,StepLabel,MobileStepper,Tabs,Tab,AppBar,Avatar,Badge,Switch,
  List,ListItem,ListItemIcon,Divider,ListItemText,Collapse,ListSubheader,Chip,AccordionActions,FormLabel,FormControl,FormGroup,
  Accordion,
  AccordionSummary,
        // expandIcon={<ExpandMoreIcon />}
  AccordionDetails,}=MaterialUI

const images=["./images/negx.jpg","./images/negy.jpg","./images/negz.jpg","./images/posx.jpg","./images/posy.jpg","./images/posz.jpg"]
const useStyles2 = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function LightBulbIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

const useStyles1 = theme => ({
  imageList:{
    width: 500,
    height: 450,
  },

  paper: {
    height: 140,
    maxWidth: 500,
    textAlign: 'center',
  },
  paper2:{
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img:{
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  roote:{
    width:300,
    height:300
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
});
const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];


class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      value:1,
      left:false,
      right:false,
      anchor:"",
      anchorEl:null,
      activeStep:0,
      skipped:new Set(),
      tabValue:2,
      tabValue2:0,
      open:true
    } 
    this.steps= getSteps();
    this.maxSteps = tutorialSteps.length;
    
  }
  handleChange = (event) => {
    console.log(event.target.checked)
  };

  handleCloseBM =(ev)=>{  console.log(ev.target.value);this.setState({anchorEl:null})}
  handleopenBM =(event)=>{//where to set the menu modal event.target
    this.setState({anchorEl:event.target})}


    handleNext = () => {
      let newSkipped = this.state.skipped;
      if (this.isStepSkipped(this.state.activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      // setActiveStep((prevActiveStep) => prevActiveStep + 1);
      this.setState({activeStep:this.state.activeStep+1});

      this.setState({skipped:newSkipped})
    };  
    handleBack = () => {
      this.setState({activeStep:this.state.activeStep-1});

          };
    handleSkip = () => {
      if (this.state.activeStep != 1) {
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      this.setState({activeStep:this.state.activeStep+1});
      
      const newSkipped = new Set(this.state.skipped.values());
      newSkipped.add(this.state.activeStep);
      this.setState({skipped:newSkipped})
    };  
    isStepSkipped = (step) => {
      return this.state.skipped.has(step);
    };
    handleReset = () => {
      this.setState({activeStep:0});
    };
  


    tabhandleChange = (event, newValue) => {
      
      this.setState({tabValue:newValue});
    };
    a11yProps(index) {
      return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
      };
    }

    tabhandleChange2 = (event, newValue) => {
      
      this.setState({tabValue2:newValue});
    };


  render()
  {
    // console.error("render");
    // console.log(this.state);
    const { classes } = this.props;

    return (
    <>

      <FormGroup>
          <FormLabel>heloo  <Switch
          checked={true}
          // onChange={handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        /></FormLabel>
                    <FormLabel>heloo  <Switch
          checked={true}
          // onChange={handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        /></FormLabel>
     
      </FormGroup>

      {/* <Container item> */}
          <AppBar position="static" alignItems="center">
            <Tabs value={this.state.tabValue} onChange={this.tabhandleChange} aria-label="simple tabs example">
                <Tab label="Primary" {...this.a11yProps(0)} />
                <Tab label="Item Two" {...this.a11yProps(1)} />
                <Tab label="Data display" {...this.a11yProps(2)} />          
            </Tabs>
          </AppBar>


              {this.state.tabValue == 0 && 
                <BottomNavigation
                value={this.state.value}
                onChange={(event, newValue) => {
                  this.setState({value:newValue});
                }}
                showLabels
                className={classes.root}
              >
                <BottomNavigationAction label="Button"  />
                <BottomNavigationAction label="Grid"  />
                <BottomNavigationAction label="images"  />
                <BottomNavigationAction label="Breadcrumbs"  />
                <BottomNavigationAction label="menu"  />
                <BottomNavigationAction label="stepper"  />
              </BottomNavigation>
              }
              
              
              {this.state.tabValue == 1 && 
                <BottomNavigation
                value={this.state.value}
                onChange={(event, newValue) => {
                  this.setState({value:newValue});
                }}
                showLabels
                className={classes.root}
              >
                <BottomNavigationAction label="Tab"  />
                <BottomNavigationAction label="Grid"  />
                <BottomNavigationAction label="images"  />
                <BottomNavigationAction label="Breadcrumbs"  />
                <BottomNavigationAction label="menu"  />
                <BottomNavigationAction label="stepper"  />
              </BottomNavigation>
              }

              
            {this.state.tabValue == 2 && 
                <BottomNavigation
                value={this.state.value}
                onChange={(event, newValue) => {
                  this.setState({value:newValue});
                }}
                showLabels
                className={classes.root}
              >
                <BottomNavigationAction label="avatars"  />
                <BottomNavigationAction label="List"  />
                <BottomNavigationAction label="Accordian"  />
                <BottomNavigationAction label="Breadcrumbs"  />
                <BottomNavigationAction label="menu"  />
                <BottomNavigationAction label="stepper"  />
              </BottomNavigation>
              }


          {/* </Container> */}






          { (this.state.value == 0 && this.state.tabValue == 1) &&
        <>
        <Container>
        <Grid container direction="column" justifyContent="center">
          
          <Grid item  lg={12}>
              <Paper square >
                  <Tabs
                    value={this.state.tabValue2 >=3 ? 2 :this.state.tabValue2}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.tabhandleChange2}
                    aria-label="disabled tabs example"
                  >
                    <Tab label="hello" wrapped />
                    <Tab label="Disabled" disabled />
                    <Tab label="Active" />
                    {/* <Tab label="Disab"  />
                    <Tab label="Active" /> */}
                  </Tabs>
                  <hr/>
                  <Tabs
                    value={this.state.tabValue2 >=3 ? 2 :this.state.tabValue2}
                    indicatorColor="secondary"
                    textColor="primary"
                    onChange={this.tabhandleChange2}
                    aria-label="disabled tabs example"
                  centered
                  >
                    <Tab label="Centered" wrapped />
                    <Tab label="Disabled" disabled />
                    <Tab label="Active" />
                    {/* <Tab label="Disab"  />
                    <Tab label="Active" /> */}
                  </Tabs>
                  <hr/>
                  <Tabs
                    value={this.state.tabValue2}
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    onChange={this.tabhandleChange2}
                    aria-label="disabled tabs example"
                  centered

                  >
                    <Tab label="Centered" wrapped />
                    <Tab label="Disabled" disabled />
                    <Tab label="Active" />
                    <Tab label="Disab"  />
                    <Tab label="Active" />
                    <Tab label="454g" />
                    <Tab label="Disab"  />
                    <Tab label="Active" />
                    <Tab label="454g" />
                  </Tabs>
                  <hr/>
                  <Typography> presented on desktop and hidden on mobile</Typography>
                  <Tabs
                    value={this.state.tabValue2}
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    onChange={this.tabhandleChange2}
                    aria-label="disabled tabs example"
                  centered

                  >
                    <Tab label="Centered" wrapped />
                    <Tab label="Disabled" disabled />
                    <Tab label="Active" />
                    <Tab label="Disab"  />
                    <Tab label="Active" />
                    <Tab label="454g" />
                    <Tab label="Disab"  />
                    <Tab label="Active" />
                    <Tab label="454g" />
                  </Tabs>
                  <hr/>
                  <Typography>Vertical</Typography>
                  <Tabs
                    value={this.state.tabValue2}
                    indicatorColor="primary"
                    variant="scrollable"
                    orientation="vertical"
                    scrollButtons="auto"
                    textColor="primary"
                    className={classes.roote}
                    onChange={this.tabhandleChange2}
                    aria-label="disabled tabs example"
                  centered

                  >
                    <Tab label="Centered" wrapped />
                    <Tab label="Disabled" disabled />
                    <Tab label="Active" />
                    <Tab label="Disab"  />
                    <Tab label="Active" />
                    <Tab label="454g" />
                    <Tab label="Disab"  />
                    <Tab label="Active" />
                    <Tab label="454g" />
                  </Tabs>
              
              </Paper>
          </Grid>
        </Grid>
        </Container>
        </>
  }

  <Container fixed>


{
  (this.state.value == 2 && this.state.tabValue == 2) &&
    <>
    <Accordion>
    <AccordionSummary
      // expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography className={classes.heading}>Accordion 1</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion defaultExpanded>
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div
          //  className={classes.column}
           >
            <Typography 
            // className={classes.heading}
            >Location</Typography>
          </div>
          <div
          //  className={classes.column}
           >
            <Typography
            //  className={classes.secondaryHeading}
             >Select trip destination</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails
        //  className={classes.details}
         >
          <div
          //  className={classes.column} 
           />
          <div
          //  className={classes.column}
           >
            <Chip label="Barbados" onDelete={() => {}} />
          </div>
          <div 
          // className={clsx(classes.column, classes.helper)}
          >
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#secondary-heading-and-columns" >
                Learn more
              </a>
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions>
      </Accordion>
  </>
}

          { (this.state.value == 1 && this.state.tabValue == 2) &&
          <>
          <Grid container lg={12} justifyContent="center" alignItems="stretch" direction="column">
            
            {/* list 1 */}
            <Grid item lg={6} xs={6}>
              <Paper>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <LightBulbIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <br/>
            
            {/*list 2  */}
            <Grid item lg={6} xs={6}>
              <Paper>
                <List component="nav" 
                      subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                          Nested List Items
                        </ListSubheader>
                      }
                      aria-label="main mailbox folders">
                  <ListItem button>
                    <ListItemIcon>
                      <LightBulbIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItem>
                  <ListItem button>
                    <ListItemText primary="Inbox" />
                  </ListItem>

                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItem button >
                        <ListItemIcon>
                          <LightBulbIcon />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                      </ListItem>
                    </List>
                  </Collapse>
                </List>
              </Paper>
            </Grid>
            
          </Grid>

          </>
          }
        


          { (this.state.value == 0 && this.state.tabValue == 2) &&
                <>
                <Box>
                  <Grid  container  justifyContent="center" direction="columns">
                  <Grid item xs={8}>
                    <Paper ><Avatar alt="Remy Sharp" src="./nimish.jpg" /></Paper>
                  </Grid>
                  <Grid item  direction="rows" xs={6}>
                    <Paper >
                    <Avatar >H</Avatar>
                    </Paper>
                    <Paper>
                    <Avatar className={classes.orange}>N</Avatar>
                    </Paper>
                  </Grid>
                    <Grid  item xs={9}>
                      <Paper> 
                        <Avatar alt="Remy Sharp" src="./nimish.jpg" className={classes.small} />
                        <Avatar alt="Remy Sharp" src="./nimish.jpg" />
                        <Avatar alt="Remy Sharp" src="./nimish.jpg" className={classes.large} />
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <Badge badgeContent={4} color="primary">
                          <LightBulbIcon />    
                        </Badge>
                        
                        </Paper>
                    </Grid>
                    <Grid  item xs={9}>
                      <Paper>
                      <Badge badgeContent={"hel"} color="primary">
                          <LightBulbIcon />    
                        </Badge>
                         
                         <p>invisible</p>
                      <Badge badgeContent={"hel"} color="primary" invisible={true}>
                          <LightBulbIcon />    
                        </Badge>
                        <p>max content</p>
                      <Badge  badgeContent={1000} max={999} color="primary">
                          <LightBulbIcon />    
                        </Badge>
                        <hr/>
                        <Badge color="secondary" variant="dot"  anchorOrigin={{
                                                                  vertical: 'bottom',
                                                                  horizontal: 'right',
                                                                }}>
                            <Typography>  <LightBulbIcon /> Typography</Typography>
                          </Badge>
                    </Paper>
                    </Grid>
                    {/* <Grid  lg={3}>
                      <Paper lg={3}> hello</Paper>
                    </Grid>
                    <Grid  lg={3}>
                      <Paper lg={3}> hello</Paper>
                    </Grid> */}

                  </Grid>
                </Box>
                </>
          }



{/*                        primary               */}

      { (this.state.value == 5 && this.state.tabValue == 0) &&
    <>
    <Box>
        <Grid container justifyContent="center">
          <Grid  item xs={12} lg={9}>
            <Paper lg={12} sm={3}>
              <Stepper activeStep={this.state.activeStep}>
                {this.steps.map((label,index)=>{
                       const stepProps = {};
                       const labelProps = {};
                       if(index ==1) //optional
                       {
                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                       }
                       if (this.isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      );
                })}
              </Stepper>
              <Stepper activeStep={this.state.activeStep>this.steps.length? (this.steps.length-1): this.state.activeStep} orientation="vertical">
                {this.steps.map((label,index)=>{
                       const stepProps = {};
                       const labelProps = {};
                       if(index ==1) //optional
                       {
                        labelProps.optional = <Typography variant="caption">Optional</Typography>;
                       }
                       if (this.isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      );
                })}
              </Stepper>

                <Grid  item lg={12}>
                  <Paper outline={0} >
                    <Grid item >
                      <Paper>
                        <Typography>{getStepContent(this.state.activeStep>this.steps.length? (this.steps.length-1): this.state.activeStep)}{this.state.activeStep} </Typography>
                      </Paper>
                    </Grid>
                    <Grid container justifyContent="left">
                        <Grid item xs={12} sm={2} lg={2}>
                          <Button onClick={this.handleSkip}  color="primary"  disabled={this.state.activeStep === 0} >skip</Button>
                          </Grid>  
                          <Grid item xs={12} sm={2}lg={2}>
                          <Button  variant="contained"
                                    color="primary"
                                    onClick={this.handleNext}>  {this.state.activeStep === this.steps.length - 1 ? 'Finish' : 'Next'}</Button>
                          </Grid>  
                          <Grid item xs={12} sm={2}lg={2}>
                          <Button color="primary" onClick={this.handleReset}  variant="contained" >Reset</Button>
                          </Grid>  

                    </Grid>
                  </Paper>
                </Grid>
            
            </Paper>
          <hr />
          <Paper lg={12} sm={3}>
          
                 <Grid container  justifyContent="center">
                    <Paper square elevation={0} >
                    {/* {console.log(tutorialSteps[this.state.activeStep])} */}
                      <Typography color="primary">{tutorialSteps[this.state.activeStep].label}</Typography>
                    </Paper>
                 </Grid>
                 <Grid container  justifyContent="center">
                 <img
                      className={classes.img}
                      src={tutorialSteps[this.state.activeStep].imgPath}
                      alt={tutorialSteps[this.state.activeStep].label}
                    />
                 </Grid>
                 <Grid   justifyContent="center">
                 <MobileStepper
                  //  lg={12} sm={3}
                    steps={this.maxSteps}
                    position="static"
                    variant="text"
                    activeStep={this.state.activeStep}
                    nextButton={
                      <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === this.maxSteps - 1}>
                        Next
                        {/* {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />} */}
                      </Button>
                    }
                    backButton={
                      <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                        {/* {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />} */}
                        Back
                      </Button>
                    }
                  />
                 </Grid>
                 <Grid>
                 <MobileStepper
                    steps={this.maxSteps}
                    position="static"
                    variant="dots"
                    activeStep={this.state.activeStep}
                    nextButton={
                      <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === this.maxSteps - 1}>
                        Next
                        {/* {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />} */}
                      </Button>
                    }
                    backButton={
                      <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                        {/* {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />} */}
                        Back
                      </Button>
                    }
                  />
                
                 </Grid>

                 <Grid>
                 <MobileStepper
                    steps={this.maxSteps}
                    position="static"
                    variant="progress"
                    activeStep={this.state.activeStep}
                    nextButton={
                      <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === this.maxSteps - 1}>
                        Next
                        {/* {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />} */}
                      </Button>
                    }
                    backButton={
                      <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === 0}>
                        {/* {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />} */}
                        Back
                      </Button>
                    }
                  />
                
                 </Grid>

          </Paper>
          
          
          </Grid>
        </Grid>

    </Box>

    </>}
    
                
  { (this.state.value == 4 && this.state.tabValue == 0) &&
    <>
    <Grid container justifyContent="center">
        <Grid item   >
          <Box>
              <Button aria-controls="fade-menu" aria-haspopup="true" onClick={this.handleopenBM}>
                Open Menu
              </Button>
              <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounted
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleCloseBM}
            >
              <MenuItem onClick={this.handleCloseBM}>Profile</MenuItem>
              <MenuItem onClick={this.handleCloseBM}>My account</MenuItem>
              <MenuItem onClick={this.handleCloseBM}>Logout</MenuItem>
            </Menu>
          </Box>
        </Grid>


    </Grid>
    </>
  }


  { (this.state.value == 3 && this.state.tabValue == 0) &&
  <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/" >
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
  </Breadcrumbs>
  
  <Breadcrumbs separator="@"aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/" >
          Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
  </Breadcrumbs>
  <Breadcrumbs maxItems={2} aria-label="breadcrumb">
  <Link color="inherit" href="#" >
    Home
  </Link>
  <Link color="inherit" href="#" >
    Catalog
  </Link>
  <Link color="inherit" href="#" >
    Accessories
  </Link>
  <Link color="inherit" href="#" >
    New Collection
  </Link>
  <Typography color="textPrimary">Belts</Typography>
</Breadcrumbs>
  </>
  }
      
  { (this.state.value == 2 && this.state.tabValue == 0)&&
      <>
      <Box>
        <Grid container alignItems="center" justifyContent="center">
        <ImageList rowHeight={160} xs={12} cols={4}>
            <ImageListItem key={0} cols={2}><img src={"./images/negx.jpg"}/></ImageListItem>
            <ImageListItem key={1} cols={2}><img src={"./images/negy.jpg"}/></ImageListItem>
            <ImageListItem key={1} cols={2}><img src={"./images/negz.jpg"}/></ImageListItem>
      
          {images.forEach((element,index)=> <ImageListItem key={index} cols={2}><img src={element}/></ImageListItem>)}
        </ImageList>
        </Grid>
        </Box>  
        </>
  }

  { (this.state.value == 1 && this.state.tabValue == 0) &&
      <>
      <Box>
      <Grid container >
              <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                   <Grid item xs={12} lg={8}>
                    <Paper >xs=12 lg=8</Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  
                  <Grid item xs={6} sm={3}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>


                  <Grid item xs={3} sm={1}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={3} sm={1}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={3} sm={1}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={3} sm={1}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={3} sm={1}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={3} sm={1}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={3} sm={1}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={3} sm={1}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={3} sm={1}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={3} sm={1}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={3} sm={1}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
                  <Grid item xs={3} sm={1}>
                    <Paper >xs=12 sm=6</Paper>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
       <hr/>
        <Grid container >
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <FormRow />
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <FormRow />
              </Grid>
              <Grid container item xs={12} spacing={3}>
                <FormRow />
              </Grid>
            </Grid>
        </Grid>

        <Grid container spacing={3}>
              <Grid  item >
                    <Paper  className={classes.paper} />
              </Grid>
              <Grid  item>
              <Paper  className={classes.paper}  />
              </Grid>
              <Grid  item>
              <Paper  className={classes.paper}  />
              </Grid>      
        </Grid>
        <hr/>
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper    >xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper >xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper >xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper >xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper >xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper >xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper >xs=3</Paper>
          </Grid>
        </Grid>
      
      
        <hr/>
        <Box>
          
          <Paper>
            <Grid container direction="row" xs={12}>
              <Grid container spacing={2} xs={2}>
                  <Grid item>
                      <ButtonBase className={classes.image} > 
                        <img className={classes.img} alt="complex" src="./complex.jpg" />
                      </ButtonBase>
                    </Grid>
              </Grid>
              <Grid container xs={10}>
                  <Grid item xs container direction="column" spacing={2}>  
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          Standard license
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          Full resolution 1920x1080 • JPEG
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          ID: 1030114
                        </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            Remove
                          </Typography>
                        </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>

      </Box>
      </>
  }

  { (this.state.value ==0 && this.state.tabValue == 0) &&
      <>
      <Box color="primary">
        <Typography variant="h1" component="h2">
          h1. Heading
        </Typography>
        <Button size="small">Default</Button>
        <Button size="medium" variant="contained" color="primary">
          Primary
        </Button>
        <Button  size="large" variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
        <hr/>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons" color="primary">
          Link
        </Button>
        <hr/>
        <Button onClick={() => { alert('clicked') }} variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
        <hr/>
        <Button
            variant="contained"
            color="secondary"
            // startIcon={<DeleteIcon />}
            endIcon={<Icon>send</Icon>}
        >
            Delete
        </Button>
      </Box> 
      <Box>
      <Checkbox
        // checked={checked}
        onChange={this.handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
      <Checkbox
        defaultChecked
        indeterminate
        inputProps={{ 'aria-label': 'indeterminate checkbox' }}
      />
      <Checkbox
        defaultChecked
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <Checkbox
        defaultChecked
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
      />
      </Box>
      <Box>
      <Fab color="primary" aria-label="add">
      <Icon>send</Icon>
      </Fab>
      </Box>
          </>
  }


  </Container>

    </>
    );
    
    
    
     }
}


function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

// function Bootom_nav_data(props)
// {
//   this.state=0
//   console.log(props,props.state)

//   return props.children
// }


function FormRow() {
  const classes = useStyles2();
  return (
    <React.Fragment>
      <Grid item xs={4} >
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper className={classes.paper}>item</Paper>
      </Grid>
    </React.Fragment>
  );
}


 
const A=withStyles(useStyles1)(App)
ReactDOM.render(<A />, document.querySelector("#root"));
