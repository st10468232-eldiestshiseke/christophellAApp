
Changelog: Part 2 → Part 3
1. UI/UX Enhancements


Summary Card Design:

Added a dedicated summary card to display total dishes and average prices by course.
Used <ImageBackground> for the summary card to make it visually appealing.
Added a semi-transparent overlay to ensure text readability on the image background.



Menu Item Cards:

Improved the design of menu item cards with shadows, rounded corners, and better spacing.
Added consistent styling for all cards across the app.



Buttons:

Replaced default <Button> components with custom-styled <TouchableOpacity> buttons.
Added press effects (visual feedback) for buttons using onPressIn and onPressOut.
Improved button aesthetics with rounded corners, padding, and color changes.




2. New Features


Image Backgrounds:

Added image backgrounds to the summary card and menu item cards for a more engaging UI.
Used <ImageBackground> to integrate images seamlessly into the app.



Interactive Elements:

Added press effects to buttons for better user feedback.
Improved the visual hierarchy of the app with better typography and spacing.




3. Code Refactoring


Component Structure:

Refactored the HomeScreen, AddMenuScreen, and FilterScreen to use custom-styled components instead of default React Native components.
Improved reusability of components like cards and buttons.



Styling:

Used StyleSheet more effectively to maintain consistent styling across screens.
Added semi-transparent overlays for better text readability on image backgrounds.




4. Visual Improvements


Consistent Design Language:

Ensured all screens follow a cohesive design language with matching colors, fonts, and spacing.
Used elevation and shadows for depth in cards and buttons.



Image Integration:

Added background images to the summary card and menu item cards.
Adjusted opacity and overlays to ensure text remains readable.




5. Bug Fixes and Optimizations


Fixed Layout Issues:

Ensured all elements are responsive and adapt to different screen sizes.
Fixed alignment and spacing issues in cards and buttons.



Performance:

Optimized image loading to prevent lag.
Improved FlatList rendering for smoother scrolling.

Feature,Part 2,Part 3
Summary Card,Basic text display,Styled card with image background and overlay
Buttons,Default <Button> component,Custom <TouchableOpacity> with press effects
Menu Item Cards,Basic layout,Styled cards with shadows and rounded corners
Image Backgrounds,None,Added to summary and menu item cards
Interactive Feedback,None,Press effects for buttons
Code Structure,Basic components,Refactored for reusability and consistency

Reference:
The Independent Institute of Education (Pty) Ltd (2022)
IIE Module Manual 2025.
Available at: https://advtechonline.sharepoint.com/\:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true
(Accessed: 27 August 2025).
