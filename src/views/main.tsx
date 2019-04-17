import React from "react";

import Layout from "../components/layout/layout";
import Navbar from "../components/layout/navbar";
import Card from "../components/layout/card";
import UserForm from "../components/form/user_form";

const MainView = () => (
  <Layout>
    <Navbar />
    <Card>
      <UserForm />
    </Card>
  </Layout>
);

export default MainView;
