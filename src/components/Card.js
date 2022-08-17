import React from 'react'

const Card = ({id,title,body}) => {
  return (
    <div style={{background:'white', padding:'30px',borderRadius:'10px',boxShadow:'#aaa8a833 0px 0px 20px 9px',textAlign:'left'}}>
        <div style={{backgroundColor:'#ff3366',color:'white',width:'50px',height:'50px',borderRadius:'100px',fontWeight:'600',display:'flex',justifyContent:'center',alignItems:'center',margin:'auto'}}>
            {id}
        </div>
        <p className='' style={{margin:'0',fontSize:'20px',fontWeight:'600',textTransform:'capitalize',wordBreak:'break-all',paddingTop:'24px'}}>{title}</p>
        <p className='' style={{margin:'0',fontSize:'16px',fontWeight:'400',textTransform:'capitalize',wordBreak:'break-all',color:'gray',paddingTop:'24px'}}>{body}</p>
    </div>
  )
}

export default Card