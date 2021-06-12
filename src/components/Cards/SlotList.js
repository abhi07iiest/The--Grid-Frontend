import axios from 'axios';
import React, { Component } from 'react'

export class SlotList extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
           value:"",
        }
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value})
        console.log(this.state.value)
      }

      
      handlebook= e =>{
        e.preventDefault();
        const data={
          date: this.state.value,
          disease:this.props.skill,
          id:this.props.doctor_id

        }
        axios.post('/v1/appoint/doc_slot',data).then(
          res=>{
            console.log(res.data.payload.slot)
            this.setState({slot_data:res.data.payload.slot})
          
          }
        )
        .catch(err =>{
          if (err.response) {
            alert(err.response.data.message)

          }
          console.log(err)
        })
      }
    







   
    render() {
        return (
            <div>
                <select className="w-full py-2 mb-4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={this.state.value} onChange={this.handleChange}>
                {this.props.data.map((data,key)=>(
                    <option value={data.schedule_id}>{data.time}</option>
                ))}
                </select>
                <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-blue-600 bg-blue-700 rounded text-white px-8 py-2 text-xs sm:text-sm"  onClick={this.handlebook}>Book</button>
            </div>
        )
    }
}

export default SlotList
