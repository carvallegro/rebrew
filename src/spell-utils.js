import * as R from 'ramda'
import * as Yup from 'yup'
import { formModes } from './utils'

export const spellLevels = [
  {
    value: 0,
    label: 'Cantrip'
  },
  {
    value: 1,
    label: '1st level'
  },
  {
    value: 2,
    label: '2nd level'
  },
  {
    value: 3,
    label: '3rd level'
  },
  {
    value: 4,
    label: '4th level'
  },
  {
    value: 5,
    label: '5th level'
  },
  {
    value: 6,
    label: '6th level'
  },
  {
    value: 7,
    label: '7th level'
  },
  {
    value: 8,
    label: '8th level'
  },
  {
    value: 9,
    label: '9th level'
  }
]

export const spellSchools = [
  'Abjuration',
  'Conjuration',
  'Divination',
  'Enchantment',
  'Evocation',
  'Illusion',
  'Necromancy',
  'Transmutation'
]

export const spellComponents = {
  V: {
    value: 'V',
    label: 'Verbal (V)'
  },
  M: {
    value: 'M',
    label: 'Material (M)'
  },
  S: {
    value: 'S',
    label: 'Somatic (S)'
  }
}

export const SPELL_ATTRIBUTES = [
  'name',
  'srd',
  'type',
  'level_number',
  'school',
  'casting_time',
  'range',
  'components',
  'duration',
  'desc'
]

const eqInsensitive = R.curry(
  (a, b) => String(a).toLowerCase() === String(b).toLowerCase()
)

export const generateSpellSchema = (spellNames, mode) =>
  Yup.object().shape({
    name: Yup.string()
      .trim()
      .nullable()
      .test(
        'notAnExistingSpellNameTest',
        'There is already a spell with that name',
        value =>
          mode === formModes.EDIT || !R.find(eqInsensitive(value), spellNames)
      )
      .required('You must enter a name'),
    level_number: Yup.string()
      .nullable()
      .trim()
      .required('You must select a spell type'),
    school: Yup.string()
      .nullable()
      .trim()
      .required('You must select a school of magic'),
    casting_time: Yup.string()
      .trim()
      .required('You must enter a casting time'),
    range: Yup.string()
      .trim()
      .required('You must enter a range'),
    duration: Yup.string()
      .trim()
      .required('You must enter a duration'),
    components: Yup.string()
      .trim()
      .required('You must select at least one component'),
    desc: Yup.string()
      .trim()
      .required('You must enter a description')
  })
