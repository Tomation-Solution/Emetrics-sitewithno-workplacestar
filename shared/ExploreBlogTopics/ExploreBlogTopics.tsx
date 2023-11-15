import { ExploreBlogTopicsContainer, ExploreTopics, ExploreTopicsContainer } from './ExploreBlogTopics.style'





const ExploreBlogTopics= ():React.ReactElement=>{
  return (

    <ExploreBlogTopicsContainer>
      <h2>Explore More Topics</h2>
      <p>Ready to brush up on something new? We{'\''}ve got more to read right this way.</p>

      <ExploreTopicsContainer>
        <ExploreTopics>
          <p><strong>Email Marketing</strong></p>
        </ExploreTopics>

        <ExploreTopics>
          <p><strong>Instagram Markerting</strong></p>
        </ExploreTopics>

      </ExploreTopicsContainer>
    </ExploreBlogTopicsContainer>
  )
}

export default ExploreBlogTopics