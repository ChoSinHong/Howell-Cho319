# Audio Directory

This directory contains all audio assets for the HowellCho Profile Website.

## Directory Structure

```
assets/audio/
├── howell_audio1.mp4    # Personal audio content
├── howell_audio2.mp4    # Additional audio content
├── howell_music.mp4     # Music content
└── README.md            # This documentation file
```

## Audio Files

### Personal Audio Content
- **`howell_audio1.mp4`** - Primary personal audio content
- **`howell_audio2.mp4`** - Secondary personal audio content
- **`howell_music.mp4`** - Music or musical content

## File Guidelines

### Format Standards
- **Container**: MP4 (widely supported)
- **Audio Codec**: AAC or MP3 for best compatibility
- **Quality**: Balance between file size and audio quality
- **Bitrate**: 128-320 kbps recommended

### Optimization
- Compress audio files to reduce loading times
- Consider multiple formats for broader browser support
- Use appropriate bitrates based on content type:
  - Speech: 64-128 kbps
  - Music: 192-320 kbps

### Usage in Website
Audio files can be integrated into the website using:

1. **HTML5 Audio Element**:
   ```html
   <audio controls>
       <source src="assets/audio/howell_music.mp4" type="audio/mp4">
       Your browser does not support the audio element.
   </audio>
   ```

2. **Background Audio** (use sparingly):
   ```html
   <audio autoplay loop>
       <source src="assets/audio/howell_music.mp4" type="audio/mp4">
   </audio>
   ```

3. **JavaScript Control**:
   ```javascript
   const audio = new Audio('assets/audio/howell_audio1.mp4');
   audio.play();
   ```

## Implementation Suggestions

### Portfolio Integration
- **About Section**: Add personal audio introduction
- **Skills Section**: Audio explanations of technical expertise
- **Projects Section**: Audio walkthroughs of key projects
- **Background Music**: Subtle ambient music (with user control)

### User Experience
- Always provide audio controls (play/pause/volume)
- Include visual indicators for audio content
- Respect user preferences (don't autoplay)
- Provide transcripts for accessibility

### Performance Considerations
- Lazy load audio files
- Preload only critical audio content
- Use appropriate compression
- Consider streaming for longer content

## Accessibility

### Best Practices
- Provide text alternatives or transcripts
- Include captions for speech content
- Use ARIA labels for audio controls
- Ensure keyboard navigation support

### Example Implementation
```html
<audio controls aria-label="Howell's personal introduction">
    <source src="assets/audio/howell_audio1.mp4" type="audio/mp4">
    <p>Your browser doesn't support HTML5 audio. 
       <a href="assets/audio/howell_audio1.mp4">Download the audio file</a>.</p>
</audio>
<p><strong>Transcript:</strong> [Provide text transcript here]</p>
```

## File Management

### Naming Convention
- Use descriptive, lowercase names
- Include content type in filename
- Use hyphens for spaces: `howell-introduction.mp4`
- Version files if needed: `howell-intro-v2.mp4`

### Organization Tips
- Group related audio files
- Keep file sizes reasonable (< 10MB for web)
- Backup original high-quality versions
- Document content and usage for each file

## Browser Support

### MP4 Audio Support
- ✅ Chrome: Full support
- ✅ Firefox: Full support
- ✅ Safari: Full support
- ✅ Edge: Full support
- ✅ Mobile browsers: Generally supported

### Fallback Strategy
```html
<audio controls>
    <source src="assets/audio/howell_music.mp4" type="audio/mp4">
    <source src="assets/audio/howell_music.ogg" type="audio/ogg">
    <source src="assets/audio/howell_music.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
```

For questions about audio implementation, contact the development team.
