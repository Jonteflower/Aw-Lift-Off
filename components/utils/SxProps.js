export const sxPropButton = {
  border: '1px solid #13B497',
  textTransform: 'none',
  zIndex: 10, m: 0, background: 'transparent', width: '100%', color: '#F9F7F5', fontSize: 20,
  borderRadius: '6px', '&:hover': { background: '#13B49750', borderColor: '#ff4d5a', },
  "&:disabled": { color: 'white' },
}

export const sxPropButtonDelete = {
  border: '1px solid #ff0f0f',
  textTransform: 'none',
  zIndex: 10, m: 0, background: 'transparent', width: '100%', color: '#F9F7F5', fontSize: 20,
  borderRadius: '6px', '&:hover': { background: '#ff0f0f50', borderColor: '#ff0f0f', },
  "&:disabled": { color: 'white' },
}


export const sxValuesSmall = {
  input: {

    color: 'white',
    width: '77%',
  }, "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: '0.5px solid #888BA3',
      background: 'rgba(230, 232, 250, 0.07)',
    },
    "&.Mui-focused fieldset": {
      borderColor: '#118A74'
    }
  }, "& label.Mui-focused": {
    color: '#F9F7F5'
  },

  "& label": {
    color: '#878A9D'
  },
};

export const sxValuesBig = {
  input: {
    color: 'white',
    width: '95%',
  }, "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: '0.5px solid #888BA3',
      background: 'rgba(230, 232, 250, 0.07)',
    },
    "&.Mui-focused fieldset": {
      borderColor: '#118A74'
    },
   
  }, "& label.Mui-focused": {
    color: '#F9F7F5'
  },

  "& label": {
    color: '#F9F7F5'
  },
  "& .MuiOutlinedInput-root:hover": {
    "& > fieldset": {
      borderColor: '#118A74'
    }
  }
};
export const sxValues = {
  '.css-i4bv87-MuiSvgIcon-root': {
    color: '#1CAA91'
  },
  input: {
    color: 'white',
    width: '100%',
  }, "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: '0.5px solid #888BA3',
      background: 'rgba(230, 232, 250, 0.07)',
    },
    "&.Mui-focused fieldset": {
      borderColor: '#118A74'
    }
  }, "& label.Mui-focused": {
    color: '#F9F7F5'
  },

  "& label": {
    color: '#878A9D'
  },
  '&.MuiSvgIcon-root': {
    background: '#1CAA91'
  }
};


export const MultisxValues = {
  background: 'rgba(230, 232, 250, 0.07)',
  color: '#FFFFFF',
  '.css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input': {
    color: 'white',
  },
  "& .MuiOutlinedInput-root": {
    color: '#FFFFFF',
    "& fieldset": {
      border: '0.5px solid #888BA3'
    },
    "&.Mui-focused fieldset": {
      borderColor: '#118A74'
    },
  }, "& label.Mui-focused": {
    color: '#F9F7F5'
  },

  "& label": {
    color: '#878A9D'
  }, p: 0, m: 0
};

export const sxSelect = {
  '& .MuiSvgIcon-root': { fill: '#1CAA91' },
  color: '#F9F7F5',
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'transparent',
  },
  "& .label": {
    color: '#878A9D'
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: 'transparent'
    }
  }, "& label.Mui-focused": {
    color: '#F9F7F5'
  }, p: 0, m: 0,
  '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': { fontSize: 16, display: 'flex', alignItems: 'center', gap: 2, maxHeight: '56px', pt: 2, pb: 2 }
}



export const sxCurrency = {
  '& .css-ykkmtb-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root .MuiSvgIcon-root': {
    fill: '#1CAA91'
  },
  '& .MuiSvgIcon-root': { fill: '#118A74' }, '& .MuiList-root .MuiMenu-list': { background: '#252835' },
  color: '#F9F7F5', '&.Mui-label': { color: '' },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#ff4d5a", }, textalign: "left",

  "& label": {
    color: '#878A9D'
  },
  '.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select': {
    background: '#252735',
    border: '0.5px solid #888BA3'

  }
}

export const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'SEK',
    label: 'kr',
  },
];

export const backSxProp = {
  border: '1px solid #13B497',
  textTransform: 'none',
  zIndex: 10, m: 0, background: 'transparent', width: 190, color: '#F9F7F5', minHeight: 50, fontSize: 20,
  borderRadius: '6px', '&:hover': { background: '#13B49750', borderColor: '#ff4d5a' }
}
