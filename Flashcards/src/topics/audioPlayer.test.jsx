import AudioPlayer from './AudioPlayer';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, shallow } from '@testing-library/react';


describe('AudioPlayer_function', () => {
	// Tests that the AudioPlayer component renders without errors.
	it("test_render_without_errors", () => {
        const wrapper = shallow(<AudioPlayer />);
        expect(wrapper.exists()).toBe(true);
    });
	it("test_render_audio_player", () => {
        const wrapper = shallow(<AudioPlayer />);
        expect(wrapper.find('audio')).toHaveLength(3);
    });
	it("test_correct_audio_files", () => {
        const wrapper = shallow(<AudioPlayer />);
        expect(wrapper.find('audio').at(0).prop('src')).toEqual(song);
        expect(wrapper.find('audio').at(1).prop('src')).toEqual(song2);
        expect(wrapper.find('audio').at(2).prop('src')).toEqual(song3);
    });
});

// it("test_audio_controls", () => {
// 	const wrapper = mount(<AudioPlayer />);
// 	const audioElement = wrapper.find('audio').at(0).getDOMNode();
// 	expect(audioElement.paused).toBe(true);
// 	audioElement.play();
// 	expect(audioElement.paused).toBe(false);
// 	audioElement.pause();
// 	expect(audioElement.paused).toBe(true);
// });

// it("test_missing_audio_files", () => {
// 	const invalidSong = 'invalidSong.mp3';
// 	const wrapper = shallow(<AudioPlayer song={invalidSong} />);
// 	expect(wrapper.find('audio').prop('src')).toEqual(invalidSong);
// 	expect(wrapper.find('.error-message').text()).toEqual('Error: Audio file not found');
// });

// it("test_no_audio_files", () => {
// 	const wrapper = shallow(<AudioPlayer />);
// 	expect(wrapper.find('audio')).toHaveLength(0);
// 	expect(wrapper.find('.message').text()).toEqual('No audio files available');
// });

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