import React from 'react';
import { Control, Form } from 'react-redux-form';

class MyForm extends React.Component {
  handleSubmit(val) {
    console.log(val);
  }

  getControls() {
    const inputs = [];

    for (var i=0; i < 500; i++) {
      inputs.push(
        <div key={`control-${i}`}>
          <Control.text model={`user.${i}`} />
        </div>
      )
    }
    return inputs;
  }

  render() {
    return (
      <div>
        <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
          {this.getControls()}
          <button>Submit!</button>
        </Form>
      </div>
    );
  }
}

// No need to connect()!
export default MyForm;
