import React from "react";
import { LocalForm, Control } from "react-redux-form";

export default class MyApp extends React.Component {
  handleChange(values) {
    console.log("values", values);
  }
  handleUpdate(form) {
    console.log("form", form);
  }
  handleSubmit(values) {
    console.log("values", values);
  }
  render() {
    return (
      <LocalForm
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
        onSubmit={(values) => this.handleSubmit(values)}
      >
        <Control.text model=".username" />
        <Control.text model=".password" />
      </LocalForm>
    );
  }
}
