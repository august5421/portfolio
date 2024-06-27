import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography, Fade } from "@mui/material";
import LogoFont from "./LogoFont";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
import { useSelector, useDispatch } from "react-redux";
import { setActiveView } from "../actions/actions";
import logo from "../assets/images/logo.png";
import {
  setSplashScreenPositionModifier,
  updateSplashScreenFader,
  setNavbarFader,
} from "../actions/actions";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const isMobile = useSelector((state) => state.isMobile);
  const activeView = useSelector((state) => state.activeView);
  const navbarFader = useSelector((state) => state.navbarFader);
  const splashScreenPositionModifier = useSelector(
    (state) => state.splashScreenPositionModifier
  );

  useEffect(() => {
    if (splashScreenPositionModifier === "-100vw") {
        setTimeout(() => dispatch(setNavbarFader("image", true)), 500);
        setTimeout(() => dispatch(setNavbarFader("home", true)), 750);
        setTimeout(() => dispatch(setNavbarFader("work", true)), 1000);
        setTimeout(() => dispatch(setNavbarFader("references", true)), 1250);
    } else if (splashScreenPositionModifier === "-100vh") {
        setTimeout(() => dispatch(setNavbarFader("image", true)), 500);
        setTimeout(() => dispatch(setNavbarFader("home", true)), 750);
        setTimeout(() => dispatch(setNavbarFader("work", true)), 1000);
        setTimeout(() => dispatch(setNavbarFader("references", true)), 1500);
    }
  }, [splashScreenPositionModifier, dispatch]);

  const handleViewChange = (view) => {
    dispatch(setActiveView(null));
    setTimeout(() => {
      dispatch(setActiveView(view));
    }, 600);
  };

  const logoClick = () => {
    dispatch(setActiveView(null))
    setTimeout(() => dispatch(setNavbarFader("references", false)), 500);
    setTimeout(() => dispatch(setNavbarFader("work", false)), 750);
    setTimeout(() => dispatch(setNavbarFader("home", false)), 1000);
    setTimeout(() => dispatch(setNavbarFader("image", false)), 1250);
    setTimeout(() => {
        dispatch(setSplashScreenPositionModifier("0"));
        setTimeout(() => dispatch(updateSplashScreenFader("image", true)), 500);
        setTimeout(() => dispatch(updateSplashScreenFader("name", true)), 750);
        setTimeout(() => dispatch(updateSplashScreenFader("button", true)), 1000);
    }, 1750)
  };

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        height: isMobile ? "75px" : "100vh",
        width: isMobile ? "100vw" : "110px",
        background: !isMobile ? 'linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(6,29,38,1) 100%)' : theme.black,
        color: theme.white,
        transition: "height 0.3s ease",
        zIndex: 3,
      }}
    >
      {!isMobile && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 15,
            cursor: "pointer",
          }}
          onClick={logoClick}
        >
          <Fade timeout={750} in={navbarFader.image}>
            <img src={logo} alt="Logo" width="60%" />
          </Fade>
        </Box>
      )}
      <>
        <Fade timeout={750} in={navbarFader.home}>
          <Box
            style={{
              display: isMobile && "flex",
              flex: isMobile && 1,
              justifyContent: isMobile && "center",
              alignItems: isMobile && "center",
              flexDirection: "column",
            }}
          >
            <IconButton
              onClick={() => handleViewChange("welcome")}
              style={{
                color: activeView == "welcome" ? theme.secondary : theme.white,
                display: "flex",
                flexDirection: "column",
                transition: "color 0.3s ease",
              }}
            >
              <HomeIcon />
            </IconButton>
            <LogoFont
              text="Home"
              fontColor={
                activeView == "welcome" ? theme.secondary : theme.white
              }
              fontWeight={500}
              fontSize="12px"
              fontAlign="center"
              fontMargin="0px"
            />
          </Box>
        </Fade>
        <Fade timeout={750} in={navbarFader.work}>
          <Box
            style={{
              display: isMobile && "flex",
              flex: isMobile && 1,
              justifyContent: isMobile && "center",
              alignItems: isMobile && "center",
              margin: !isMobile && "30px 0px",
              flexDirection: "column",
            }}
          >
            <IconButton
              onClick={() => handleViewChange("work")}
              style={{
                color: activeView == "work" ? theme.secondary : theme.white,
                display: "flex",
                flexDirection: "column",
                transition: "color 0.3s ease",
              }}
            >
              <WorkIcon />
            </IconButton>
            <LogoFont
              text="Work"
              fontColor={activeView == "work" ? theme.secondary : theme.white}
              fontWeight={500}
              fontSize="12px"
              fontAlign="center"
              fontMargin="0px"
            />
          </Box>
        </Fade>
        <Fade timeout={750} in={navbarFader.references}>
          <Box
            style={{
              display:  "flex",
              flexDirection: "column",
              flex: isMobile && 1,
              justifyContent:"center",
              alignItems:  "center",
            }}
          >
            <IconButton
              onClick={() => handleViewChange("recommend")}
              style={{
                color:
                  activeView == "recommend" ? theme.secondary : theme.white,
                display: "flex",
                flexDirection: "column",
                transition: "color 0.3s ease",
              }}
            >
              <DescriptionIcon />
            </IconButton>
            <LogoFont
              text="References"
              fontColor={
                activeView == "recommend" ? theme.secondary : theme.white
              }
              fontWeight={500}
              fontSize="12px"
              fontAlign="center"
              fontMargin="0px"
            />
          </Box>
        </Fade>
      </>
    </Box>
  );
};

export default Navbar;
