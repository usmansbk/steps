export default {
  id: 1,
  title: 'Add a new Process',
  date: new Date().toISOString(),
  steps: [
    {
      id: 1,
      key: 1,
      label: 'Click the ➕ button at the bottom of the screen',
      photo: require('../assets/pressplus.jpg'),
    },
    {
      id: 2,
      key: 2,
      label:
        'Enter a How-To title. It could be a recipe or a solution to anything...',
      photo: require('../assets/entertitle.jpg'),
    },
    {
      id: 3,
      key: 3,
      label:
        'Now start adding all the steps as you go along. Remember you can always pause and add more later.',
      photo: require('../assets/addsteps.jpg'),
    },
    {
      id: 4,
      key: 4,
      label:
        "You think you've got the order wrong? Dont worry you can always drag and swap steps. :)",
      photo: require('../assets/swap.jpg'),
    },
    {
      id: 5,
      key: 5,
      label:
        'Of course pictures are amazing. Add as much as you want with the button below',
      photo: require('../assets/addpics.jpg'),
    },
    {
      id: 6,
      key: 6,
      label: 'Awesome! Now press the 📌 button to pin it to your list.',
      photo: null,
    },
    {
      id: 7,
      key: 7,
      label:
        "That's it! 👍 You can always come back to follow the steps again.",
      photo: require('../assets/finish.jpg'),
    },
  ],
};
