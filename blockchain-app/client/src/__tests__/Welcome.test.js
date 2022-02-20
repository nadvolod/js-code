import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Welcome from '../components/Welcome'

describe('Welcome', () => {
    test('renders', () => {
        render(<Welcome />)
        screen.debug()
    })
})
