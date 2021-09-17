import React, { FC, useState } from "react"
import styled from "styled-components"
import VizSensor from "react-visibility-sensor"
import { Fade } from "@material-ui/core"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const Image = styled.div`
  width: 100%;

  .deco {
    width: 100%;
    padding-top: 125%;
    background-size: cover;
    background-position: center center;

    @media (min-width: 769px) {
      opacity: 1;
      -webkit-transition: 0.3s ease-in-out;
      transition: 0.3s ease-in-out;
    }
  }

  :hover {
    @media (min-width: 769px) {
      opacity: 0.65;
    }
  }
`

const Date = styled.div`
  margin-top: 1.5rem;
  font-family: raleway, sans-serif;
  color: #8b9a72;
`

const Title = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: freight-sans-pro, sans-serif;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 200;
  text-align: center;
`

const Separator = styled.div`
  border-top: #8b9a72 solid 1px;
  width: 1.5rem;
`

const Tags = styled.div`
  margin-top: 1.1rem;
  font-family: raleway, sans-serif;
  display: flex;
  gap: 4px;
  font-size: 0.6rem;
  color: #1f1f1f;
  text-transform: uppercase;
`

export const PostCard: FC<{ post: any }> = ({ post }) => {
  const [active, setActive] = useState<boolean>(false);
  const image = getImage(post.frontmatter.featuredimage);

  // @ts-ignore
  return (<>
    <VizSensor
      partialVisibility={true}
    onChange={(isVisible) => {
      if (!active) {
        setActive(isVisible)
      }
    }}
  >

    <Fade in={active} timeout={1500}><Card>
      <Image>
        { image && <GatsbyImage image={image} alt="image" />}
      </Image>
      <Date>{post.frontmatter.date}</Date>
      <Title>{post.frontmatter.title}</Title>
      <Separator />
      <Tags>
        {post.frontmatter.tags?.map((tag: string) => (
          <div key={tag}>{tag}</div>
        ))}
      </Tags>
    </Card>
    </Fade>
  </VizSensor></>)
}
