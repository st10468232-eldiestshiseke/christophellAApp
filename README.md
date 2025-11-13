# **Christophell App PoE Final part**



## **1. Introduction**
This report represents the final part (Part 3) of the Portfolio of Evidence (PoE) for Christoffel’s Menu App.
This React Native mobile application was developed for Christoffel, a private chef who offers personalized culinary experiences.
The purpose of this app is to allow Christoffel to efficiently manage and update his menu, ensuring that clients always have access to his latest offerings.
________________________________________
## **2. Application Overview**
The Christoffel’s Menu App is a cross-platform mobile application built using React Native and Expo.
It provides a streamlined experience for the chef to add, remove, and manage dishes within the menu.
Clients can view the current menu and filter items based on different courses such as Starters, Mains, or Desserts.
The main goals of the application are:
•	To simplify menu management for Christoffel.
•	To provide clients with an elegant digital view of available dishes.
•	To enable filtering by course type.
•	To calculate and display useful statistics such as total dishes and average prices.

## **3. Changelog: Part 2 → Part 3**
### **3.1. UI/UX Enhancements**


**Summary Card Design:**

Added a dedicated summary card to display total dishes and average prices by course.
Used <ImageBackground> for the summary card to make it visually appealing.
Added a semi-transparent overlay to ensure text readability on the image background.



**Menu Item Cards:**

Improved the design of menu item cards with shadows, rounded corners, and better spacing.
Added consistent styling for all cards across the app.



**Buttons:**

Replaced default <Button> components with custom-styled <TouchableOpacity> buttons.
Added press effects (visual feedback) for buttons using onPressIn and onPressOut.
Improved button aesthetics with rounded corners, padding, and color changes.




### **3.2. New Features**


**Image Backgrounds:**

Added image backgrounds to the summary card and menu item cards for a more engaging UI.
Used <ImageBackground> to integrate images seamlessly into the app.



**Interactive Elements:**

Added press effects to buttons for better user feedback.
Improved the visual hierarchy of the app with better typography and spacing.




### **3.3. Code Refactoring**


**Component Structure:**

Refactored the HomeScreen, AddMenuScreen, and FilterScreen to use custom-styled components instead of default React Native components.
Improved reusability of components like cards and buttons.



**Styling:**

Used StyleSheet more effectively to maintain consistent styling across screens.
Added semi-transparent overlays for better text readability on image backgrounds.




### **3.4. Visual Improvements**


Consistent Design Language:

Ensured all screens follow a cohesive design language with matching colors, fonts, and spacing.
Used elevation and shadows for depth in cards and buttons.



**Image Integration:**

Added background images to the summary card and menu item cards.
Adjusted opacity and overlays to ensure text remains readable.




### **3.5. Bug Fixes and Optimizations**


**Fixed Layout Issues:**

Ensured all elements are responsive and adapt to different screen sizes.
Fixed alignment and spacing issues in cards and buttons.



**Performance:**

Optimized image loading to prevent lag.
Improved FlatList rendering for smoother scrolling.

 **Feature**               | **Part 2 (Basic UI and Features)**       | **Part 3 (Advanced UI and Features)**       |
 |---------------------------|------------------------------------------|---------------------------------------------|
 | **Summary Card**           | Basic text display of total dishes and averages | Styled card with image background and semi-transparent overlay |
 | **Buttons**               | Default React Native `<Button>` component | Custom-styled `<TouchableOpacity>` with press effects and rounded corners |
 | **Menu Item Cards**       | Basic layout with minimal styling        | Enhanced design with shadows, rounded corners, and consistent spacing |
 | **Image Backgrounds**     | No image backgrounds                     | Added image backgrounds to summary and menu item cards |
 | **Interactive Feedback**  | No visual feedback on button presses    | Added press effects for buttons using `onPressIn` and `onPressOut` |
 | **Code Structure**        | Basic component structure               | Refactored for reusability and consistency across screens |
 | **Styling**               | Minimal styling                         | Comprehensive use of `StyleSheet` for consistent UI elements |
 | **Visual Hierarchy**      | Basic text and layout                   | Improved typography, spacing, and visual hierarchy |
 | **Responsive Layout**     | Basic responsiveness                    | Optimized for different screen sizes and orientations |

 ### **Youtube Link**
 https://www.youtube.com/shorts/KYKngAeaGTY
 ### **App Screenshorts**
 <img width="400" height="1000" alt="image" src=https://github.com/user-attachments/assets/9ee3ad25-625a-4b2d-a0ad-36146df663d2>
<img width="400" height="1000" alt="image" src=https://github.com/user-attachments/assets/3efb1a32-0098-48ce-b55f-750d32093476/>
<img width="400" height="1000" alt="image" src=https://github.com/user-attachments/assets/9aeea591-ac23-4328-84f4-c6e5a31260fa/>


 

### **Reference:**
*The Independent Institute of Education (Pty) Ltd (2022)
IIE Module Manual 2025.*
Available at: https://advtechonline.sharepoint.com/\:w:/r/sites/TertiaryStudents/_layouts/15/Doc.aspx?sourcedoc=%7BC4AAF478-96AC-4469-8005-F7CDC4A15EBB%7D&file=MAST5112MM.docx&action=default&mobileredirect=true
(Accessed: 27 August 2025).
