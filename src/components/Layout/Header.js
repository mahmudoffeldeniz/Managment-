import React from "react";
import { Avatar, Popover, Layout, Button } from "antd";
import {UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { logOut } from "../../redux/actions";
import Image from "../../assets/img/image";
import { Link } from "react-router-dom";

const { Header } = Layout;

const HeaderMain = ({ setCollapsed,  collapsed, user, logOut }) => {
    const text = (
        <span>
             Username: {user.companyData.username} <br /> Email: {user.companyData.email}
        </span>
    );

    const content = (
        <div className="d-flex justify-content-between">
            <Link to={"/"} className="text-decoration-none ">
                <Button
                    onClick={() => {
                        logOut();
                    }}
                    className="me-2 d-flex align-items-center profile-btn"
                >
                    <SettingOutlined />
                    Log out
                </Button>
            </Link>
            <Link to={"/usersettings"} className="text-decoration-none ">
                <Button className="me-2 d-flex align-items-center profile-btn">
                    <LogoutOutlined />
                    Settings
                </Button>
            </Link>
        </div>
    );
    return (
        <>
            <Header
                style={{
                    padding: 0,
                    background: "lavenderblush",
                }}
            >
                <div className="d-flex justify-content-end align-items-center">
                    <Popover placement="bottomLeft" title={text} content={content} trigger="click">
                        <Avatar className="me-3 mt-3 d-flex justify-content-center align-items-center" >
                            <img style={{cursor:'pointer'}} src={Image.Exit} alt="exit"/>
                            </Avatar>
                    </Popover>
                </div>
            </Header>
        </>
    );
};

const mapStateToProps = ({ user }) => ({
    user,
});

export default connect(mapStateToProps, { logOut })(HeaderMain);
