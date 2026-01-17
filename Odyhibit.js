const tools = [
    {
        image: 'images/any_bits_icon.png',
        title: 'Any-Bits-You-Want Steganography',
        description: 'Pick the bits you want to hide your secret message in. This tool will take a file and then hide it in the bits you pick. Do you want stuff a bunch of data in a small image? Its not gonna be subtle, but it will probably work. You can use all the bits for storage if you want. You will need to know what bits were used when it\'s time to decode.',
        link: 'https://odyhibit.github.io/Any-bits-Steganography/',
        categories: ['Steganography', 'Image']
    },
    {
        image: 'images/matrix_stego_icon.png',
        title: 'Matrix Steganography',
        description: 'Hide secret messages within mathematical matrices using this innovative steganography tool. You can hide a secret message, recover a secret message, or compare the original image to the steganography image to see how many of the least significant bits were changed to hide your message.',
        link: 'https://odyhibit.github.io/matrix_steganography/',
        categories: ['Steganography', 'Image']
    },
    {
        image: 'images/scream_cipher_icon.png',
        title: 'Scream Cipher',
        description: 'Everything is screaming all the time.',
        link: 'https://odyhibit.github.io/Scream_Cipher/',
        categories: ['Encoding', 'Humor']
    },
    {
        image: 'images/monoalphabetic_icon.png',
        title: 'Monoalphabetic Substitution Cipher',
        description: 'Decrypt messages using classic monoalphabetic substitution ciphers. This tool will help your manual decoding efforts.',
        link: 'https://odyhibit.github.io/monoalphabetic_cipher_tool/',
        categories: ['Encoding']
    },
    {
        image: 'images/binary_morse_icon.png',
        title: 'Binary Morse Converter',
        description: 'Convert between binary, Ascii, and Morse code with this efficient translation tool. The binary version follows the rules for audio morse instead of size reduction. It should be recognizable when viewed as binary.',
        link: 'https://odyhibit.github.io/binary_morse/',
        categories: ['Encoding', 'Morse']
    },
    {
        image: 'images/base64_buffer_icon.png',
        title: 'Base64 Buffer Steganography',
        description: 'Hide data within the buffers of a bunch of Base64 encoded text using this steganography technique. You will need to give the tool a nice sized block of text. Each word will be base64 encoded, and the buffer bits for each word will hide the secret.',
        link: 'https://odyhibit.github.io/base64_buffer_stego/',
        categories: ['Steganography', 'Base64']
    },
    {
        image: 'images/hackqr_icon.png',
        title: 'HackQR Code',
        description: 'Create QR-looking images that contain the binary message in black(1) on a white(0) background. These can be decoded by hand if you have enough patience. The text is in 2x4 blocks.',
        link: 'https://odyhibit.github.io/Hackqr_code/',
        categories: ['Steganography', 'Image']
    },
    {
        image: 'images/fibonacci_icon.png',
        title: 'Fibonacci Cipher Decoder',
        description: 'Use Fibonacci coding to hide/recover messages. The type of encoding can be recognized by the lack of more than 3 adjacent 1\'s in the binary. For example 1111 will never occur.',
        link: 'https://odyhibit.github.io/fibonacci_cipher_decoder/',
        categories: ['Encoding']
    },
    {
        image: 'images/aperiodic_icon.png',
        title: 'Aperiodic Cipher Encoder/Decoder',
        description: 'Three types of Aperiodic ciphers. Word Length Aperiodic, Numerically Keyed Aperiodic, and Interruptor Letter Aperiodic.',
        link: 'https://odyhibit.github.io/aperiodic_cipher/',
        categories: ['Encoding']
    },
    {
        image: 'images/base24_bacon_icon.png',
        title: 'Base24 for the Bacon cipher',
        description: 'If you have ever wanted to hide arbitrary data using the Bacon cipher this is the tool for you. You can encode whatever text you want, uppercase, lowercase, numbers, symbols, emoji, whatever. Then hide it using the Bacon cipher.',
        link: 'https://odyhibit.github.io/base24_for_bacon/',
        categories: ['Encoding', 'Bacon']
    },
    {
        image: 'images/5_strips_of_bacon_icon.png',
        title: 'Five Strips of Bacon',
        description: 'Since the Bacon cipher requires 5 cover items to encode one letter, I decided to use 5 simultaneous Bacon ciphers. That way you can hide one letter in one cover item. With this tool you can hide one secret message letter in one cover text letter.',
        link: 'https://odyhibit.github.io/five_strips_of_bacon/',
        categories: ['Bacon', 'Steganography']
    },
    {
        image: 'images/90s_hackers_icon.png',
        title: '90s Hackers',
        description: 'Experience vintage hacking tools and techniques from the 1990s cybersecurity era. This was made for a hackathon with a 90\'s theme. It is a Leetspeak tool, based on the movie Hackers.',
        link: 'https://odyhibit.github.io/90sHackers/',
        categories: ['Encoding', 'Humor']
    },
    {
        image: 'images/bitmap_font_icon.png',
        title: 'Bitmap Font',
        description: 'Take a message, and encode it into a 5x7 bitmap font. You can also use this tool to visualize messages encoded in bitmap fonts. It does expect the maximum height of the custom font to be 8 pixels.',
        link: 'https://odyhibit.github.io/hex_bitmap_font/',
        categories: ['Encoding', 'Image']
    },
    {
        image: 'images/binary_spiral_icon.png',
        title: 'Binary Spiral',
        description: 'Take a message, convert it binary. Then lay it down in a spiral pattern on a square matrix. ',
        link: 'https://odyhibit.github.io/spiral_binary_decoder/',
        categories: ['Encoding']
    },
    {
        image: 'images/binary_visualizer.png',
        title: 'Binary Visualizer',
        description: 'Visualize binary data in a 2D grid format. This tool allows you to see the binary representation of your data in a more intuitive way.',
        link: 'https://odyhibit.github.io/binary_visualizer/',
        categories: ['Encoding', 'Image']
    },
    {
        image: 'images/binary_image_extractor_icon.png',
        title: 'Binary Image Extractor',
        description: 'If you have an image that contains binary encoded as squares, this tool can extract the binary and try to decode it into ascii for you.',
        link: 'https://odyhibit.github.io/binary_image_extractor/',
        categories: ['Encoding', 'Image']
    },
    {
        image: 'images/base64_paint_icon.png',
        title: 'Base64 Paint',
        description: "It's a paint program that encodes the image as base64. You probably don't need to do this, but if you do, then this tool is just faster than pencil and paper. You can draw a picture, and then get the base64 encoded version of it.",
        link: 'https://odyhibit.github.io/base64_paint/',
        categories: ['Encoding', 'Image']
    },
    {
        image: 'images/lfsr.png',
        title: 'LFSR Decoder',
        description: "If you have some encoded ciphertext, in hex or base64 that might be encoded with a LFSR stream, and a bit of the plaintext then this tool will attempt to use the berlekamp massey algorithm to decode it.",
        link: 'https://odyhibit.github.io/LFSR/',
        categories: ['Encoding']
    },
    {
        image: 'images/seeded_rng_icon.png',
        title: 'Random Number from Seed',
        description: "This is for those times when you need to match random numbers from a known seed. Probably from a Reverse Engineering challenge. If you know the seed, this can probably get you the values.",
        link: 'https://odyhibit.github.io/random_from_seed/',
        categories: ['Encoding']
    },
    {
        image: 'images/ascii_chart_icon.png',
        title: 'ASCII Chart',
        description: "A quick reference ASCII chart.",
        link: 'https://odyhibit.github.io/Ascii_chart/',
        categories: ['Encoding']
    },
        {
        image: 'images/vigenere_icon.png',
        title: 'Vigenere Lab',
        description: "A few tools to help you manually solve a Vigenere cipher.",
        link: 'https://odyhibit.github.io/vigenere-lab/',
        categories: ['Encoding']
    }


];

