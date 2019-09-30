const initialState = {
  products: [
    {
      _id: 1,
      name: "very good dog",
      mainPic: "https://www.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg",
      description: "as you can see this dog is very very good."
    },
    {
      _id: 2,
      name: "another one",
      mainPic:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*",
      description: "this dog is also exceptionally good, why not click to look at it more"
    },
    {
      _id: 3,
      name: "third good dog",
      mainPic:
        "https://www.pets4homes.co.uk/images/classifieds/2019/02/15/2211620/large/kenny-very-loving-loyal-smart-rescue-staffy-5c66cf5522b92.jpg",
      description: "once again this square has a really great dog in it"
    }
  ],
  item: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "GET_ITEM":
      return {
        ...state,
        item: state.products.filter(item => item._id == payload)[0]
      };
    default:
      return state;
  }
}
