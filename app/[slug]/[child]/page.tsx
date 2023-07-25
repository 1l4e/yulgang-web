import NotFound from '@/app/not-found';
import Character from '@/components/pages/character';
import GuildInfo from '@/components/pages/child/guildInfo';
import React from 'react'

const ChildSlug = ({params,searchParams}:any) => {
    const {slug,child} = params;
    const pages = {
        character: Character,
        "rank-guild": GuildInfo
    }
    const Components = pages[slug] || NotFound
  return (
    <Components params={params} searchParams={searchParams}/>
  )
}

export default ChildSlug