// Function to create category filters
function createCategoryFilters() {
    const categoryFilters = document.getElementById('categoryFilters');
    const allCategories = new Set();

    tools.forEach(tool => {
        tool.categories.forEach(category => {
            allCategories.add(category);
        });
    });

    allCategories.forEach(category => {
        const filterButton = document.createElement('button');
        filterButton.classList.add('category-filter');
        filterButton.textContent = category;
        filterButton.dataset.filter = category;
        categoryFilters.appendChild(filterButton);
    });

    // Add event listeners to filter buttons
    categoryFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-filter')) {
            // Remove active class from all buttons
            categoryFilters.querySelectorAll('.category-filter').forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to clicked button
            e.target.classList.add('active');

            // Filter tools
            filterTools(e.target.dataset.filter);
        }
    });
}

// Function to filter tools
function filterTools(category) {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = ''; // Clear current grid

    const filteredTools = category === 'all'
        ? tools
        : tools.filter(tool => tool.categories.includes(category));

    filteredTools.forEach(tool => {
        const toolCard = createToolCard(tool);
        toolsGrid.appendChild(toolCard);
    });
}

// Function to create tool card
function createToolCard(tool) {
    const card = document.createElement('div');
    card.classList.add('tool-card');

    // Create clickable wrapper
    const cardLink = document.createElement('a');
    cardLink.href = tool.link;
    cardLink.target = '_blank';
    cardLink.classList.add('tool-card-clickable');

    // Tool header (image and title)
    const toolHeader = document.createElement('div');
    toolHeader.classList.add('tool-header');

    const toolImage = document.createElement('div');
    toolImage.classList.add('tool-image');
    if(tool.image.startsWith('images')) {
        const imgElement = document.createElement('img');
        imgElement.src = tool.image;
        imgElement.alt = tool.title + " icon";
        toolImage.appendChild(imgElement);
    } else {
        toolImage.textContent = tool.image;
    }
    const toolTitleContainer = document.createElement('div');
    const toolTitle = document.createElement('h3');
    toolTitle.classList.add('tool-title');
    toolTitle.textContent = tool.title;
    toolTitleContainer.appendChild(toolTitle);

    toolHeader.appendChild(toolImage);
    toolHeader.appendChild(toolTitleContainer);

    // Categories
    const categoriesContainer = document.createElement('div');
    categoriesContainer.classList.add('categories');
    tool.categories.forEach(category => {
        const categorySpan = document.createElement('span');
        categorySpan.classList.add('category');
        categorySpan.textContent = category;
        categoriesContainer.appendChild(categorySpan);
    });

    // Tool content
    const toolContent = document.createElement('div');
    toolContent.classList.add('tool-content');
    const toolDescription = document.createElement('p');
    toolDescription.classList.add('tool-description');
    toolDescription.textContent = tool.description;

    toolContent.appendChild(categoriesContainer);
    toolContent.appendChild(toolDescription);

    // Tool bottom (link)
    const toolBottom = document.createElement('div');
    toolBottom.classList.add('tool-bottom');
    const toolLink = document.createElement('a');
    toolLink.href = tool.link;
    toolLink.target = '_blank';
    toolLink.classList.add('tool-link');
    toolLink.textContent = 'Try it';

    toolBottom.appendChild(toolLink);

    // Assemble card
    cardLink.appendChild(toolHeader);
    cardLink.appendChild(toolContent);
    //cardLink.appendChild(toolBottom);
    card.appendChild(cardLink);

    return card;
}

// Initialize page
function initPage() {
    createCategoryFilters();
    filterTools('all');
}

// Run initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);