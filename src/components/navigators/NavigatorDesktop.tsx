import { AppBar, Box, Tabs, Tab } from "@mui/material";
import React, { ReactNode, useEffect } from "react";
import { Link, Outlet, useNavigate,  } from "react-router-dom";
import { RouteType } from "../../model/RouteType";
export type Props = {
        subnav?: boolean,
        routes: RouteType[]
}
export const NavigatorDesktop: React.FC<Props> = ({subnav, routes}) => {
       const [value, setValue] = React.useState(0)
       const navigate = useNavigate();
    useEffect(() => {
         if (!subnav){
            navigate(routes[0].path)
        }
         }, [])
       const handleChange = (event: React.SyntheticEvent, newValue: number) =>{
        setValue(newValue);
       }
       function getTabs(): ReactNode {
        return routes.map((route, index) => <Tab key={index} component={Link} 
        to={route.path} label={route.label} />
               
        )
       }
       return <Box sx={{marginTop:'10vh'}}>
        <AppBar sx={{backgroundColor:'lightgray'}}>
                <Tabs value={value} onChange={handleChange}>
                        {getTabs()}
                </Tabs>
        </AppBar>
        <Outlet/>
        </Box>
}