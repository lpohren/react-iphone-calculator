# iPhone React calculator

This app is a simple calculator using the iPhone UI as reference.

<img width="450" alt="image" src="https://user-images.githubusercontent.com/16123699/209448446-fee3b5ce-1ec3-4e8d-b773-e88aa0844970.png">

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Areas to improve

1. **Improve Context:** Despite the benefits that React Context brough to most components, specially `<Calculator />`, if more functionalities are added in the future, we should decouple part of the code from `CalculatorProvider.tsx` to separate hooks.

2. **Add tests:** Missing unit tests.

## Known bugs
1. **Display overlap:** When inputing large numbers they are overlaping the parent container

    **Fix:** Reduce the font size to make it always fit the container.
