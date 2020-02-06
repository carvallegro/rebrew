import * as R from 'ramda'
import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { Button, Cell, Grid, HFlow, Text } from 'bold-ui'

import {
  SpellName,
  SpellType,
  SpellSchool,
  SpellCastingTime,
  SpellRange,
  SpellDuration,
  SpellComponents,
  SpellDescription
} from '../../components/spell-fields'

const FORM_INITIAL_VALUES = {
  name: 'Name',
  srd: false,
  level_number: '',
  school: '',
  casting_time: '',
  range: '',
  duration: '',
  components: '',
  desc: ''
}

const eqInsensitive = R.curry(
  (a, b) => String(a).toLowerCase() === String(b).toLowerCase()
)

const generateSpellSchema = (spellNames, mode) =>
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

export const SpellIntroduction = () => (
  <Fragment>
    <Text component="p" fontSize={1}>
      A spell is a discrete magical effect, a single shaping of the magical
      energies that suffuse the multiverse into a specific, limited expression.
      In casting a spell, a character carefully plucks at the invisible strands
      of raw magic suffusing the world, pins them in place in a particular
      pattern, sets them vibrating in a specific way, and then releases them to
      unleash the desired effect—in most cases, all in the span of seconds.
    </Text>
    <Text component="p" fontSize={1}>
      Spells can be versatile tools, weapons, or protective wards. They can deal
      damage or undo it, impose or remove conditions, drain life energy away,
      and restore life to the dead.
    </Text>
  </Fragment>
)

const formModes = {
  CREATE: 'create',
  EDIT: 'edit'
}

const SpellForm = ({
  mode,
  spell = FORM_INITIAL_VALUES,
  allSpellNames = [],
  onSave
}) => {
  const {
    handleSubmit,
    errors,
    handleChange,
    values,
    setValues,
    setFieldValue,
    touched,
    setFieldTouched
  } = useFormik({
    initialValues: FORM_INITIAL_VALUES,
    validationSchema: generateSpellSchema(allSpellNames, mode),
    onSubmit: value => {
      console.log(JSON.stringify(onSave))
      onSave(value)
      return navigate('/spells')
    }
  })

  useEffect(() => {
    setValues(spell)
  }, [spell, setValues])

  return (
    <Grid gap={2} gapVertical={1}>
      <Cell sm={8} xs={12}>
        <SpellName
          value={values.name}
          error={errors.name && touched.name && errors.name}
          disabled={mode === formModes.EDIT}
          onBlur={() => setFieldTouched('name')}
          onChange={handleChange}
        />
      </Cell>

      <Cell sm={5} xs={12}>
        <SpellType
          value={values.level_number}
          error={
            errors.level_number && touched.level_number && errors.level_number
          }
          onChange={v => setFieldValue('level_number', v ? v.value : null)}
          onBlur={() => setFieldTouched('level_number')}
        />
      </Cell>

      <Cell sm={7} xs={12}>
        <SpellSchool
          value={values.school}
          error={errors.school && touched.school && errors.school}
          onChange={v => setFieldValue('school', v)}
          onBlur={() => setFieldTouched('school')}
        />
      </Cell>

      <Cell sm={4} xs={12}>
        <SpellCastingTime
          value={values.casting_time}
          error={
            errors.casting_time && touched.casting_time && errors.casting_time
          }
          onChange={handleChange}
          onBlur={() => setFieldTouched('casting_time')}
        />
      </Cell>

      <Cell sm={4} xs={12}>
        <SpellRange
          value={values.range}
          error={errors.range && touched.range && errors.range}
          onChange={handleChange}
          onBlur={() => setFieldTouched('range')}
        />
      </Cell>

      <Cell sm={4} xs={12}>
        <SpellDuration
          value={values.duration}
          error={errors.duration && touched.duration && errors.duration}
          onChange={handleChange}
          onBlur={() => setFieldTouched('duration')}
        />
      </Cell>

      <Cell sm={8} xs={12}>
        <SpellComponents
          value={values.components}
          error={errors.components && touched.components && errors.components}
          onChange={v => setFieldValue('components', v)}
          onBlur={() => setFieldTouched('components')}
          onFocus={R.identity}
        />
      </Cell>

      <Cell xs={12}>
        <SpellDescription
          rows={6}
          value={values.desc}
          error={errors.desc && touched.desc && errors.desc}
          onChange={handleChange}
          onBlur={() => setFieldTouched('desc')}
        />
      </Cell>

      <Cell xs={12}>
        <HFlow justifyContent="flex-end">
          <Button
            kind="normal"
            skin="outline"
            size="medium"
            onClick={() => navigate('/spells')}
          >
            Cancel
          </Button>
          <Button
            kind="primary"
            skin="default"
            size="medium"
            onClick={handleSubmit}
          >
            {mode === formModes.CREATE && 'Create'}
            {mode === formModes.EDIT && 'Save'}
          </Button>
        </HFlow>
      </Cell>
    </Grid>
  )
}

SpellForm.propType = {
  mode: PropTypes.oneOf(Object.values(formModes)).isRequired,
  spell: PropTypes.object,
  allSpellNames: PropTypes.arrayOf(PropTypes.string),
  onSave: PropTypes.func.isRequired
}

export default SpellForm
