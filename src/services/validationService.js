class ValidationService {
    
    validatePost(inputValue, typeValue) {
        if (!this.hasValidPostType(typeValue)) {
            return { error: "Post type is not supported!" };
        }

        if (!this.hasContent(inputValue)) {
            return { error: "Post content is required!" };
        }

        if (typeValue === 'imageUrl') {
            return this.validateImageForm(inputValue);
         }  else if (typeValue === 'videoUrl') {
             return this.validateVideoForm(inputValue);
         }

          return {valid: true};
    }

    hasValidPostType(typeValue) {
        return ['text', 'imageUrl', 'videoUrl'].includes(typeValue);
    }

    hasContent(inputValue) {
        return inputValue && inputValue !== "";
    }

    validateTextForm = (inputValue) => {
        if (inputValue) {
            return { valid: true };
        }
        return { error: "Post content is required!" };
    }

    validateImageForm = (inputValue) => {
        if ((inputValue.includes('jpg')) || (inputValue.includes('gif')) || (inputValue.includes('png')) || (inputValue.includes('bmp'))) {
            return { valid: true };
        }

        return { error: "Upload valid image format." };
    }

    validateVideoForm = (inputValue) => {
        if (inputValue.includes('https://www.youtube.com/')) {
            return { valid: true };
        }
        return { error: "Upload youtube file format." }
    }

  
}

export const validationService = new ValidationService;
