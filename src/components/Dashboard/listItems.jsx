import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StorefrontIcon from "@material-ui/icons/Storefront";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import StorageIcon from "@material-ui/icons/Storage";
import BarChartIcon from "@material-ui/icons/BarChart";
import RoomIcon from "@material-ui/icons/Room";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { Link } from "react-router-dom";

const components = [
  {
    url: "/analytics",
    name: "Analytics",
    icon: <BarChartIcon />,
  },
  {
    url: "/orders",
    name: "Orders",
    icon: <StorefrontIcon />,
  },
  {
    url: "/orders/create",
    name: "Create Order",
    icon: <AddShoppingCartIcon />,
  },
  {
    url: "/products",
    name: "Product List",
    icon: <LocalMallIcon />,
  },
  {
    url: "/products/create",
    name: "Add Product",
    icon: <PlaylistAddIcon />,
  },
  {
    url: "/inventory",
    name: "Manage Inventory",
    icon: <StorageIcon />,
  },
  {
    url: "/delivery/destinations",
    name: "Delivery Destinations",
    icon: <LocalShippingIcon />,
  },
  {
    url: "/delivery/destinations/create",
    name: "Add Delivery Destinations",
    icon: <RoomIcon />,
  },
];

export const mainListItems = (
  <div>
    {components.map((component) => (
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={component.url}
      >
        <ListItem button key={components.indexOf(component)}>
          <ListItemIcon>{component.icon}</ListItemIcon>
          <ListItemText primary={component.name} />
        </ListItem>
      </Link>
    ))}
  </div>
);
