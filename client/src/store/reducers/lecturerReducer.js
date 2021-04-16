const initialState = {
  lecturers: [],
  videos: []
};

function lecturerReducer(state = initialState, actions) {
  const { type, payload } = actions;

  if (type == 'lecturers/setLecturers') {
    return { ...state, lecturers: payload };
  } else if (type == 'videos/setVideos') {
    return { ...state, videos: payload };
  }

  return state;
}

export default lecturerReducer;