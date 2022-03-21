import  React from 'react';
class test extends React.Component()
{
  constructor(props)
  {
      super(props);
      const current = new Date();
      this.state={
      //date: `{current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
      };
  }
    
    render(){
        return(
            <div id="root">
                <h1>Tempthelete</h1>
                <br></br>
                <br></br>
                <div id="d1">
                    <h2>London</h2>
                    <h3></h3>
                    <table>
                        <tr>
                            <td>image</td>
                            <td>Temprature</td>
                        </tr>
                        <tr>
                            <td>weather descriptiom</td>
                            <td>High and low tempratures</td>
                        </tr>
                    </table>
                    <br></br>
                    </div>

            </div>
        );
    };
}
export default test;
