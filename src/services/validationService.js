import React from 'react';

class ValidationService {

    isPostContentValid(inputValue, typeValue) {
        if (typeValue === 'text') {
            return this.validateTextForm(inputValue)
        } else if (typeValue === 'imageUrl') {
            return this.validateImageForm(inputValue)
        }
        else if (typeValue === 'videoUrl') {
            return this.validateVideoForm(inputValue)
        }
    }

    validateTextForm = (inputValue) => {
        if (inputValue) {
            return true
        }
        return false
    }

    validateImageForm = (inputValue) => {
        if ((inputValue.includes('jpg')) || (inputValue.includes('gif')) || (inputValue.includes('png')) || (inputValue.includes('bmp'))) {

            return true
        }
        return false
    }

    validateVideoForm = (inputValue) => {
        if (inputValue.includes('https://www.youtube.com/')) {
            return true;
        }
        return false
    }
}

export const validationService = new ValidationService;
