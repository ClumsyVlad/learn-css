import styled from "styled-components"

import { Title } from "@/components/atoms"
import { Page } from "@/components/molecules"
import { Spacings } from "@/styles"

export const Component = () => {
  return (
    <Page title="Basic styles">
      <OurCSS>
        <Title>Basic styles</Title>
        <p>Let's fix the mess</p>
        <Grid>
          <div className="box">200x200</div>
          <div className="box">100% width</div>
          <div className="box">
            <p className="orange-text">Make me orange</p>
            <p>Leave me</p>
          </div>
          <div className="box">
            <p>Leave me</p>
            <p>Make me purple</p>
          </div>
          <div className="box">
            <p>Odd</p>
            <p>Even</p>
            <p>Odd</p>
            <p>Even</p>
          </div>
        </Grid>
      </OurCSS>
    </Page>
  )
}

const OurCSS = styled.div`
  .box {
    padding: 20px;
    background: tomato;
  }
`

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 248px);
  justify-items: center;
  border: 1px solid black;
  gap: ${Spacings.medium};

  p {
    margin: 0;
  }
`
