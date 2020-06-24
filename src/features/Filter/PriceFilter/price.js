import React, { Component } from 'react';
import { Slider } from 'react-semantic-ui-range'
import { Segment, Grid, Label, Input } from 'semantic-ui-react';

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value: 0
    }
  }

  handleValueChange(e, { value }) {
    this.setState({
      value: value
    })
  }

  render() {
   
    const labelStyle = {
        color: "white",
        backgroundColor: "#e95338",
        padding: "5px",
        fontFamily: "Arial",
        marginLeft: "40%"
      };
    return (
      <Grid padded>

        <Grid.Column width={16} >
          <Segment>
            <p>
              <Slider color="red" inverted={false}
                settings={{
                  start: this.state.value1,
                  min: 0,
                  max: 200,
                  step: 25,
                  onChange: (value) => {
                    this.setState({
                      value1: value
                    })
                  }
                }} />
            </p>
            <Label className="col-lg-2 text-center col-md-6 ml-md-4 col-3" style={labelStyle}>${this.state.value1}</Label>
          </Segment>
        </Grid.Column>
        
        
      </Grid>

    );
  }

}

export default Price
