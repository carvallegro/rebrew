import React from 'react'

import BackgroundTable from './index'

export default {
  component: BackgroundTable,
  title: 'Backgrounds Table'
}

const DATA = [
  {
    name: 'Acolyte',
    feature: 'Shelter of the Faithful',
    desc:
      'As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.\nYou might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.',
    skills_count_choose: 0,
    skills: ['Insight', 'Religion']
  },
  {
    name: 'Criminal / Spy',
    feature: 'Criminal Contact',
    desc:
      'Who acts like liaison of you to any network of criminals, you have trustworthy and reliable contact from them. How to get the messages from your contact and also to your contact is well known to you. Even over great distances too you can get the messages; specially you know the corrupt caravan masters and also the local messengers even the seedy sailors who can able to deliver messages for you.',
    skills_count_choose: 0,
    skills: ['Deception', 'Stealth']
  },
  {
    name: 'Folk Hero',
    feature: 'Rustic Hospitality',
    desc:
      'You have come from a humble social rank, but you could destined for so much more. Of course already the peoples those who are your home village regard you like their champion and also your destiny do call you to stand against the tyrants and also monsters those are threaten the common folk everywhere.',
    skills_count_choose: 0,
    skills: ['Animal Handling', 'Survival']
  },
  {
    name: 'Noble',
    feature: 'Position of Privilege',
    desc:
      'Actually, people are inclined to think the best of you, so you should thanks to your noble birth. The advantages of this feature are\n\nYou’re always welcome in the high society and also all the people do start to assume that you have the right to be wherever you are.\nBut the common folk and the merchants make each and every effort to accommodate you and also avoid the displeasure of your’s\nThe other peoples who has high birth they treat you as a member of the same social sphere. If you need to secure an audience, you can secure with the local noble.\n',
    skills_count_choose: 0,
    skills: ['History', 'Persuasion']
  },
  {
    name: 'Sage',
    feature: 'Researcher',
    desc:
      'You know more oftenly like where and from whom you can able to obtain the information, that whenever you attempt to learn or recall the piece of lore, if you don’t have any idea about that specific information.\n\nFrom the other learned creature or person, from any library, from the scriptorium, from the university, this information usually comes.\n\nHere your Dungeon Master might rule the knowledge which you seek is secreted away in an almost inaccessible place or simply it can not be found.\n\nUnearthing the deepest secrets of the multiverse able to require an adventure or even the whole campaign.',
    skills_count_choose: 0,
    skills: ['Arcana', 'History']
  },
  {
    name: 'Soldier',
    feature: 'Military Rank',
    desc: null,
    skills_count_choose: 0,
    skills: ['Athletics', 'Intimidation']
  }
]

export const defaultRender = () => <BackgroundTable backgrounds={DATA} />
