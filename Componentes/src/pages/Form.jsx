import React from 'react'
import FormfacadeEmbed from "@formfacade/embed-react";

const Form = () => {
  return (
    <div className='form'>
      <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/101846045884088824846/form/1FAIpQLSdtzL9w4GS76c4rGQUwIDob5T1VAxIHzyRbTNi9f2GWPk6hOw/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>







    </div>
    
  )
}

export default Form
