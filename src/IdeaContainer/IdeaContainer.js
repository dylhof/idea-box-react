import React from 'react';
import IdeaCard from '../IdeaCard/IdeaCard'

 const IdeaContainer = (props) => {
  const ideaCards = props.ideas.map(idea => {
    return <IdeaCard key={idea.id} idea={idea} removeIdea={props.removeIdea}/>
  })
  return(
    <div>
      {ideaCards}
    </div>
  )
}

export default IdeaContainer;