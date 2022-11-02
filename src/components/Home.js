import React from 'react';
import styled from "styled-components";
import Section from "./Section"

const Home = () => {
  return (
    <Container>
          <Section

          title="Model S"
          description="Order Online for Touches Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText= "Custom Order"
          rightBtnText= "Existing Inventory"

           />
          <Section 
             title="Model Y"
             description="Order Online for Touches Delivery"
             backgroundImg="model-y.jpg"
             leftBtnText= "Custom Order"
             rightBtnText= "Existing Inventory"
          
          />
          <Section 
           title="Model 3"
           description="Order Online for Touches Delivery"
           backgroundImg="model-3.jpg"
           leftBtnText= "Custom Order"
           rightBtnText= "Existing Inventory"
          
          />

           <Section 
           title="Model X"
           description="Order Online for Touches Delivery"
           backgroundImg="model-x.jpg"
           leftBtnText= "Custom Order"
           rightBtnText= "Existing Inventory"
          
          />
          <Section 
           title="Lowest Cost Solar Panels in America"
           description="Money-Back Guarantee "
           backgroundImg="solar-panel.jpg"
           leftBtnText= "Order now"
           rightBtnText= "Learn More"
          
          />

           <Section 
           title="Solar for New Roofs"
           description="Solar Roof Costs less than a New Roof "
           backgroundImg="solar-roof.jpg"
           leftBtnText= "Order now"
           rightBtnText= "Learn More"
          
          />
           <Section 
           title="Accessories"
           description="Solar Roof Costs less than a New Roof "
           backgroundImg="accessories.jpg"
           leftBtnText= "Shop now"
           
          
          />
          
    </Container>
  )
}

export default Home;

const Container = styled.div`
      height: 100vh;
      z-index:10;
      
`