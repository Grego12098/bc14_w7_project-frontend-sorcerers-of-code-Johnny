import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import '@testing-library/jest-dom/extend-expect';
import AudioPlayer from './AudioPlayer';

describe('AudioPlayer', () => {
    test('renders all audio elements correctly', () => {
        // Arrange
        render(<AudioPlayer />);
    
        // Act
        const song1AudioElement = screen.getByTestId('song1-audio');
        const song2AudioElement = screen.getByTestId('song2-audio');
        const song3AudioElement = screen.getByTestId('song3-audio');
    
        // Assert
        expect(song1AudioElement).toHaveAttribute(
            'src',
            expect.stringContaining('DanielVeesey-SonataNo_19inGMinor_Op_49_No_1 _ I_Andante.mp3')
        );
        expect(song2AudioElement).toHaveAttribute(
            'src',
            expect.stringContaining('Vassily_Primakov_piano-Felix_Mendelssohn_Songs_Without_Words.mp3')
        );
        expect(song3AudioElement).toHaveAttribute(
            'src',
            expect.stringContaining('MusicianStringTrio.mp3')
        );
    
        expect(song1AudioElement).toHaveAttribute('controls');
        expect(song2AudioElement).toHaveAttribute('controls');
        expect(song3AudioElement).toHaveAttribute('controls');
    });
  
    test('renders the correct heading', () => {
        // Arrange
        render(<AudioPlayer />);
    
        // Act
        const headingElement = screen.getByRole('heading', { level: 2 });
    
        // Assert
        expect(headingElement.textContent).toBe('Study Music');
    });
});

// IS IT NECESSARY TO TEST PAUSE AND PLAY BUTTONS??
// test('fires play event when play button is clicked', async () => {
//     render(<AudioPlayer />);

//     const audioPlayerElement = screen.getByTestId('song1-audio');
//     // waitFor(() =>  fireEvent.click(audioPlayerElement));
   
//     fireEvent.click(audioPlayerElement.play());
//     await new Promise((resolve) => setTimeout(resolve, 1000));
    
//     expect(audioPlayerElement.paused).toBeFalsy();
//   });

//   test('fires pause event when pause button is clicked', () => {
//     render(<AudioPlayer />);

//     const audioPlayerElement = screen.getByTestId('song1-audio');

//     fireEvent.click(audioPlayerElement);
//     fireEvent.click(audioPlayerElement);

//     expect(audioPlayerElement.paused).toBeTruthy();
//   });

// describe('AudioPlayer_function', () => {
// 	// Tests that the AudioPlayer component renders without errors.
// 	it('test_audio_player_renders_without_errors', () => {
// 		render(<AudioPlayer />);
// 		expect(screen.getByText('Study Music')).toBeInTheDocument();

// 		const mockFn = vi.fn().mockImplementation(screen.getAllByRole('audio'));
// 		mockFn.mockReturnValueOnce(new Array(3)); // Mock the return value of getAllByRole

// 		// expect(mockFn).toHaveBeenCalledWith('audio');
// 		// expect(mockFn).toHaveBeenCalledTimes(1);
//         // const audioElements = screen.getAllByRole('audio');
//         // expect(audioElements).toHaveLength(3);
// 	});
// });