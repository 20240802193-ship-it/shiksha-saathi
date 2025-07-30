

// Activities data as a JS variable
const activitiesData = {
  nursery: {
    english: [
      {
        volume: 1,
        topics: {
          "Writing Readiness": {
            "Standing, Sleeping & Slanting Lines": [
              { name: "Line Walk Path", description: "Walk on taped standing line like a tightrope.", materials: "Tape, floor space" },
              { name: "Sleeping Line Train Track", description: "Place caps/buttons in horizontal lines, run toy train across.", materials: "Caps/buttons, toy train" },
              { name: "Clay Line Press", description: "Flatten clay and press standing/slanting/sleeping lines into it.", materials: "Clay" },
              { name: "Paper Strip Match", description: "Match paper strips to line outlines.", materials: "Paper strips, line outlines" },
              { name: "Crayon Line Race", description: "Draw lines from dot-to-dot in a race path.", materials: "Paper, crayons, dots" },
              { name: "Wall Line Trace", description: "Trace large taped lines on wall with crayon/finger.", materials: "Tape, wall, crayons" },
              { name: "Line Jump Game", description: "Jump on correct floor lines as called out.", materials: "Tape, floor space" },
              { name: "Newspaper Roll Lines", description: "Paste rolled strips into standing/slanting shapes.", materials: "Newspaper, glue" },
              { name: "Line Puzzle Cards", description: "Complete missing lines in pre-cut card designs.", materials: "Puzzle cards, crayons" },
              { name: "Standing Line Tree", description: "Draw tree trunks as standing lines, decorate top.", materials: "Paper, crayons" }
            ],
            "Loops, Curves, Circles": [
              { name: "Loop the Laces", description: "Trace loops with shoelaces, color inside.", materials: "Shoelaces, paper, crayons" },
              { name: "Clay Circle Pizza", description: "Form circle base, clay toppings on pizza.", materials: "Clay" },
              { name: "Curve Hair Faces", description: "Draw face with curved hair, color.", materials: "Paper, crayons" },
              { name: "Roll & Curve Drawing", description: "Roll ball dipped in color to make curved lines.", materials: "Ball, paint, paper" },
              { name: "Circle Tree Art", description: "Circle leaves + trunk lines = colorful tree.", materials: "Paper, crayons" },
              { name: "Loop Necklace Making", description: "Link clay/paper loops into chain.", materials: "Clay or paper, string" },
              { name: "Curvy Caterpillar", description: "Draw circles or loops to form a caterpillar.", materials: "Paper, crayons" },
              { name: "Bowl Trace Circles", description: "Trace bowls, color inside.", materials: "Bowls, paper, crayons" },
              { name: "Swirly Spoon Paint", description: "Spiral motion painting with spoon backs.", materials: "Spoons, paint, paper" },
              { name: "Clay Curve Garden", description: "Clay spirals/curves as garden plants.", materials: "Clay" }
            ]
          },
          "Should I Help Others?": [
            { name: "Helping Hands Chart", description: "Each child traces their hand on a reused piece of paper. Inside each finger, they draw or dictate one way they can help.", materials: "Reused paper, crayons, teacher's pen" },
            { name: "Kindness Pass", description: "Children sit in a circle. A ball or soft toy is passed around. When a child receives it, they say one helpful action.", materials: "Ball or soft toy" },
            { name: "Helping Role Play", description: "The teacher presents mini real-life scenarios. Children act out the helpful response.", materials: "Props (crayons, bag, cup - optional)" },
            { name: "I Can Help Jar", description: "A jar is filled with paper slips saying 'I can water plants,' 'I can say thank you,' etc.", materials: "Jar, paper slips" },
            { name: "Helping Story Time", description: "The teacher reads a short story showing characters helping each other.", materials: "Storybook or simple printed pages" },
            { name: "Kindness Star Badge", description: "Children receive a star-shaped cutout after they are observed doing something kind.", materials: "Paper stars, string, crayons" },
            { name: "Toy Sharing Time", description: "Limited toys are kept out so children must take turns.", materials: "Classroom toys" },
            { name: "Picture Sorting - Help or Not?", description: "Teacher shows pictures of helping/not helping. Children respond with 'Helping!' or 'Not helping!'", materials: "Printed pictures" },
            { name: "Helping Song Action", description: "A fun song is sung with actions: 'I can help my friend stand up...'", materials: "None" },
            { name: "Helping Puzzle Match", description: "Children match picture cards showing an action with its result.", materials: "Paper picture cards" }
          ],
          "All About Me": [
            { name: "My Choice Crown", description: "Children decorate a paper crown with drawings of 3 favorite things: food, toy, and animal.", materials: "Paper strip, crayons, glue" },
            { name: "Clay Me Tray", description: "Children mold favorite objects using clay.", materials: "Clay" },
            { name: "My Daily Routine Wheel", description: "Teacher provides a rotating wheel showing tasks like waking, eating, brushing.", materials: "Pre-made paper wheel, pin" },
            { name: "Birthday Balloon Decoration", description: "Teacher gives balloon cutouts from old paper. Child writes their name & birth month, then colors it.", materials: "Pre-cut balloons, crayons" },
            { name: "Clay Like Board", description: "Make 3 favorite items using clay and place on a board.", materials: "Clay, mat or tray" },
            { name: "Feelings Ball Toss", description: "Roll a soft ball and make a feeling face (happy, sad, excited). Others guess.", materials: "Soft ball" },
            { name: "My Name Pebble Match", description: "Teacher prepares pebbles with letters. Child picks their name letters in order.", materials: "Pebbles, marker" },
            { name: "Thread My Name Beads", description: "Bead letters of name using paper or actual beads. String them into a name tag.", materials: "Beads/paper letters, thread" },
            { name: "My Home Drawing", description: "Draw their home and say who lives with them.", materials: "Paper, crayons" },
            { name: "Taste Talk Table", description: "Taste lemon, banana, salty water and say if it's sweet, sour or salty.", materials: "Food samples (teacher-guided)" }
          ],
          "Phonics": [
            { name: "Sound Hunt", description: "Teacher makes animal sounds (meow, woof, moo). Children identify and point to animal pictures.", materials: "Animal picture cards" },
            { name: "Beginning Sound Match", description: "Show objects starting with same sound (ball, book, banana). Children group them.", materials: "Objects or picture cards" },
            { name: "Sound Walk", description: "Teacher calls out sounds. Children walk like that animal (hop like rabbit, slither like snake).", materials: "None" },
            { name: "Rhyming Words Game", description: "Teacher says a word, children think of rhyming words (cat - hat, bat, rat).", materials: "None" },
            { name: "Letter Sound Song", description: "Sing 'A says /a/ like apple, B says /b/ like ball' with actions.", materials: "None" },
            { name: "Sound Sorting", description: "Sort objects by beginning sounds into different baskets.", materials: "Objects, baskets" },
            { name: "Sound Drawing", description: "Draw objects that start with a specific sound (draw things starting with 'b').", materials: "Paper, crayons" },
            { name: "Sound Story", description: "Teacher tells a story emphasizing certain sounds. Children clap when they hear the sound.", materials: "None" },
            { name: "Sound Collage", description: "Create collage of pictures starting with same sound.", materials: "Magazine cutouts, glue, paper" },
            { name: "Sound Movement", description: "Make movements that start with same sound as body parts (pat, point, push).", materials: "None" }
          ],
          "Vocabulary": [
            { name: "Word Wall", description: "Create a wall with pictures and words. Children point and say the words.", materials: "Picture cards, wall space" },
            { name: "Word Hunt", description: "Hide word cards around room. Children find and read them with teacher help.", materials: "Word cards" },
            { name: "Category Sort", description: "Sort objects into categories (animals, food, toys).", materials: "Objects or pictures, baskets" },
            { name: "Word Building", description: "Use letter cards to build simple words with teacher guidance.", materials: "Letter cards" },
            { name: "Picture Dictionary", description: "Create simple picture dictionary with common words.", materials: "Paper, crayons, pictures" },
            { name: "Word Charades", description: "Act out words while others guess (jump, eat, sleep).", materials: "Word cards" },
            { name: "Word Drawing", description: "Draw pictures for new vocabulary words learned.", materials: "Paper, crayons" },
            { name: "Word Song", description: "Sing songs that include new vocabulary words.", materials: "None" },
            { name: "Word Matching", description: "Match word cards with corresponding pictures.", materials: "Word cards, picture cards" },
            { name: "Word Story", description: "Create stories using new vocabulary words.", materials: "None" }
          ],
          "Reading Readiness": [
            { name: "Book Handling", description: "Teach proper way to hold and turn pages of a book.", materials: "Picture books" },
            { name: "Picture Walk", description: "Look at pictures in book before reading. Predict what story is about.", materials: "Picture book" },
            { name: "Left to Right", description: "Practice tracking from left to right with finger on text.", materials: "Large print text" },
            { name: "Top to Bottom", description: "Practice reading from top to bottom of page.", materials: "Large print text" },
            { name: "Word Recognition", description: "Recognize common words in environment (stop, go, exit).", materials: "Environmental print" },
            { name: "Story Retelling", description: "Retell simple stories using picture prompts.", materials: "Story pictures" },
            { name: "Reading Aloud", description: "Read simple texts aloud with teacher guidance.", materials: "Simple books" },
            { name: "Comprehension Questions", description: "Answer simple questions about stories read.", materials: "Story books" },
            { name: "Reading Corner", description: "Create comfortable reading area with books.", materials: "Books, cushions" },
            { name: "Reading Buddies", description: "Pair children to read together with teacher support.", materials: "Books" }
          ],
          "Myself": {
            "Individual & Creative Self-Exploration": [
              { name: "Me Sock Puppet", description: "Children decorate a sock puppet to look like themselves using yarn, buttons, or fabric.", materials: "Old sock, wool, bits of fabric" },
              { name: "Color Me Wheel", description: "Spin a paper wheel and draw their favorite food, color, or animal.", materials: "Paper wheel, split pin, crayons" },
              { name: "I Can Jar", description: "Pick a paper from a jar: 'I can jump!' and perform the action.", materials: "Reused jar, paper slips" },
              { name: "Emotion Puppet Sticks", description: "Make puppets with happy/sad faces to use during songs or storytelling.", materials: "Card circles, ice-cream sticks" },
              { name: "Handprint Me Flag", description: "Trace hand on paper and write or draw one thing they like on each finger.", materials: "Paper, crayons" },
              { name: "Name Necklace", description: "Beads or paper alphabets are strung together to wear their name.", materials: "Reused beads/paper letters, string" },
              { name: "I Like... Wheel", description: "Spin a decorated wheel and talk about their favorite color, food, or toy.", materials: "Card paper, split pin, crayons" },
              { name: "Touch & Tell Bag", description: "Children touch mystery classroom items inside a cloth bag and describe them.", materials: "Reused cloth bag, classroom objects" },
              { name: "Me Puppet", description: "Create a stick puppet that looks like them.", materials: "Ice cream stick, paper, crayons" },
              { name: "My Photo Frame", description: "Make a colorful paper frame for their photo.", materials: "Cardboard, glue, crayons" }
            ],
            "Self-Awareness + Feelings": [
              { name: "Name Dot Marker Art", description: "Color over their name printed in dotted letters using fingers or cotton swabs.", materials: "Paper, paint/crayons" },
              { name: "My Face Puzzle", description: "Solve their own laminated 4-piece photo puzzle.", materials: "Laminated child photo (cut by teacher)" },
              { name: "Laminated Face Mat", description: "Child points to eyes, nose, lips, etc. on a laminated cartoon face mat.", materials: "Laminated cartoon face sheet" },
              { name: "Clay Emotions Plate", description: "Make happy/sad/surprised faces using clay on a round mat.", materials: "Clay, plastic plate/mat" },
              { name: "Name Trace & Paint", description: "Children finger-trace their name and decorate it with paint dots.", materials: "Paper, paint" },
              { name: "Dress Me Poster", description: "Stick clothing items (cutouts by teacher) on a figure to dress it.", materials: "Paper cutouts, glue" },
              { name: "Smile Circle", description: "Children pass a button and smile at the person they give it to.", materials: "Button or bead" },
              { name: "My Feelings Walk", description: "Walk around showing happy, angry, sleepy faces using expressions.", materials: "None" },
              { name: "Clay Mood Faces", description: "Make different facial expressions using colorful clay.", materials: "Clay" },
              { name: "Newspaper Crown Me", description: "Wear a newspaper crown and decorate it to show 'This is Me!'", materials: "Newspaper (folded by teacher), crayons, reused decor" }
            ],
            "Individual Identity & Creativity": [
              { name: "Mirror-Free Emotion Match", description: "Children match emotion flashcards to stories teacher tells.", materials: "Emotion flashcards" },
              { name: "Clay My Face", description: "Shape eyes, nose, mouth from clay onto a round paper plate.", materials: "Clay, paper plate" },
              { name: "Button Me Shirt", description: "Decorate a shirt cutout with buttons as 'their shirt.'", materials: "Shirt cutout, buttons, glue" },
              { name: "Newspaper Me Mat", description: "Fill a full-body paper outline with pasted newspaper scraps.", materials: "Pre-cut outline, newspaper bits, glue" },
              { name: "Name Puzzle Pieces", description: "Assemble name using jumbled letter pieces (prepared by teacher).", materials: "Paper name letters" },
              { name: "Paper Plate Faces", description: "Make silly or real faces on plates using craft bits.", materials: "Paper plates, cloth bits, buttons" },
              { name: "Emotion Sorting Cups", description: "Sort facial expression cards into labeled emotion cups.", materials: "Cards, labeled containers" },
              { name: "Fabric Me Collage", description: "Stick old cloth bits on a silhouette for clothes, hair, etc.", materials: "Cloth scraps, glue, paper cutout" },
              { name: "Clay Name Stamping", description: "Stamp or shape the letters of their name using clay.", materials: "Clay, alphabet stamps or plastic letters" },
              { name: "Newspaper Crown Me", description: "Make and decorate a crown using newspaper and wear it proudly.", materials: "Folded newspaper, crayons, buttons" }
            ],
            "Good Manners, Kindness & Social Skills": [
              { name: "Thank You Circle", description: "Pass a soft ball and say 'Thank you, [Name]!'", materials: "Soft ball" },
              { name: "Kindness Pass", description: "Pass a soft object and say a kind action they can do.", materials: "Clay ball or fabric" },
              { name: "Role Play Manners Time", description: "Act out daily classroom situations with magic words.", materials: "None" },
              { name: "Kindness Badge", description: "Decorate a kindness badge after doing/saying something kind.", materials: "Pre-cut circle, crayons, glue" },
              { name: "Magic Word Wand", description: "Make a star wand and practice polite 'magic words.'", materials: "Stick, paper star, crayons" },
              { name: "Spoon & Say Please", description: "Pass a spoon in circle saying 'Please take this.'", materials: "Spoon" },
              { name: "Sharing Ball Pass", description: "Pass a plastic ball and say what they like to share.", materials: "Plastic ball" },
              { name: "Soft Heart Craft", description: "Stick fabric into heart shape and say 'I have a kind heart.'", materials: "Fabric scraps, heart outline, glue" },
              { name: "Button Buddy Pair", description: "Find a buddy with same color button and say 'Hello, friend!'", materials: "Buttons" },
              { name: "My Manners Crown", description: "Make a paper crown with 'Please,' 'Thank You,' and 'Sorry.'", materials: "Paper strip, crayons" },
              { name: "Thank You Flower", description: "Stick petals on a flower after saying kind words.", materials: "Paper petals, center, glue" },
              { name: "Emotion Circle Song", description: "Pass emotion cards and sing simple rhyme about feelings.", materials: "Emotion cards" },
              { name: "Quiet Bunny Ears", description: "Sit with hands as bunny ears while waiting patiently.", materials: "None" },
              { name: "Clap for My Friend", description: "Say one kind thing about a friend and lead a group clap.", materials: "None" },
              { name: "Whisper the Word", description: "Whisper kind words in a circle to create a kindness chain.", materials: "None" }
            ],
            "Physical Play & Body Movement": [
              { name: "Stretch Like Me!", description: "Copy teacher-led stretches and say 'I am strong!'", materials: "None" },
              { name: "Shape Circle Hands", description: "Hold hands in a group and form shapes like circle/square.", materials: "None" },
              { name: "Rolling Ball Reach", description: "Roll a plastic ball; stop it with foot and say their name.", materials: "Plastic ball" },
              { name: "Animal Walk Parade", description: "Move around like animals (hop like bunny, stomp like elephant).", materials: "None" },
              { name: "Spoon Balance Walk", description: "Walk while balancing a spoon in hand, practicing control.", materials: "Spoon (brought from home)" }
            ]
          },
          "Alphabet Activities for Letters A–H": [
            { name: "Letter Hunt", description: "Write the letters A to H on small paper pieces and hide them around the classroom or home. Let children search for them. When they find a letter, they must say its name aloud.", materials: "Paper, marker" },
            { name: "Sand or Salt Tray Writing", description: "Pour a thin layer of salt or sand into a tray. Let children use their fingers to trace each letter from A to H while saying the letter name and sound.", materials: "Tray, a handful of salt or sand" },
            { name: "Nature Letters", description: "Take the children outside or collect natural items. Use the materials to form big letters A–H on the ground or table. Say the letter names together.", materials: "Leaves, sticks, pebbles, or grass" },
            { name: "Sing the ABC Song (A–H)", description: "Sing only the first part of the ABC song (letters A to H). Clap or tap each time a letter is sung to help children learn rhythm and letter order.", materials: "None" },
            { name: "Letter Collage", description: "Let children cut out pictures of items that begin with letters A to H. Glue them onto paper under each matching letter written in big.", materials: "Old magazines, glue, paper, scissors" },
            { name: "Jump to the Letter", description: "Write each letter (A–H) on a sheet of paper and place them on the floor. Call out a letter and let the children jump onto the correct one.", materials: "Paper, marker" },
            { name: "Clay or Playdough Letters", description: "Children use dough to form each letter from A to H. Help them say the letter sounds while shaping.", materials: "Homemade playdough or clay" },
            { name: "Sound Sorting Game", description: "Gather common items like a ball, apple, hat, etc. Ask children to sort the items based on their starting sound matching letters A to H.", materials: "Small objects or toys" },
            { name: "Alphabet Train", description: "Create a 'train' by labeling boxes or paper strips with letters A to H. Children place matching objects or drawings inside each train car.", materials: "Small boxes or paper strips" },
            { name: "Draw & Say Game", description: "Ask children to draw simple things that begin with letters A–H. After drawing, they say the name of what they drew and the starting letter.", materials: "Paper, crayons or pencils" },
            { name: "Flashcard Peekaboo", description: "Make flashcards for each letter. Hide most of the card and show only a part of the letter. Children guess what letter it is.", materials: "Paper, marker" },
            { name: "Echo Clapping Sounds", description: "Say a letter sound (like 'Buh' for B) and clap it (e.g., three claps). Children repeat the sound and clapping rhythm back to you.", materials: "None" },
            { name: "Storytime with Letters", description: "Read a story that includes words starting with A–H. Ask children to raise their hands or shout 'stop!' when they hear a word beginning with one of the letters.", materials: "Picture book (or tell a story orally)" },
            { name: "Letter Dance Freeze", description: "Play music and let children dance. When the music stops, shout a letter from A–H. The children freeze and say a word that starts with that letter.", materials: "Music player or drum" },
            { name: "Letter Cups Toss", description: "Label each cup with a letter A–H. Say a word like 'apple' and let the child toss a small ball into the cup with the correct letter.", materials: "Paper cups, marker, small ball" },
            { name: "Mystery Bag Game", description: "Put objects that start with letters A–H inside the bag. Let a child reach in, pull out an item, and guess what letter it begins with.", materials: "Small bag, everyday objects (apple, key, button, etc.)" },
            { name: "Chalk Drawing Letters", description: "Let children draw large letters A–H on the ground or board. They can color or decorate each letter afterward.", materials: "Chalk, ground or chalkboard" },
            { name: "Match the Object to the Letter", description: "Display objects or pictures. Children match each to the correct starting letter by placing it on or under the right letter card.", materials: "Real objects or printed pictures, paper with letters A–H" },
            { name: "Paper Plate Letter Stepping", description: "Write letters A–H on paper plates and lay them on the floor. Call out a letter and have children step or hop onto the correct one.", materials: "Paper plates, marker" },
            { name: "Letter Puppet Show", description: "Create simple puppets with a letter A–H drawn or stuck on. Children act out a mini-show where each puppet says its letter and something that starts with it.", materials: "Paper bags or old socks, markers" }
          ]
        }
      },
      {
        volume: 2,
        topics: {
          "Letter Formation Activities (I to Q)": [
            { name: "Ice Stick Letter I", description: "Children are given two short and one long ice cream sticks. The teacher guides them to arrange the sticks on the table to form uppercase I. As they build, children chant 'I for Igloo, /i/ /i/!' Teacher helps repeat the sound and show the letter formation stroke (standing line with sleeping lines on top and bottom).", materials: "Ice cream sticks (2 short, 1 long per child), letter chart" },
            { name: "Clay Trace – Letter J", description: "Give each child a laminated card with the uppercase J outline. Children roll clay to form the letter by placing it on the outline. As they build it, they say 'J for Jug, /j/ /j/!' This builds muscle memory, sound-letter connection, and shape recognition.", materials: "Clay, laminated J cards, teacher-led sound prompts" },
            { name: "Button Match – J and j", description: "Children are shown two large outlines – uppercase J and lowercase j – drawn on chart paper. They must place buttons along the lines to complete both letters. The teacher asks them to find something that starts with J.", materials: "Buttons, pre-drawn large letter J and j outlines on chart" },
            { name: "I Can Draw – Letter I Object Art", description: "Children draw simple pictures of items that begin with I (like ice cream, iron, igloo) and say the word aloud. Teacher asks: 'What sound do you hear at the beginning of 'ice cream'?' Children repeat: /i/. They also write or trace a large I above their drawing.", materials: "A4 sheet, crayons, teacher-prepared sample cards" },
            { name: "Spoon & Bead Letter K Formation", description: "Children are given a spoon and small beads. The teacher draws a big K on paper. Children use the spoon to carefully place beads along the lines to form K. Builds fine motor control, letter shape, and patience. Say together: 'K for Kite, /k/ /k/!'", materials: "Spoon, small beads, letter K outline on A4 sheet" },
            { name: "Straw Letter Builder – K", description: "Give children 3 pieces of straw. They arrange the straws to build the letter K (one vertical and two slanting lines). Once done, teacher says, 'Let's fly our K for Kite!' Children repeat the sound.", materials: "Cut straws, chart with K for reference" },
            { name: "Jumpy J Path Walking", description: "On the floor, create a large J using colored tape. Children walk along the path like a tightrope. As they walk, they say 'J for Jug, /j/ /j/!' and pretend to pour water at the hook of the J.", materials: "Colored tape, floor space" },
            { name: "Leaf Stamp L", description: "Children collect small leaves and dip them in paint. Using the side of the leaf, they print L on paper. The teacher guides: 'L is for Leaf, Lion, and Ladder!' Say: /l/ /l/ after each print.", materials: "Leaves, paint, A4 paper" },
            { name: "Clip the L", description: "Give children an outline of L on a thick card. Children use clothespins or clips to clip along the straight standing and sleeping line to form the letter. This strengthens grip, formation and letter shape focus.", materials: "Cardboard with L outline, clips" },
            { name: "Lacing M Shape", description: "Give children a cardboard cutout of M with holes punched along the outline. Using colorful string or thread, children lace through the holes to complete the shape. The teacher says: 'M for Mango! Mmmm!' Children repeat the sound.", materials: "M cutout with holes, colored thread, safety needles (optional plastic)" },
            { name: "Marble Roll on M", description: "Draw a large M on cardboard. Children roll marbles dipped in paint along the lines of the letter M, guided by the teacher. As they roll, repeat: 'M for Mango, /m/ /m/!' This builds motor skills, color recognition, and letter path tracing.", materials: "Cardboard, paint, marbles, large M outline" },
            { name: "Matchstick M Maker", description: "Children are given colored matchsticks or sticks. They arrange them to form the uppercase letter M. Once complete, they say, 'M for Monkey!' and trace it with their finger.", materials: "Colored matchsticks, letter M picture" },
            { name: "Noodle N Shape", description: "Boiled pasta (or paper strips shaped like noodles) is used to fill the inside of a large N outline. Children glue noodles and say: 'N for Nest, /n/ /n/!' This creates a tactile experience.", materials: "Boiled pasta or paper strips, glue, paper with N outline" },
            { name: "Standing Line & Slant N Walk", description: "Use floor tape to create a large N with two standing lines and one slant. Children walk the N path and shout, 'N for Net!' at the end. Teaches body coordination, letter parts, and recognition.", materials: "Floor tape or chalk lines" },
            { name: "Nature N Collage", description: "Children collect dry leaves, flowers, or pebbles and stick them inside a large N on paper. While doing it, they say, 'N for Nature!' Helps with thematic vocabulary and creative thinking.", materials: "Leaves, pebbles, glue, paper with N" },
            { name: "O for Orange Dot Stamp", description: "Children use cotton buds or fingers to stamp orange dots around the letter O outline. They repeat: 'O for Orange!' Focus is on round shape, color-link, and letter-sound recall.", materials: "Orange paint, cotton buds, letter O worksheet" },
            { name: "Rolling O with Clay Balls", description: "Children roll small clay balls and place them one by one along the outline of O. As they place each ball, they say 'O... O...' slowly in rhythm, reinforcing the sound.", materials: "Clay, paper with O outline" },
            { name: "Circle Walk for O", description: "Create a big circle (O) on the floor. Children walk along the O while saying words like 'Orange,' 'Octopus.' At each corner/point, they stop and say a word.", materials: "Tape or chalk, picture prompts" },
            { name: "Paper Cup P Stack", description: "Children stack paper cups in a line to form the letter P — one standing and one rounded on top (side view). Then they color a cup and say: 'P for Parrot!'", materials: "Paper cups, colors or stickers" },
            { name: "Stamp the P with Peas", description: "Children are given dried green peas to glue on the outline of letter P. They chant 'P... P... Peas!' each time they stick one. It improves grip, counting, and sound association.", materials: "Green peas, glue, letter P worksheet" }
          ],
          "Good Touch and Bad Touch": [
            { name: "My Body Belongs to Me", description: "Children trace their hands and color them. The teacher gently says, 'These are your hands. You can say YES or NO to touch.' Introduces the idea of ownership and personal space.", materials: "A4 sheets, crayons" },
            { name: "Safe Circle Drawing", description: "Children draw themselves inside a circle. Teacher explains, 'Only people in your safe circle (parents, grandparents, teacher) can help you dress or wash.'", materials: "Paper, crayons, stickers" },
            { name: "Good Touch Rhyme", description: "Play a short, gentle rhyme like: 'Hugs from Mom feel nice and warm, but say NO if you feel alarmed.' Children clap and sing along.", materials: "Bluetooth speaker, rhyme lyrics" },
            { name: "Doll Demonstration – Safe Zones", description: "Using a doll, teacher shows body parts like hands, feet, head — and says, 'These are okay to touch.' Private parts are not shown; instead, teacher says: 'Private parts are under clothes. Only you and doctor with Mama can see.'", materials: "Doll or puppet, clothes" },
            { name: "Green and Red Touch Cards", description: "Children are shown image cards: a hug from mom (green), someone pulling arm (red). They sort into a green or red box.", materials: "Picture cards, colored boxes" },
            { name: "Hand Signal Practice – NO!", description: "Teacher says a situation (e.g., 'Someone hugs without asking') and children raise their hand and say 'NO!' in unison.", materials: "None" },
            { name: "Thread of Trust", description: "Children are given thread and asked to tie it to pictures of 3–4 trusted adults (teacher shows photos or draws simple faces).", materials: "String/thread, chart with faces" },
            { name: "Color My Safe Feelings", description: "Children color two faces: one smiling (green) and one uncomfortable (red). Teacher says, 'Good touch makes you feel happy. Bad touch feels yucky or confusing.'", materials: "Emotion face printouts, crayons" },
            { name: "Role Box Sorting Game", description: "Use a 'Yes Box' and 'No Box.' Place cards like 'Handshake,' 'Kiss without asking,' etc. Children drop them in the correct box.", materials: "Boxes, role cards" },
            { name: "My Body Rules Chart", description: "Teacher helps children paste stickers on a chart: 'My body is mine,' 'I can say NO,' 'Tell a safe adult,' etc.", materials: "Printed body rule chart, stickers" },
            { name: "Stop Hands Craft", description: "Children trace their palms and write or paste 'STOP' on it. Teacher explains, 'If someone touches you and you don't like it, you can show your hand and say STOP.'", materials: "A4 sheets, red crayon, glue, STOP sign cutouts" },
            { name: "My Safety Buddy Bracelet", description: "Children make a bracelet using thread and 3 colored beads — green (trusted person), yellow (ask first), red (not allowed to touch). Teacher explains the meaning of each color.", materials: "Thread, beads in red, yellow, and green" },
            { name: "Listening to the Body Song", description: "Play a simple body-safety jingle on Bluetooth speaker: 'If it's not okay, just walk away!' Children sing along, building body autonomy vocabulary.", materials: "Bluetooth speaker, short rhyme" },
            { name: "Happy or Unhappy Puppet Faces", description: "Children are shown two puppet faces. The teacher acts out a hug from grandma (puppet smiles) and a push or pull (puppet frowns). Children choose the matching puppet.", materials: "Happy/sad face puppets or pictures" },
            { name: "Wall of Safety Names", description: "Children draw or paste photos of trusted adults on a paper 'wall.' Teacher says, 'These are the people you can talk to if something feels wrong.'", materials: "Chart paper, photo cutouts, glue" },
            { name: "Story Time: No Means No", description: "Teacher reads a story where a child says 'No' when uncomfortable and tells an adult. Afterward, children discuss: 'What should you do if someone makes you feel yucky?'", materials: "Picture storybook (or teacher-created story), carpet seating" },
            { name: "Safe/Unsafe Feelings Talk Wheel", description: "Children spin a simple wheel with pictures: hugging mom (safe), being touched without asking (unsafe). Each child explains if it feels okay or not.", materials: "Paper wheel, arrow, feelings pictures" },
            { name: "Clap and Say Rule Song", description: "Children clap to each line of a safety rule song: 'My body's mine, all mine! If touch feels wrong, that's a sign.' Helps in recall through rhythm.", materials: "None or Bluetooth speaker for tune" },
            { name: "Respectful Touch Chart", description: "Show a chart with actions: handshake, pat, high five, and push. Children point to which is okay and which is not. Use visual icons (✔ or ✘).", materials: "Chart with visuals, pointer" },
            { name: "Safety Talk Box", description: "Place a decorated box where children can drop pictures or symbols if they feel sad or unsafe. Teacher checks it daily and follows up gently.", materials: "Shoebox, smile/sad stickers, teacher's support" },
            { name: "Palm Stamp Say No Art", description: "Children dip their palms in red paint and press them onto paper. Then they add a sticker or draw a big 'NO!' in the center. Teacher says, 'These hands are for keeping you safe.'", materials: "Red paint, A4 sheet, stickers or crayons" },
            { name: "Private vs Public Clothes Sorting", description: "Children are shown clothing pictures (socks, underwear, scarf). They sort them into 'Private' and 'Public' groups. Teacher says, 'Private clothes cover private parts.'", materials: "Clothing image cards, sorting board or two trays" },
            { name: "Safety Circle with Yarn", description: "Children sit in a circle, holding a yarn loop. Teacher says, 'People in your safety circle are those who help you, never hurt you.' Each child names a trusted person.", materials: "Yarn loop, space for circle sitting" },
            { name: "Color the Feelings Chart", description: "Children are given a chart with happy, sad, confused, and scared face icons. They color each one as the teacher describes how we feel during good and bad touch.", materials: "Feeling chart printouts, crayons" },
            { name: "My Body Safety Booklet", description: "Each child makes a small booklet with 4 pages: 1. My body is mine 2. I can say no 3. I tell a safe adult 4. I keep myself safe. They decorate each page and take it home.", materials: "A4 paper folded/stapled, crayons" },
            { name: "Can I Touch? Yes or No Game", description: "Teacher gives real-life scenarios: 'Your friend asks for a hug – you say...?' Children say YES or NO together. Builds assertiveness in decision-making.", materials: "Scenario cards (or teacher-led verbal prompts)" },
            { name: "Safety Sound Cue Practice", description: "Play a short safety chime. Each time children hear it, they cross arms and say: 'My body is mine!' Reinforces alertness and safety slogans.", materials: "Bluetooth speaker, chime sound" },
            { name: "Safe Toy Sorting Box", description: "Children are given toy figurines or object pictures (doctor, stranger, police, family, etc.). They sort them into 'Can Help Me' and 'Tell a Teacher' boxes.", materials: "Toys or pictures, two labeled boxes" },
            { name: "Body Parts Puzzle – Safe & Private", description: "Children complete a simple puzzle showing body parts (eyes, nose, stomach, etc.). Teacher gently points out, 'Private parts are under our clothes and are not for others to touch.'", materials: "Puzzle cutouts or body diagram cards" },
            { name: "Safety Talk Mirror-Free Roleplay", description: "Instead of pretend play, teacher acts out short, real-life scenes: 'Someone hugs without asking.' 'Friend gives high five.' Children vote with a thumbs-up or thumbs-down.", materials: "Teacher action prompts, thumbs-up/down cards" },
            { name: "I Can Say No Song Cards", description: "Teacher displays action cards while playing a body safety song: 'If someone makes me sad or scared, I will say NO, run, and tell!' Children hold up the matching action card during each line.", materials: "Bluetooth speaker, action cards (NO, RUN, TELL)" },
            { name: "Puppet Talk – Safe People Only", description: "A puppet 'child' says: 'Someone tried to touch me. What should I do?' Children suggest: 'Say NO!', 'Tell Mama!', etc. Builds verbal expression without roleplaying.", materials: "Puppet or soft toy" },
            { name: "Body Safety During Bath Time", description: "Children are shown illustrated cards of bath time routines. Teacher explains: 'Only Mama or Papa can help during bath. If someone else wants to, say NO and tell.'", materials: "Bath-time cards, chart" },
            { name: "Emotion Sorting Board", description: "Children sort illustrated cards into 'Feels Safe' or 'Feels Scary' trays — examples: hugging mom (safe), someone grabbing hand (scary).", materials: "Picture cards, two trays" },
            { name: "Who Can I Tell? Treasure Box", description: "Children decorate a small paper box. Inside, they place pictures or stickers of trusted people. Teacher says, 'These are your helpers. If something feels wrong, tell one of them.'", materials: "Small paper boxes, photo stickers, crayons" },
            { name: "Loud Voice Practice Circle", description: "Children sit in a circle and practice saying strong, clear 'NO!' when the teacher gives examples: 'Someone takes your toy,' 'Someone hugs without asking.'", materials: "Scenario cards, open space" },
            { name: "Safety Echo Song", description: "Teacher sings a line like: 'My body is mine!' Children echo: 'MY BODY IS MINE!' Makes the phrase stick with joy and clarity.", materials: "Bluetooth speaker or teacher-led chant" },
            { name: "What To Do Steps Poster", description: "Children stick 3 large cutouts on a poster: 1. Say NO 2. Go away 3. Tell a safe adult. Teacher points and children chant the steps.", materials: "Poster board, cutout visuals, glue" },
            { name: "Touch or Not? Chart Game", description: "Teacher describes a situation. Children place a green sticker if it's okay (Mom gives hug), red if not okay (stranger hugs). Visual and verbal safety check.", materials: "Chart, red/green stickers" },
            { name: "My Safe Mailbox", description: "Each child drops a drawing or sticker of someone they trust into a small 'safe mailbox.' Teacher opens a few and discusses how those people help.", materials: "Small boxes, crayons or stickers" }
          ],
          "Bonus Activities": [
            { name: "Say NO! Like a Lion", description: "Children practice saying a strong, loud 'NO!' while pretending to be a lion. Teacher says, 'If someone touches you in a way that makes you feel scared or yucky, say NO like a lion!'", materials: "None (open space), optional lion mask" },
            { name: "Run Away Relay", description: "Children pretend to walk in a garden. If the teacher claps twice (signal for unsafe touch), children must run to a 'safe adult' corner. Helps build a safe escape reflex.", materials: "Floor space, corner signs (Mama, Teacher, Grandpa, etc.)" },
            { name: "3-Step Safety Poster", description: "Children assemble a wall poster with these 3 pictures: 1. Say NO 2. Run Away 3. Tell a Safe Adult. The class repeats each step aloud and acts it out.", materials: "Pre-drawn images, glue, chart paper" },
            { name: "Tell and Tell Again Circle", description: "Children pass around a soft ball. When it stops, the child says: 'If someone touches me in a bad way, I will tell _______.' Teacher reinforces: 'Keep telling until someone listens.'", materials: "Soft ball, list of trusted adult images" },
            { name: "My Voice is Strong Song", description: "A gentle chant that children sing with actions: 'Say NO, Go Go, Tell someone you know!' They make a STOP hand, pretend to run, then point to a teacher figure.", materials: "Bluetooth speaker (optional), hand gestures" },
            { name: "Run and Point Drill", description: "Place three 'safe adult' posters on walls: Mom, Teacher, Grandpa. Teacher says, 'You felt unsafe. Who can help?' Children run and point to the correct adult.", materials: "Posters, open area" },
            { name: "My Safety Plan Booklet", description: "Each child creates a booklet with three pages: 1. 'If someone touches me and I feel scared...' 2. 'I will say NO and RUN.' 3. 'I will tell someone I trust.' Simple drawings and teacher-written lines included.", materials: "Paper, crayons, stapler" },
            { name: "Puppet Helps Me Tell", description: "Using a friendly puppet, the teacher acts out: 'Someone touched me and I felt bad. I told my teacher, and she helped me.' Children then say: 'I will tell too!'", materials: "Puppet or soft toy" },
            { name: "Safety Voice Box", description: "Teacher creates a decorated box where children can 'practice telling' by drawing a sad face or writing 'NO' and putting it inside. Teacher opens and reassures: 'Thank you for telling. I will help you.'", materials: "Box, slips of paper, crayons" },
            { name: "Emergency Step Path Walk", description: "Tape 3 floor steps: Step 1: SAY NO, Step 2: RUN, Step 3: TELL. Children walk and say the steps aloud. Practice regularly so it becomes reflexive.", materials: "Floor space, step labels (chart paper/tape)" }
          ],
          "Farm Animals": [
            { name: "Animal Sound Guess Box", description: "Play animal sounds on the Bluetooth speaker. Children guess: 'Is that a cow? A hen?' Teacher reveals the matching animal picture after each sound.", materials: "Bluetooth speaker, animal picture cards" },
            { name: "Match the Baby to the Animal", description: "Children are given cutouts of adult farm animals and their babies (e.g., Cow–Calf, Hen–Chick). They match the pairs and repeat their names aloud.", materials: "Printed or drawn animal cards" },
            { name: "Clay Animal Models", description: "Children use clay to form simple animal shapes (cow, sheep, duck). Teacher helps identify features: 'Let's make 4 legs for the cow!'", materials: "Clay, plastic mat or tray" },
            { name: "Tail Match Game", description: "Teacher shows animal bodies without tails. Children choose from tail pictures and paste the correct one. Builds attention and recognition.", materials: "Animal body charts, paper tail cutouts, glue" },
            { name: "Animal Homes Sorting", description: "Children are given images of farm animals and their homes (sty, coop, stable). They sort them into matching boxes or baskets.", materials: "Cards or printed images, boxes labeled with homes" },
            { name: "Farm Animal Parade Song", description: "Play a peppy song like 'Old MacDonald Had a Farm.' As each animal is named, children hold up its picture or clay model.", materials: "Bluetooth speaker, animal cards or clay models" },
            { name: "Touch and Guess – Farm Edition", description: "Put clay, feathers, cotton, and sponge in a bag. Blindfolded, children touch and guess: 'Is this soft like a sheep?'", materials: "Cloth bag, safe textured items" },
            { name: "Animal Step Walk", description: "Children walk like different animals based on teacher's call: 'Stomp like a cow!' 'Hop like a rabbit!' Avoids pretend play, focuses on movement imitation.", materials: "Open floor space" },
            { name: "Count the Legs Game", description: "Show pictures of animals. Children count aloud how many legs each has: '1, 2, 3, 4 – A cow has 4 legs!'", materials: "Animal pictures, number cards (optional)" },
            { name: "Match Me Feather Color", description: "Give children colored paper feathers. They match them to the correct bird (e.g., yellow – chick, white – duck).", materials: "Colored paper feathers, bird charts" },
            { name: "Cotton Wool Sheep Craft", description: "Children paste cotton on a sheep outline to create a fluffy texture. As they work, they repeat: 'Baa baa sheep!' and count its legs and ears.", materials: "Sheep outline on paper, cotton, glue" },
            { name: "Hen and Chick Paper Cups", description: "Children decorate one paper cup as a hen and one small cup as a chick. Teacher asks: 'Which one is the baby? What sound does it make?'", materials: "Paper cups, crayons, feathers (optional)" },
            { name: "Animal Footprint Stamping", description: "Using pre-cut animal foot stamps or finger dabbing, children make trails on paper and guess: 'Who made these prints?'", materials: "Sponges or stampers, paint, chart paper" },
            { name: "Moo Says the Cow (Clap Game)", description: "Children sit in a circle and clap. Teacher says: 'Moo says the—?' Kids shout 'COW!' and do a cow hand sign. Repeat with other animals.", materials: "None" },
            { name: "Egg Sorting (Hen's Treasure)", description: "Children sort paper 'eggs' into trays labeled by size or color. Teacher says, 'These came from the hen's coop!' A fun, quiet sorting task.", materials: "Cut-out paper eggs, trays" },
            { name: "Feed the Farm Animal Game", description: "Make simple cardboard animal faces with open mouths. Children feed matching items (e.g., cow → grass cutout, pig → scraps).", materials: "Cardboard, cutout food pieces, glue/tape" }
          ],
          "Introduction to Vegetables": [
            { name: "What's in the Basket?", description: "Hide real or plastic vegetables inside a cloth bag or basket. Children put in their hands, feel the shape, and guess what vegetable it is. Teacher says: 'Is it long like a carrot?'", materials: "Cloth bag/basket, real or toy vegetables" },
            { name: "Clay Veggie Shapes", description: "Children mold clay into basic vegetable shapes like carrot, tomato, and brinjal. Teacher prompts: 'Can you make a long carrot? A round tomato?'", materials: "Clay, plastic mat or tray" },
            { name: "Vegetable Sound Song Time", description: "Play a fun vegetable rhyme (e.g., 'I'm a little carrot, crunchy and sweet…'). Children act out motions like peeling or chopping while dancing to the music.", materials: "Bluetooth speaker, rhyme" },
            { name: "Color and Match the Veggies", description: "Children color vegetable outlines (e.g., tomato in red, spinach in green), then match them to the correct name or photo.", materials: "Vegetable outline sheets, crayons, photo cards" },
            { name: "Tall or Small Veggie Sorting", description: "Children sort pictures into two baskets — Tall Veggies (corn, carrot) vs Small Veggies (peas, tomato).", materials: "Picture cards, two baskets or trays" },
            { name: "Onion Ring Stamping", description: "Teacher dips raw onion rings in paint. Children press them onto paper to make circular vegetable prints.", materials: "Onion slices, paint, paper" },
            { name: "Match Me – Veggie Puzzle Pairs", description: "Use two-piece puzzles of vegetables split into top and bottom halves. Children find matching pieces and name the vegetable.", materials: "Vegetable puzzle cards" },
            { name: "Vegetable Basket Relay", description: "Children pick a vegetable picture from one corner and walk quickly to place it in the correct labeled basket. Repeat for multiple turns.", materials: "Vegetable cards, baskets labeled with names" },
            { name: "Touch and Tell Vegetable Tray", description: "Arrange real vegetables on a tray. Blindfold a child gently and let them touch one vegetable. The child guesses: 'Is it broccoli?'", materials: "Real vegetables, tray, soft blindfold" },
            { name: "Stick a Sticker – Veggie Hunt", description: "Teacher hides vegetable stickers under chairs or tables. Children find and stick them onto a veggie chart with matching names.", materials: "Vegetable stickers, chart with names" }
          ]
        }
      },
      {
        volume: 3,
        topics: {
          "Letter Formation (R–Z)": [
            { name: "Rainbow R Tracing", description: "Children trace the letter 'R' using 4 different crayons in rainbow colors. Repetition builds muscle memory in a fun, colorful way.", materials: "Letter R worksheet, crayons" },
            { name: "Sand Snake S", description: "Children use fingers to form the letter S in a tray filled with sand, saying the /s/ sound aloud.", materials: "Sand tray, letter S card" },
            { name: "T-Shirt T Cutout Paste", description: "Children paste small paper T-shirts on a big letter T, making the letter visually engaging and tactile.", materials: "T outline sheet, T-shirt cutouts, glue" },
            { name: "Umbrella U Paint Dots", description: "Using earbuds dipped in paint, children make dot patterns on a large letter U outline.", materials: "Letter U sheet, paint, earbuds" },
            { name: "Clay V Shape", description: "Children roll clay into ropes and form the letter V. Reinforces slanting strokes through sensory play.", materials: "Clay, letter V template card" },
            { name: "W with Water Painting", description: "With clean brushes dipped in water, children trace W on colored paper and watch the water marks fade magically.", materials: "Colored paper, paintbrush, water" },
            { name: "Paper Plate X Marks", description: "Children draw or stick Xs across paper plates, creating repeated patterns while saying the sound /x/.", materials: "Paper plates, crayons or craft sticks" },
            { name: "Yarn Y Wrap", description: "Children wrap yarn through a large slotted Y to practice directionality and fine motor skills.", materials: "Letter Y card with slits, yarn" },
            { name: "Zebra Z Strip Pasting", description: "Children paste black strips onto a zebra drawing with a big letter Z to complete the pattern.", materials: "Zebra worksheet, black paper strips, glue" },
            { name: "Letter R to Z Hop Trail", description: "Children hop from one large letter card to another, saying the letter aloud as they land on it.", materials: "R–Z letter floor cards" },
            { name: "Roll & Stick R", description: "Children roll tiny paper balls or yarn pieces and paste them onto the letter R outline.", materials: "Letter R outline sheet, paper/yarn pieces, glue" },
            { name: "Sponge Squeeze S", description: "Children dip sponge letter S in paint and stamp onto paper. Teacher encourages saying /s/.", materials: "Sponge S shapes, paint, paper" },
            { name: "Tape the T Track", description: "Children paste paper strips to form a road on a large T, then drive their fingers like a car across it.", materials: "T template, paper strips, glue" },
            { name: "Umbrella Handle U Craft", description: "Children add a U-shaped handle to umbrella drawings using paper cutouts or by drawing.", materials: "Umbrella picture, glue, U cutouts or crayons" },
            { name: "Vegetable Stamp V", description: "Use okra or potato pieces to stamp V shapes onto paper — combining art and alphabet.", materials: "Cut vegetables, paint, paper" },
            { name: "Walking W Path", description: "Create a zigzag W on the floor. Children walk heel-to-toe along it, saying 'W, w, w!'", materials: "Masking tape/paper strips, open space" },
            { name: "X-Ray Craft", description: "Children paste cotton buds on black paper in the shape of an X, mimicking an X-ray.", materials: "Black paper, cotton buds, glue" },
            { name: "Yarn Pull Y Art", description: "Dip yarn in paint, place on folded paper in a Y shape, pull it out — creates a symmetrical Y pattern.", materials: "Yarn, paint, paper" },
            { name: "Zebra Z Zigzag Trace", description: "Children trace a zigzag Z using crayons, beads or their finger while saying /z/.", materials: "Zigzag Z sheet, crayons or beads" },
            { name: "R–Z Letter Hunt", description: "Hide letter cards. Children find one, name it, and say a word that starts with that letter.", materials: "R–Z letter cards, open space" },
            { name: "Rainbow Path R–Z Maze", description: "Children use crayons to follow a maze from R to Z, staying inside the lines for motor control.", materials: "R–Z maze worksheet, crayons" },
            { name: "Salt Tray Swoop", description: "Children form letters R to Z in salt trays using fingers as teacher names them.", materials: "Salt tray, alphabet cards" },
            { name: "Trace & Button T", description: "Children trace the big T with glue and stick buttons along the path to form the letter.", materials: "T outline, buttons, glue" },
            { name: "Umbrella U Raindrop Dotting", description: "Children make blue paint dots like raindrops around the letter U.", materials: "U sheet, blue paint, cotton buds" },
            { name: "V-Shaped Veggie Patch", description: "Children paste triangle paper vegetables into a big V shape to resemble a veggie patch.", materials: "V outline, triangle paper bits, glue" },
            { name: "Windy W Paint Blowing", description: "Put paint drops on W outline. Children blow through straws to spread paint — 'W is for Wind!'", materials: "W sheet, paint, straws" },
            { name: "Mark an X – Target Game", description: "Draw large Xs. Children toss a ball onto them and shout, 'X marks the spot!'", materials: "Chalk/tape Xs, soft ball" },
            { name: "Yellow Yarn Y Puzzle", description: "Children complete a half-drawn Y by pasting yellow yarn to match the shape.", materials: "Y half-drawing sheet, yellow yarn, glue" },
            { name: "Zip Line Z Craft", description: "Make a zigzag 'zip line' and paste the letter Z across it. Children move fingers down the line.", materials: "Cardboard, straws or paper strips, glue" },
            { name: "Clap & Shout R–Z Game", description: "Teacher calls a letter. Children clap once and shout a word that starts with it — fun for sound recognition.", materials: "Letter cards (R–Z), open space" },
            { name: "Rice Tray R Writing", description: "Children trace R in rice using fingers, building stroke familiarity with tactile feedback.", materials: "Rice tray, letter R card" },
            { name: "S-Slide Paper Snake", description: "Fold green strips in zigzags, add letter S cutouts to make 'S-snakes.'", materials: "Green paper strips, S stickers or cutouts, glue" },
            { name: "Tissue T Tapping Art", description: "Children dab paint-soaked tissue on the T outline to create a soft, textured letter.", materials: "Letter T sheet, tissue paper, paint" },
            { name: "Under the Umbrella U Game", description: "Children paste U-word images under a big umbrella poster on the wall or board.", materials: "Large umbrella chart, picture cutouts, glue" },
            { name: "V-Cup Volcano", description: "Turn cups upside-down. Children draw a big V on them and paint them like volcanoes.", materials: "Paper cups, paint, crayons" },
            { name: "Watch the W String Path", description: "Stick yarn onto the W path to feel the zigzag. Say /w/ each time they turn.", materials: "W outline, glue, yarn" },
            { name: "X with Sticks", description: "Children use two sticks to make and glue an X on paper.", materials: "Paper, straws or popsicle sticks, glue" },
            { name: "Y-Egg Yolk Craft", description: "Stick yellow circle cutouts on a Y to create a fun 'yolk' pattern.", materials: "Letter Y sheet, yellow circles, glue" },
            { name: "Z-Zipper Zip Line", description: "Show how a zipper moves in zigzags. Children 'zip' along the Z while saying /z/.", materials: "Zip pouch, Z chart" },
            { name: "R–Z Puzzle Board", description: "Children sequence letters R to Z in correct order by placing puzzle pieces together.", materials: "Letter puzzle board or cutouts" },
            { name: "R Rolling Bead Trail", description: "Children roll small beads along the letter R outline using their fingers.", materials: "R sheet, small beads" },
            { name: "S-Shaped Spoon Trail", description: "Dip spoon tips in paint and stamp an S trail along a letter S path.", materials: "S worksheet, plastic spoons, paint" },
            { name: "Textured T Track", description: "Create a letter T with different textures for kids to trace and feel.", materials: "Letter T base, sand, fabric, glue" },
            { name: "Underline U Activity", description: "Teacher reads U-heavy sentences. Children underline the U words with crayons.", materials: "Sentence strips, crayons" },
            { name: "Vegetable V Crown", description: "Children make a headband and stick vegetable images shaped like V (carrot, pea pods).", materials: "Headband strip, veg cutouts, glue" },
            { name: "W Water Cup Drop Game", description: "Children balance a spoon of water and walk carefully on a taped W path.", materials: "Spoon, water, tape W path" },
            { name: "X Mark Painting with Sticks", description: "Dip two sticks in paint and stamp Xs all over chart paper.", materials: "Chart paper, paint, craft sticks" },
            { name: "Yellow Yarn Y Spool", description: "Wrap yellow yarn around a Y-shaped cutout while saying 'Y for Yellow Yarn.'", materials: "Y cutout, yellow yarn" },
            { name: "Zigzag Z Race", description: "Tape a zigzag Z on the floor. Children race small toys along the shape, saying /z/.", materials: "Floor Z tape path, toy animals" },
            { name: "R–Z Letter Parade & Song", description: "Final celebration! Children wear letter badges from R to Z and sing along in a fun alphabet parade.", materials: "R–Z badges, Bluetooth speaker, song track or teacher tune" }
          ],
          "Traffic Lights": [
            { name: "Traffic Light Circle Time", description: "Teacher shows a real or chart traffic light and explains: red means stop, yellow means wait, green means go. Children repeat with actions.", materials: "Traffic light chart, Bluetooth speaker (optional)" },
            { name: "Clay Traffic Signal", description: "Children roll colored clay balls and place them on a paper traffic light template in the correct order.", materials: "Clay (red, yellow, green), paper template" },
            { name: "Red-Yellow-Green Spoon Sorting", description: "Children sort red, yellow, and green paper balls into matching colored spoons while learning the meaning of each color.", materials: "Colored paper balls, colored spoons" },
            { name: "Cup Stack Signal Tower", description: "Children build a signal tower by stacking red, yellow, and green cups vertically.", materials: "Paper cups, colored paper, glue" },
            { name: "Signal Song & Actions", description: "As the traffic light song plays, children act out the signal: freeze for red, wait on yellow, march on green.", materials: "Bluetooth speaker, traffic light song" },
            { name: "Straw Light Craft", description: "Children paste straws vertically and glue red, yellow, and green circles to form a signal pole.", materials: "Straws, colored paper circles, glue" },
            { name: "Paint Drop Signal Art", description: "Using a brush or fingers, children place paint dots in the correct traffic light order.", materials: "Paints, worksheet" },
            { name: "Traffic Light Hop", description: "Colored circles are placed on the floor. Children hop to the color called by the teacher.", materials: "Colored paper circles, open space" },
            { name: "Signal Mask Craft", description: "Children create a signal mask and wear it while identifying each color's meaning.", materials: "Cardboard or paper, paint, string" },
            { name: "Button Light Board", description: "Buttons are pasted to form a tactile signal board, reinforcing color placement.", materials: "Black paper, red/yellow/green buttons, glue" },
            { name: "Tissue Roll Traffic Light", description: "Children paste colored circles onto a vertical tissue roll and rotate it while chanting the rules.", materials: "Tissue roll, colored paper" },
            { name: "Signal Song Drama", description: "Children pretend to drive and react to signal colors with freeze/move actions.", materials: "Bluetooth speaker, open space" },
            { name: "Road Mat + Signal Play", description: "Children play with toy cars and stop at bottle cap signals on the road mat.", materials: "Road mat, bottle caps (R/Y/G)" },
            { name: "Traffic Light Necklace", description: "Children create and wear a traffic light necklace using beads in correct order.", materials: "Beads (R/Y/G), thread" },
            { name: "Popsicle Signal Stick", description: "Children create a mini signal on a stick and use it during role-play games.", materials: "Popsicle stick, paper circles, glue" },
            { name: "Clay Press Signal Game", description: "Teacher calls out a color; children press matching clay onto the correct spot.", materials: "Signal chart, clay" },
            { name: "Sorting Game with Cups", description: "Children sort colored balls into cups labeled with signal rules.", materials: "Cups, colored paper balls" },
            { name: "Sand Tray Signal Drawing", description: "Children draw a traffic light in sand and explain what each color means.", materials: "Sand tray, signal model chart" },
            { name: "Spoon Color Relay", description: "Children carry beads using spoons and drop them into matching signal bowls.", materials: "Spoons, colored beads, bowls" },
            { name: "Stick Puppet Signal Show", description: "Children create stick puppets and perform a short signal-based skit.", materials: "Craft sticks, colored circles" },
            { name: "Finger Light Chant", description: "Children chant 'Stop, Wait, Go!' while tapping each finger in signal color order.", materials: "Colored finger dots (optional)" },
            { name: "Traffic Light Puzzle", description: "Children place mixed-up circles in correct order on a card base.", materials: "Cut colored circles, glue, black card" },
            { name: "Crayon Rubbing Signal", description: "Children color over a raised traffic signal stencil to reveal the shape.", materials: "Crayons, stencil, paper" },
            { name: "Find the Color Hunt", description: "Children look around the room to find objects that match the shown signal color.", materials: "Signal color flashcards" },
            { name: "Class Signal Chart Making", description: "Children decorate red/yellow/green sections on a big group signal poster.", materials: "Chart paper, crayons, glue" }
          ],
          "Community Helpers": [
            { name: "Who Am I? Hat Guess Game", description: "Teacher wears or shows a helper's hat, and children guess who it is. Builds recognition and critical thinking.", materials: "Picture cards or real hats (doctor, chef, firefighter, etc.)" },
            { name: "Dress-Up Corner Play", description: "Children take turns dressing up like community helpers and pretend to do their jobs. Encourages imagination.", materials: "Old uniforms, caps, props (like stethoscope, broom, etc.)" },
            { name: "Job Sound Match", description: "Teacher plays a sound, and children guess which helper it belongs to (e.g., siren = police). Enhances listening skills.", materials: "Sound clips (siren, whistle, drill, etc.), speaker" },
            { name: "Community Helper Puzzle Board", description: "Children match a community helper to their vehicle, tool, or uniform. Builds association and memory.", materials: "Picture puzzles (helper image + tools or vehicles)" },
            { name: "Doctor Bag Craft", description: "Children make and decorate a doctor's kit, placing pretend items (band-aids, paper thermometer) inside.", materials: "Paper bags, red cross cutouts, crayons" },
            { name: "Post Office Letter Drop", description: "Children write or draw simple messages and 'mail' them into a box. Encourages role play and writing.", materials: "Toy mailbox, envelopes" },
            { name: "Police Badge Making", description: "Children cut out badge shapes, cover with foil, and write 'Police' on them. Promotes respect and awareness.", materials: "Cardstock, foil paper, scissors" },
            { name: "Firefighter Hose Game", description: "Children use the 'hose' to knock over paper flames, simulating fire extinguishing. Builds gross motor skills.", materials: "Long ribbon or rope, pretend flame cutouts" },
            { name: "Baker Dough Play", description: "Children pretend to be bakers, shaping and 'baking' dough cookies. Combines sensory play with creativity.", materials: "Dough, rolling pin, pretend baking tools" },
            { name: "Garbage Collector Clean-up Race", description: "Children collect and sort paper trash into colored bins. Teaches cleanliness and appreciation for sanitation workers.", materials: "Paper scraps, small bins" },
            { name: "Community Helper Song & Actions", description: "Children sing along to a song like 'Helpers in My Town' with gestures: typing, driving, cooking, etc.", materials: "Speaker or live singing" },
            { name: "Construction Worker Block Building", description: "Children pretend to be builders, constructing towers or bridges. Enhances fine motor and spatial skills.", materials: "Blocks, toy tools" },
            { name: "Chef Hat & Apron Design", description: "Children decorate chef hats and aprons, then pretend to cook. Introduces the role of a chef with creativity.", materials: "Paper hats, fabric scraps, stickers" },
            { name: "Community Helpers Booklet", description: "Children color and assemble a small booklet featuring helpers and their jobs. Supports literacy and art.", materials: "Printouts, crayons, stapler" },
            { name: "Dentist Teeth Cleaning Activity", description: "Children brush 'teeth' using a toothbrush and pretend to clean them, learning the role of a dentist.", materials: "Egg carton (teeth), toothbrush, white paint" },
            { name: "Hospital Role Play Corner", description: "Create a mini hospital with patients and doctors/nurses. Teaches empathy and care.", materials: "Bedsheets, toy medical kits" },
            { name: "Bus Driver Route Game", description: "Set up chairs like a bus. One child is the driver; others are passengers. Enhances sequencing and turn-taking.", materials: "Chairs in row, pretend steering wheel" },
            { name: "Vet Clinic Animal Check-Up", description: "Children act as vets and take care of plush animals. Builds kindness and understanding of animal helpers.", materials: "Toy animals, bandages, pretend tools" },
            { name: "Librarian Shelf Sort", description: "Children arrange books by color or size, pretending to work in a library. Teaches order and literacy love.", materials: "Picture books, shelf labels" },
            { name: "Community Helper Parade", description: "Children dress up and walk around in a line, introducing who they are (e.g., 'I am a firefighter!'). A fun conclusion activity.", materials: "Hats, props, music" }
          ],
          "Seasons": [
            { name: "Season Sorting Basket", description: "Children sort cards into baskets labeled Summer, Winter, Monsoon, and Spring. Helps them associate visuals with each season.", materials: "Picture cards of clothes, foods, and items from all four seasons" },
            { name: "Summer Sun Craft", description: "Children create a sun by pasting orange rays on a yellow circle. They talk about what we see and do in summer.", materials: "Yellow paper plates, orange strips, glue, crayons" },
            { name: "Winter Dress-Up Relay", description: "Children race to dress up in warm clothes and say, 'I wear this in winter!' Encourages physical activity and season awareness.", materials: "Scarves, gloves, jackets, hats" },
            { name: "Rainy Day Splash Art", description: "Kids blow blue paint drops across paper to create 'rain splashes.' Fun way to express monsoon visuals.", materials: "Blue paint, straws, umbrella cutouts" },
            { name: "Spring Flower Garden Craft", description: "Children paste or stand flowers in paper 'grass' to build a blooming spring garden. Talks about plant growth and beauty.", materials: "Paper flowers, green straws/sticks, glue" },
            { name: "Season Walk Observation", description: "Teacher takes children outside to observe seasonal signs: dry sun, wet puddles, flowers, or fallen leaves.", materials: "None or magnifying glasses (optional)" },
            { name: "Ice Play in Winter Tub", description: "Children explore how cold winter feels by touching ice, melting it with their hands, and describing the temperature.", materials: "Ice cubes, small toys, trays" },
            { name: "Summer Fruit Tasting", description: "Kids taste and talk about refreshing fruits we eat in summer. Introduces sensory connection with seasons.", materials: "Small pieces of watermelon, mango, cucumber" },
            { name: "Raincoat & Umbrella Dress-Up", description: "Children try on rain gear and walk around the class pretending it's raining. Builds motor skills and imagination.", materials: "Umbrella, raincoat, boots" },
            { name: "Seasons Song & Actions", description: "Children sing a simple 'Four Seasons' song with actions: shivering for winter, blooming for spring, etc.", materials: "Speaker or teacher voice" },
            { name: "Spring Butterfly Finger Painting", description: "Children paint colorful patterns on butterfly wings. Connects to spring colors and insects.", materials: "Butterfly printouts, paint" },
            { name: "Summer Beach Sensory Bin", description: "Children play with dry sand in a bin, scooping and pouring. Teacher talks about beaches and summer fun.", materials: "Sand, shells, toy fish" },
            { name: "Winter Snowball Toss", description: "Kids throw 'snowballs' into a basket. Teacher explains snow and fun winter games.", materials: "White socks rolled into balls, bucket" },
            { name: "Monsoon Paper Umbrella Craft", description: "Children paste cotton clouds and raindrops above their umbrella craft. Creates a full rainy-day scene.", materials: "Umbrella cutouts, cotton for clouds, blue drops" },
            { name: "Season Dress Match Game", description: "Kids match clothes (sweater, shorts, raincoat) to the correct season. Builds reasoning and observation skills.", materials: "Cutouts of clothes and season labels" },
            { name: "Nature Color Hunt", description: "Go outdoors and find something green (spring), yellow (summer), gray (winter), or blue (rainy). Enhances observation.", materials: "Color cards" },
            { name: "Seasonal Tree Collage", description: "Children decorate each tree for a different season. Visualizes how nature changes throughout the year.", materials: "One tree outline, 4 versions (bare, flowers, green leaves, raindrops)" },
            { name: "Ice Melting Race", description: "Place an ice cube in each child's hand and see who melts it fastest. A sensory way to understand winter chill.", materials: "Ice cubes, bowls, towels" },
            { name: "Rain Rhythm Stick Song", description: "Children tap their sticks as they sing a rainy day song ('Rain, Rain, Go Away…'), building rhythm and fun.", materials: "Rhythm sticks or two spoons" },
            { name: "Four Seasons Display Board", description: "Children help build a class display board showing one part for each season. Recaps and reinforces seasonal learning.", materials: "Pictures, real leaves, cotton, cutouts" }
          ],
          "Days of the Week": [
            { name: "Days Song & Dance", description: "Play a cheerful Days of the Week song. As each day is sung, children clap, stomp, or do a specific action. Helps memorization through music and movement.", materials: "Bluetooth speaker, action prompts" },
            { name: "Days Circle Chart", description: "Teacher prepares a circle divided into 7 slices like a pie chart. Children paste weekday names and images representing each day.", materials: "Chart paper, glue, pre-cut pictures, markers" },
            { name: "Button Day Picker", description: "Each child picks a colored button from a bag with the day name written under it. They read the day and place it on the correct spot in a chart.", materials: "Buttons, bag, day chart" },
            { name: "Clay Week Train", description: "Make a 'train' with 7 compartments, each labeled with a weekday. Children place a clay ball or object in each one in order.", materials: "Paper train cutouts, clay" },
            { name: "Sunday Sun Craft", description: "On Sunday, make a big sun craft to represent rest and relaxation. Children stick yellow rays and write 'Sunday' in the center.", materials: "Yellow paper, glue, round cutout" },
            { name: "Rainbow Week Chain", description: "Children create a paper chain with 7 links, each a different color and labeled with a day. Helps them visualize the sequence.", materials: "Colored paper strips, glue, marker" },
            { name: "Days March", description: "Children march around in a circle as the teacher chants the days. When a day is called, that child leads the line.", materials: "Open classroom space" },
            { name: "Days of the Week Pouch Sorting", description: "Place 7 paper pouches labeled with weekdays. Children sort routine items or pictures into the matching pouch.", materials: "Pouches, routine cutouts" },
            { name: "Today Is… Wall Chart", description: "Daily, a helper comes forward and sticks the 'Today is...' label on the correct weekday card on the board.", materials: "Velcro chart, day cards" },
            { name: "Spoon Days Relay", description: "Each spoon is labeled with a weekday. Children run with the spoon and drop it in the matching cup placed at a distance.", materials: "Spoons, labeled cups" },
            { name: "Clay Rainbow Days", description: "Roll out long clay ropes in different colors and arrange them into a rainbow shape — 1 rope per weekday.", materials: "Colored clay, base sheet" },
            { name: "Straw Week Star", description: "Make a star shape with 7 straws, each labeled with a day. Teacher helps children count and name each straw segment.", materials: "Straws, glue, labels" },
            { name: "Balloon Pop Days", description: "Place a slip with each day inside 7 balloons. Pop one balloon, read the day aloud, and discuss its order.", materials: "Balloons, paper slips, marker" },
            { name: "Matching Socks by Day", description: "Children match cut-out socks that have the same day written on both sides or that show a weekday routine (e.g., sports sock for Friday).", materials: "Paper sock cutouts" },
            { name: "Paint the Week Path", description: "Children paint 7 blocks (or circles) in sequence to form a path showing the days of the week. They walk and say each day aloud.", materials: "Chart paper, paint, brushes" },
            { name: "Ice Cream Stack", description: "Give each child a paper cone and 7 colored scoops labeled with weekday names. They stack them in order and recite the days.", materials: "Pre-cut cone and scoop shapes, glue" },
            { name: "Days Puzzle Match", description: "Break each weekday into two parts (e.g., Mon + day). Mix them and let children match pieces to complete the words.", materials: "Laminated puzzle cards" },
            { name: "Stick Day Spinner", description: "A rotating spinner with 7 craft sticks attached — each with a day written. When it stops, the child says what comes next.", materials: "Paper circle, split pin, craft sticks" },
            { name: "Calendar Clapping", description: "Teacher uses a visual calendar. Children clap once per day as the pointer moves across each weekday. Builds rhythm and recall.", materials: "Classroom calendar, pointer" },
            { name: "Week Cup Tower", description: "Children are given mixed-up cups labeled with weekdays. They stack them in correct order to build a 'week tower.'", materials: "Paper cups, markers" },
            { name: "Days of the Week Song Puzzle", description: "Print each line of a days-of-the-week song on separate slips. Children arrange the lyrics in correct weekday order.", materials: "Printed lyric strips" },
            { name: "Playdough Day Molds", description: "Children roll clay and use alphabet cutters to form the name of a day (e.g., MONDAY). Builds motor skills and letter-day link.", materials: "Clay, alphabet molds" },
            { name: "Match Me Rainbow Day Sheet", description: "A printed rainbow has 7 bands, each labeled with a day. Children color each band based on teacher instructions (e.g., Red = Monday).", materials: "Worksheet, crayons" },
            { name: "Days Tapping Game", description: "Children sit at a table and tap once per day as the teacher says them aloud. Then speed up to challenge their rhythm.", materials: "None" },
            { name: "Chart Race Game", description: "A large day chart is on the floor. Teacher calls out 'Thursday!' — children run and place a token or object on it.", materials: "Floor chart, soft tokens" },
            { name: "Crayon Match by Day", description: "Crayons are labeled with days. Teacher calls 'Wednesday!' and children must use the matching crayon to color a small picture.", materials: "Crayons, labels, coloring sheet" },
            { name: "Week Headband Crown", description: "Children create headbands with one weekday written on the front. When the teacher says a day, that child stands up and says what comes next.", materials: "Paper strips, glue, markers" },
            { name: "Days Cup Flip", description: "Place 7 paper cups upside-down with weekday labels hidden. Child flips and reads one cup, then finds what comes before and after.", materials: "Cups, labels" },
            { name: "Bead Thread Days", description: "Children thread 7 beads (one for each day) and say the order as they string. Use color code to reinforce order.", materials: "Colored beads, string" },
            { name: "Spoon Spin the Day", description: "Children spin a spoon placed in the center of a circle of weekdays. When it stops, they say what day it is and what comes next.", materials: "Spoon, day cards arranged in a circle" },
            { name: "Days Ladder Hop", description: "Teacher lays out 7 rectangles on the floor labeled with each day. Children hop from 'Sunday' to 'Saturday' while saying the name aloud as they step. Teacher can guide slower learners.", materials: "Paper sheets or floor tape, markers" },
            { name: "Weekly Routine Drawing", description: "Children draw what they usually do on a certain day (e.g., 'Sunday – I visit grandma' or 'Friday – I play'). Teacher explains each day can have different activities.", materials: "Drawing sheets, crayons" },
            { name: "Music Freeze with Days", description: "Play music and when paused, teacher holds up a day card. Children must say the next day (e.g., 'Monday' → 'Tuesday') and freeze in a pose.", materials: "Bluetooth speaker, day cards" },
            { name: "Cup Stack Days Challenge", description: "Give children cups with days written on them. They unstack and re-stack the cups in the correct weekday order while reading them aloud.", materials: "Paper/plastic cups, markers" },
            { name: "Days Felt Board Story", description: "Teacher uses a felt board with felt pieces showing daily events (e.g., brush teeth, go to school). Children guess which day matches each event.", materials: "Felt board, cutouts, labels" },
            { name: "Days Thread Necklace", description: "Children thread seven paper circle 'beads' with one weekday written on each to make a necklace. They wear and recite the order.", materials: "Paper circles, yarn/thread, markers" },
            { name: "Paper Plate Week Clock", description: "Convert a paper plate into a circular 'week clock.' Children spin the pointer and say the day it points to. Great for daily review!", materials: "Paper plate, split pin, pointer card, day labels" },
            { name: "Sand Tray Day Writing", description: "Children write the first letter of each day ('M' for Monday, 'T' for Tuesday, etc.) in a tray of sand as the teacher calls them out.", materials: "Sand tray, day prompts" },
            { name: "Story of Sunny Sunday", description: "Teacher tells a simple story about a character's full day on 'Sunday.' After the story, children act out one thing the character did (like resting or going for a walk).", materials: "Story prompts, optional props" },
            { name: "Match the Picture to the Day", description: "Children are given pictures of daily tasks (e.g., school, holiday, bath time). They match them to the most suitable weekday (school days vs. weekend).", materials: "Printed pictures, day labels, glue" },
            { name: "Rainbow Week Garland", description: "Each child creates one day of the week on a colored paper flag. All flags are strung together to form a class rainbow week garland.", materials: "Colored paper, thread, glue" },
            { name: "Day Puzzle Ladder", description: "Give children 7 jumbled puzzle pieces with weekdays. They complete the puzzle by arranging in correct order top to bottom.", materials: "Day cards cut like puzzle, tray" },
            { name: "Day Sorting Cups", description: "Cups labeled with days are placed on a table. Children are given small images or actions to sort into the correct cup (e.g., 'Bath' into Sunday).", materials: "Cups, small printed pictures" },
            { name: "Balloon Pop the Day", description: "Blow up 7 balloons with a weekday card inside. When a balloon is popped, the child must identify what comes before and after that day.", materials: "Balloons, weekday slips" },
            { name: "Rainbow Stamping Days", description: "Provide stamps (or sponge cutouts) and rainbow-colored paints. Children stamp once for each day while chanting: 'Monday is red, Tuesday is blue...'", materials: "Paints, stamps, paper" },
            { name: "Ice Cream Cone Week", description: "Make a big cone and 7 scoops of ice cream in different colors. Each scoop has a weekday name. Children build their ice cream tower in order.", materials: "Paper cone, paper scoops, glue" },
            { name: "Week Box Mystery", description: "Teacher hides a routine-related item in a box (e.g., toy toothbrush for Monday). Children guess the day by asking clues.", materials: "Mystery box, props" },
            { name: "Class 'Today Board' Helper", description: "Each day, a new child is chosen to come up and place the correct day card on the 'Today is…' board. Builds routine memory.", materials: "Chart board, reusable weekday cards" },
            { name: "'Yesterday–Today–Tomorrow' Relay", description: "Children are divided into three teams. Each holds a card: Yesterday, Today, Tomorrow. Teacher calls a day (e.g., Tuesday). They run and place it in correct order: Monday–Tuesday–Wednesday.", materials: "Large cards, open space" },
            { name: "Weekly Roleplay Days", description: "Set up stations for each day (e.g., 'Monday – go to school,' 'Saturday – play'). Children rotate to each and act out a simple action matching that day.", materials: "Day cards, simple props or actions" }
          ]
        }
      }
    ],
    maths: [
      {
        volume: 1,
        topics: {
          "Numbers 1-5": [
            { name: "Count My Fingers", description: "Children hold up their hands and count fingers one by one. Teacher says 'Show me 1 finger' and children hold up one finger.", materials: "None" },
            { name: "Number Walk", description: "Teacher draws numbers 1-5 on the floor with chalk. Children walk on each number while counting aloud.", materials: "Chalk" },
            { name: "Clay Number Balls", description: "Children roll clay into balls. Teacher says 'Make 3 balls' and children count as they roll.", materials: "Clay" },
            { name: "Number Jump Game", description: "Teacher calls out numbers 1-5. Children jump that many times.", materials: "None" },
            { name: "Count the Buttons", description: "Teacher gives each child a small pile of buttons. Children count them one by one.", materials: "Buttons" },
            { name: "Number Song with Actions", description: "Sing 'One little, two little, three little numbers' with hand actions.", materials: "None" },
            { name: "Draw the Number", description: "Teacher shows a number (1-5) and children draw that many circles or dots on paper.", materials: "Paper, crayons" },
            { name: "Number Hunt", description: "Teacher hides number cards (1-5) around the room. Children find them and bring them back in order.", materials: "Number cards" },
            { name: "Count and Clap", description: "Teacher says a number (1-5) and children clap that many times.", materials: "None" },
            { name: "Number Tower", description: "Children stack blocks or cups, counting as they build.", materials: "Blocks or plastic cups" }
          ],
          "Shapes": [
            { name: "Shape Hunt", description: "Teacher shows a shape (circle, square, triangle) and children find objects of that shape in the classroom.", materials: "Shape cards" },
            { name: "Clay Shape Making", description: "Children make basic shapes with clay: roll for circle, press flat for square, make triangle with three sides.", materials: "Clay" },
            { name: "Shape Walk", description: "Teacher draws shapes on the floor with chalk. Children walk around the circle, square, and triangle paths.", materials: "Chalk" },
            { name: "Shape Sorting", description: "Children sort objects by shape into different baskets: round objects, square objects, triangular objects.", materials: "Baskets, various objects" },
            { name: "Draw the Shape", description: "Teacher names a shape and children draw it on paper.", materials: "Paper, crayons" },
            { name: "Shape Song", description: "Sing a shape song with actions: 'I'm a circle, round and round' (make circle with arms).", materials: "None" },
            { name: "Shape Collage", description: "Children cut or tear paper into shapes and glue them to make a shape collage.", materials: "Paper, glue, scissors" },
            { name: "Find the Shape", description: "Teacher shows a shape and children point to objects of that shape in the room.", materials: "Shape cards" },
            { name: "Shape Stamping", description: "Children use shape stamps or cut vegetables to stamp shapes on paper.", materials: "Shape stamps or cut vegetables, paint, paper" },
            { name: "Shape Puzzle", description: "Children match shape cutouts to their outlines on a board.", materials: "Shape puzzle board" }
          ],
          "Big and Small": [
            { name: "Size Sorting", description: "Children sort objects into 'big' and 'small' baskets. Teacher helps identify which is bigger or smaller.", materials: "Two baskets, various sized objects" },
            { name: "Big and Small Steps", description: "Teacher calls out 'Big steps!' or 'Small steps!' Children walk accordingly across the room.", materials: "None" },
            { name: "Clay Size Balls", description: "Children make big and small clay balls. Compare sizes.", materials: "Clay" },
            { name: "Size Drawing", description: "Children draw one big circle and one small circle. Color the big one red, small one blue.", materials: "Paper, crayons" },
            { name: "Big and Small Jump", description: "Children jump high for 'big' and squat low for 'small' when teacher calls out.", materials: "None" },
            { name: "Size Hunt", description: "Teacher asks 'Find something big in the room!' Children point to big objects.", materials: "Classroom objects" },
            { name: "Big and Small Towers", description: "Children build tall towers with big blocks and short towers with small blocks.", materials: "Blocks of different sizes" },
            { name: "Size Matching", description: "Children match big objects with big pictures and small objects with small pictures.", materials: "Picture cards, objects" },
            { name: "Big and Small Song", description: "Sing 'Big and small, big and small, which one is biggest of them all?' with actions.", materials: "None" },
            { name: "Size Collage", description: "Children glue big and small paper shapes to make a size collage.", materials: "Paper shapes, glue" }
          ],
          "More and Less": [
            { name: "More and Less Game", description: "Teacher shows two groups of objects. Children point to which group has more or less.", materials: "Objects (buttons, blocks)" },
            { name: "Count and Compare", description: "Children count objects in two groups and say which has more: '3 buttons, 5 buttons, 5 is more!'", materials: "Objects to count" },
            { name: "More and Less Drawing", description: "Children draw more stars in one box and fewer stars in another box.", materials: "Paper, crayons" },
            { name: "More and Less Walk", description: "Teacher places objects in two lines. Children walk on the line with more objects.", materials: "Objects for lines" },
            { name: "More and Less Song", description: "Sing 'Which has more? Which has less? Let's count and find the best!'", materials: "None" },
            { name: "More and Less Sorting", description: "Children sort pictures into 'more' and 'less' categories based on quantity.", materials: "Picture cards" },
            { name: "More and Less Jump", description: "Children jump more times for 'more' and fewer times for 'less' when teacher calls out.", materials: "None" },
            { name: "More and Less Clay", description: "Children make more clay balls in one group and fewer in another group.", materials: "Clay" },
            { name: "More and Less Hunt", description: "Teacher asks 'Find a group with more buttons!' Children search and point.", materials: "Buttons or small objects" },
            { name: "More and Less Tower", description: "Children build towers with more blocks and fewer blocks, then compare heights.", materials: "Blocks" }
          ],
          "Patterns": [
            { name: "Color Pattern", description: "Teacher creates a simple pattern with colored blocks (red, blue, red, blue). Children continue the pattern.", materials: "Colored blocks" },
            { name: "Sound Pattern", description: "Teacher makes a sound pattern (clap, tap, clap, tap). Children repeat the pattern.", materials: "None" },
            { name: "Movement Pattern", description: "Teacher does a movement pattern (jump, clap, jump, clap). Children copy the pattern.", materials: "None" },
            { name: "Shape Pattern", description: "Teacher arranges shapes in a pattern (circle, square, circle, square). Children continue it.", materials: "Shape cutouts" },
            { name: "Pattern Drawing", description: "Children draw a simple pattern: circle, star, circle, star on paper.", materials: "Paper, crayons" },
            { name: "Pattern Song", description: "Sing a pattern song: 'Red, blue, red, blue, what comes next? You know!'", materials: "None" },
            { name: "Pattern Stamping", description: "Children stamp a pattern using different stamps or objects.", materials: "Stamps, paint, paper" },
            { name: "Pattern Walk", description: "Teacher creates a pattern on the floor with colored paper. Children walk the pattern.", materials: "Colored paper" },
            { name: "Pattern Sorting", description: "Children sort objects into a pattern: big, small, big, small.", materials: "Objects of different sizes" },
            { name: "Pattern Collage", description: "Children glue objects in a pattern on paper.", materials: "Paper, glue, small objects" }
          ],
          "Odd One Out": [
            { name: "Odd One Out with Buttons", description: "Place four buttons in a row - three of one color and one of another. Ask children to point out the one that looks different.", materials: "Buttons of different colors" },
            { name: "Odd One Out Picture Cards", description: "Show children four picture cards - three showing the same object (like cats), and one different (like a dog).", materials: "Picture cards" },
            { name: "Odd One Out Fruit Sorting", description: "Put three apples and one banana in a basket. Ask the children to pick out the fruit that doesn't belong.", materials: "Real or plastic fruits" },
            { name: "Color Pattern Odd One Out", description: "Arrange a row of colored strips or beads in a pattern (e.g., red, red, blue, red). Let children find and name the odd color.", materials: "Colored paper strips or beads" },
            { name: "Shape Odd One Out", description: "Show children four shapes - three circles and one square. Ask them to find the one that's different.", materials: "Paper cutout shapes" },
            { name: "Odd One Out with Clay", description: "Make four clay balls - three of one color and one of a different color. Children find and describe the odd one.", materials: "Colored clay" },
            { name: "Odd One Out Threading", description: "Thread beads onto a string - three red beads and one green. Ask children to spot the one that doesn't match.", materials: "Beads, string" },
            { name: "Odd One Out Sound", description: "Play three similar animal sounds (e.g., meows) and one different (e.g., bark). Children listen and identify the odd one.", materials: "Bluetooth speaker, sound clips" },
            { name: "Odd One Out in a Line", description: "Line up four balls - three large and one small. Ask children to find and describe the different one.", materials: "Plastic balls" },
            { name: "Odd One Out with Sticks", description: "Show three short sticks and one long one. Children point out the odd one and describe the difference.", materials: "Sticks of varying lengths" },
            { name: "Odd One Out Picture Story", description: "Show a sequence of four images - three of birds and one of a fish. Children pick the one that's different.", materials: "Picture cards" },
            { name: "Odd One Out Paper Plate", description: "Attach three buttons and one bead onto a paper plate. Ask children which object is different and why.", materials: "Paper plate, buttons, bead" },
            { name: "Odd One Out Collage", description: "Provide four fabric scraps - three of one color, one of a different color. Children paste them on paper and identify the odd one.", materials: "Fabric scraps, glue, paper" },
            { name: "Odd One Out with Straws", description: "Group four straws - three short, one long. Ask children to spot and describe the odd one.", materials: "Colored straws" },
            { name: "Odd One Out Ball Game", description: "Roll four plastic balls - three large and one small. Children identify the one that's different in size.", materials: "Plastic balls" }
          ],
          "Tall and Short": [
            { name: "Tower Time", description: "Build one tall tower and one short one. Compare their heights together.", materials: "Blocks, bottle caps" },
            { name: "Me & My Plant", description: "Draw one tall plant and one short one. Color and share with the group.", materials: "Paper, crayons" },
            { name: "Spoon Stack", description: "Stack spoons in two piles - one tall, one short - then count and compare.", materials: "Spoons" },
            { name: "Jump for Height", description: "Stretch tall like a giraffe, crouch short like a kitten. Move with music or voice prompts.", materials: "None (or Bluetooth speaker)" },
            { name: "My Height Drawing", description: "Draw long (tall) and short vertical lines, then turn them into creative objects.", materials: "Paper, crayons" },
            { name: "Tall & Short Animals", description: "Sort animals into tall and short groups (e.g., giraffe vs. rabbit).", materials: "Animal flashcards or drawings" },
            { name: "Chalk Line Walk", description: "Walk along long lines for 'tall' and short lines for 'short.'", materials: "Chalk or floor tape" },
            { name: "Clay Towers", description: "Roll and shape clay into one tall and one short tower. Compare.", materials: "Clay" },
            { name: "Block Race", description: "Race to build one tall and one short tower in 2 minutes. Compare results.", materials: "Blocks" },
            { name: "Puppet Parade", description: "March with tall puppets held high and short ones held low.", materials: "Stick puppets" }
          ]
        }
      },
      {
        volume: 2,
        topics: {
          "Counting": [
            { name: "Count the Spoon Drops", description: "Children use a spoon to drop small balls into a cup, counting aloud each time: '1… 2… 3…'", materials: "Spoon, small plastic balls, paper cups" },
            { name: "Finger Count and Clap", description: "Teacher shows a number (e.g., 4), and children hold up that many fingers and clap 4 times.", materials: "Number flashcards" },
            { name: "Clay Dot Counting", description: "Children roll small clay balls and place the correct number on printed number mats (e.g., number 5 mat = 5 clay dots).", materials: "Clay, number mats" },
            { name: "Button Tray Count", description: "Provide trays with small compartments. Children place 1 button in the first, 2 in the second, etc., while counting aloud.", materials: "Plastic trays, buttons" },
            { name: "Count and Color Shapes", description: "Worksheet has shapes (3 triangles, 5 circles). Children count and color the correct number using crayons.", materials: "Worksheet, crayons" },
            { name: "Cloth Peg Counting Line", description: "Hang a string across the board. Children clip the correct number of pegs under each number card (e.g., 6 pegs for number 6).", materials: "String, number cards, cloth pegs" },
            { name: "Vegetable Count Basket", description: "Place real or plastic veggies in a tray. Ask: 'Can you count how many carrots?' Children count and sort.", materials: "Plastic or real vegetables, trays" },
            { name: "Straw Bundle Count", description: "Children make bundles of straws in groups of 2, 3, etc., and count how many straws in total.", materials: "Straws, rubber bands" },
            { name: "Dot Sticker Counting", description: "Children paste a specific number of dot stickers inside number outlines on paper (e.g., 7 dots inside number 7).", materials: "Dot stickers, number sheets" },
            { name: "Hop and Count", description: "Teacher calls out a number. Children hop that many times while counting aloud. Use music to add fun.", materials: "Bluetooth speaker (optional)" },
            { name: "Spoon & Cup Counting Race", description: "Children race to carry and drop a specific number of beads (e.g., 5) into their paper cup using a spoon. Count aloud as they drop.", materials: "Beads, spoons, paper cups" },
            { name: "Thread the Beads – Count Along", description: "Give children string and beads. Ask them to thread a given number (e.g., 4). Count each bead while threading.", materials: "String/thread, beads" },
            { name: "Ball Toss & Count", description: "Children toss soft balls into a bucket. After all throws, they count how many landed inside.", materials: "Soft balls, bucket" },
            { name: "Handprint Count Craft", description: "Children dip hands in paint and make a specific number of prints on paper (e.g., 3 red, 2 green).", materials: "Paint, paper, aprons" },
            { name: "Match the Number to the Dots", description: "Give cards with dot groups (e.g., 5 dots), and number cards (e.g., '5'). Children match them correctly.", materials: "Dot cards, number cards" },
            { name: "Counting with Cloth Buttons", description: "Children glue the correct number of cloth buttons onto a number worksheet (e.g., 6 buttons on number 6).", materials: "Buttons, glue, number worksheets" },
            { name: "Newspaper Ball Count", description: "Children roll small newspaper balls and place a set number into paper cups, counting aloud with each one.", materials: "Newspaper, paper cups" },
            { name: "Paper Dish Counting Wheel", description: "Create a paper plate divided into sections with numbers written inside. Children place the correct number of clay dots in each section.", materials: "Paper plates, marker, clay" },
            { name: "Jump-on-the-Number Mat", description: "Numbered sheets (1–10) are placed on the floor. Teacher calls out a number, and children jump to that number and shout it.", materials: "Number sheets, floor space" },
            { name: "Match & Paste the Veggies Count", description: "Children are given veggie cutouts and must paste the correct number next to each numeral on a chart.", materials: "Vegetable cutouts, glue, number chart" },
            { name: "Clothespin Count Challenge", description: "Teacher provides numbered cards. Children clip the same number of clothespins on each card (e.g., clip 4 pins on '4').", materials: "Number cards, clothespins" },
            { name: "Match Sticks Tally Count", description: "Children place matchsticks (or colored sticks) on number mats, counting as they arrange.", materials: "Ice cream sticks/matchsticks, number mats" },
            { name: "Count the Steps Game", description: "Children walk a number of steps around the classroom (e.g., 5 steps forward, 3 back), counting aloud.", materials: "Floor space, number cards (optional)" },
            { name: "Counting Cup Stack", description: "Children stack paper cups as per given number (e.g., build a tower using 6 cups). After stacking, count aloud.", materials: "Paper cups" },
            { name: "Crayon Count & Draw", description: "Children take out a number of crayons (e.g., 4). They count and then use each crayon to draw 1 object.", materials: "Crayons, paper" },
            { name: "Sticker Number Match", description: "Give students dot stickers and number outlines. Ask them to paste the correct number of dots (e.g., 8 stickers on number 8).", materials: "Dot stickers, number outlines" },
            { name: "Count and Line-Up Game", description: "Lay out number cards on the floor. Children place the matching number of objects next to each (e.g., 7 beads with card '7').", materials: "Number cards, buttons/beads" },
            { name: "Dice Roll & Count", description: "Children roll a foam die and collect that many beads. Repeat for 3–4 rounds to build counting fluency.", materials: "Foam die, beads or buttons" },
            { name: "Clay Count Impressions", description: "Children roll clay into flat rounds and press beads or sticks into them to make a given number of impressions.", materials: "Clay, beads/sticks" },
            { name: "Count & Trace the Number", description: "Children count clay balls or paper shapes, then trace the corresponding numeral using crayons.", materials: "Clay balls or cutouts, number tracing sheet, crayons" },
            { name: "Egg Tray Counting", description: "Use egg cartons with numbers written inside. Children place the correct number of beads or buttons in each section.", materials: "Empty egg cartons, beads/buttons, marker" },
            { name: "Thread & Count Loops", description: "Children thread a specific number of paper rings onto a straw and count them as they go.", materials: "Paper rings, straws" },
            { name: "Match the Number Socks", description: "Paper sock cutouts with numbers are laid out. Children clip the correct number of pegs or stickers onto each.", materials: "Sock cutouts, stickers/pegs" },
            { name: "Count the Clap Sounds", description: "Teacher claps a certain number of times. Children count and repeat the same number of claps. Adds auditory learning.", materials: "None or Bluetooth speaker for rhythm" },
            { name: "Count the Drops (Paint Dotting)", description: "Children use ear buds to make a specific number of paint dots on a vegetable shape or circle outline.", materials: "Ear buds, paint, printed shapes" },
            { name: "Cup Stack & Count Relay", description: "Children are given number cards (e.g., '5') and must stack that many paper cups as a team.", materials: "Number cards, paper cups" },
            { name: "Balloon Pop Count (Paper Version)", description: "Paper balloons have numbers written on them. Children 'pop' each by tapping it and counting out loud.", materials: "Balloon cutouts, number labels" },
            { name: "Crayon Color Count", description: "Children pick a color (e.g., red) and draw that many circles, stars, or shapes as instructed by the teacher.", materials: "Crayons, paper" },
            { name: "Spoon Count Scoop Game", description: "Using a spoon, children scoop lentils or buttons into a numbered cup (e.g., scoop 4 into cup labeled '4').", materials: "Spoon, paper cups with numbers, lentils/buttons" },
            { name: "Count the Beats – Drum & Clap", description: "Using a Bluetooth speaker or toy drum, teacher plays a number of beats. Children count and repeat with claps or taps.", materials: "Bluetooth speaker or toy drum" }
          ],
          "More or Less": [
            { name: "Bead Tray Compare", description: "Place different numbers of beads in two paper cups. Ask: 'Which cup has more? Which has less?' Children point and answer.", materials: "Beads, paper cups, tray" },
            { name: "Button Count Race", description: "Children are given two piles of buttons. They count both and identify which pile has more and which has less.", materials: "Buttons, paper mats" },
            { name: "Spoon Drop Count", description: "Using spoons, children drop beads into two cups. After finishing, they compare which cup has more/less.", materials: "Spoons, beads, paper cups" },
            { name: "Stick Bundle Sorting", description: "Children compare two bundles of sticks and say which one has more and which one has fewer.", materials: "Ice cream sticks or matchsticks" },
            { name: "Count & Clap More or Less", description: "Teacher claps 3 times, then 5 times. Children listen and respond, '3 is less! 5 is more!'", materials: "None (or use Bluetooth speaker for clap sounds)" },
            { name: "Color the Group with More", description: "Children get a worksheet showing two vegetable groups (e.g., 4 carrots vs 7 tomatoes). They color the group that has more.", materials: "Worksheet, crayons" },
            { name: "Clay Dot Comparison", description: "Children create two groups of clay dots and then compare which group has more.", materials: "Clay" },
            { name: "Peg the Number Line", description: "Children place clothespins under two number cards (e.g., 6 and 3). Then they say which has more pins.", materials: "Clothespins, number cards, string" },
            { name: "Vegetable Count Challenge", description: "Using real or toy veggies, children sort into two baskets. Then say: 'Basket A has more. Basket B has less.'", materials: "Toy or paper veggies, two baskets" },
            { name: "Hop and Count Game", description: "Children hop a different number of times each round. Compare who hopped more or less (e.g., 'Aarav hopped 4 times, Riya hopped 6 times!').", materials: "Open floor space, number cards (optional)" },
            { name: "Paper Dish Count and Compare", description: "Children count items (buttons/beads) placed on two paper dishes and decide which dish has more.", materials: "Paper dishes, buttons/beads" },
            { name: "Crayon Pick Challenge", description: "Give children two piles of crayons. Ask: 'Which pile has more? Which one is less?' Let them count and sort.", materials: "Crayons" },
            { name: "Count & Paste – More or Less", description: "Children paste a given number of stickers under two number cards and circle which group is more.", materials: "Stickers, glue, number cards" },
            { name: "Dot Sticker Line-Up", description: "Children place dot stickers on two strips and compare: 'My red line has 4 dots, my blue line has 7 – which has more?'", materials: "Dot stickers, paper strips" },
            { name: "Spoon & Pom-Pom Count", description: "Scoop pom-poms into two cups using spoons. Children then compare and say which has more.", materials: "Pom-poms, paper cups, spoon" },
            { name: "Matchstick Compare Mat", description: "Children place matchsticks in two columns on a worksheet and count to see which side has more.", materials: "Matchsticks, worksheet" },
            { name: "Tray of Caps", description: "Use bottle caps. Fill two trays with different quantities and let children visually compare and respond 'more' or 'less.'", materials: "Bottle caps, small trays" },
            { name: "Rolling Clay Balls", description: "Children roll two sets of clay balls. Teacher asks, 'Which side has more?' Count and compare.", materials: "Clay" },
            { name: "Sticker Chart Compare", description: "Children are given two sticker charts. After filling them in, they count the total and compare.", materials: "Sticker charts, stickers" },
            { name: "Bead String Compare", description: "Children create two strings with different numbers of beads and visually decide which has more.", materials: "Beads, string" }
          ],
          "Numbers Revision (1-12)": [
            { name: "Number Garden Walk", description: "Create a floor trail with number cards 1–12. Children walk along the trail, stepping and saying each number aloud.", materials: "Number flashcards or floor stickers" },
            { name: "Clay Number Gallery", description: "Each child makes one number (1 to 12) using clay and places it in a 'gallery' with the matching number of beads.", materials: "Clay, beads, number cards" },
            { name: "Spoon Count Relay", description: "Children race to place the correct number of spoons in cups placed under number cards (1–12).", materials: "Spoons, paper cups, number cards" },
            { name: "Match the Count Picture Sheet", description: "Worksheet with pictures (e.g., 7 apples, 5 stars). Children count and match to number cards.", materials: "Worksheet, number cards, crayons" },
            { name: "Number Necklace Beading", description: "Children are given a number and string that many beads to form a 'number necklace.'", materials: "Beads, string, number tags" },
            { name: "Rainbow Race Number Trace", description: "Teacher calls out any number 1–12. Children race to find that number on a chart and trace it with rainbow colors.", materials: "Large chart, crayons" },
            { name: "Cup Stack Challenge", description: "Children stack numbered paper cups in correct sequence (1–12).", materials: "Numbered paper cups" },
            { name: "Hopscotch Number Maze", description: "Create a hopscotch grid from 1 to 12. Children hop along while counting forward and backward.", materials: "Floor tape or number cards" },
            { name: "Mystery Bag Number Pick", description: "Children pick a number card from a bag and collect that many straws. Then say the number aloud.", materials: "Number cards, straws, bag" },
            { name: "Paint Drop Count & Write", description: "Children drop the matching number of paint dabs on paper and then write that number below.", materials: "Paint, earbuds, paper" },
            { name: "Sticker Count Strip", description: "Each child receives a number (1–12) and sticks that many dot stickers on a strip.", materials: "Dot stickers, number strip" },
            { name: "Clothespin Clip the Number", description: "Hang number cards on a string. Children clip matching items (buttons, beads) to each card.", materials: "Clothespins, buttons, string, number cards" },
            { name: "Number Match Puzzle", description: "Children match puzzle pieces: one side has a number (e.g., 6), the other has a drawing with that many items.", materials: "Homemade number puzzles" },
            { name: "Group the Beads Activity", description: "Each child receives a number and groups beads into that many sets. (E.g., for 6: 3+3 or 2+2+2)", materials: "Beads, bowls, number tags" },
            { name: "Cloth Patch Number Trace", description: "Children paste small cloth squares over number outlines 1–12 on a revision worksheet.", materials: "Cloth bits, glue, number worksheet" },
            { name: "Bluetooth Beat Count", description: "Play 1 to 12 beats or drum sounds using a Bluetooth speaker. Children count and jump with each beat.", materials: "Bluetooth speaker" },
            { name: "Create a Number Train", description: "Children create a paper 'train' with 12 compartments, each labeled with numbers 1–12. Add stickers or drawings matching the number.", materials: "Paper, glue, crayons, stickers" },
            { name: "Balloon Pop Number Game (Paper)", description: "Paper balloons with numbers 1–12 are stuck on the wall. Children tap the balloon when their number is called.", materials: "Balloon cutouts, wall space" },
            { name: "Vegetable Stamp Counting", description: "Children use vegetable stamps (like ladyfinger) to stamp the correct number of impressions next to the written numbers.", materials: "Paint, vegetable stamp, worksheet" },
            { name: "Spin & Show Number Game", description: "Use a number spinner (1–12). Children spin and then show the number using their fingers or nearby objects.", materials: "DIY number spinner, classroom items" }
          ]
        }
      },
      {
        volume: 3,
        topics: {
          "Number Formation 13 to 20": [
            { name: "Clay Number Tracks (13–20)", description: "Children roll clay into ropes and form numbers 13 to 20 on printed templates with teacher guidance.", materials: "Clay, printed number templates" },
            { name: "Number Dance Beats", description: "Play a counting song (13–20). Children write each number in the air with their fingers as it's sung.", materials: "Bluetooth speaker, music" },
            { name: "Straw Stick Writing", description: "Children form numbers using cut straws on paper. Helps understand number shape and angles.", materials: "Straws, glue, paper" },
            { name: "Button Path Numbers", description: "Students trace over bold numbers (13–20) using colorful buttons.", materials: "Large number printouts, buttons" },
            { name: "Wet Chalk Writing", description: "Chalk dipped in water is used to trace numbers 13 to 20 on black chart. Engaging and easy to clean.", materials: "Chalk, water, black chart paper" },
            { name: "Sponge Dab Numbers", description: "Using small sponge pieces dipped in paint, children dab along dotted numbers.", materials: "Paint, sponge bits, worksheets" },
            { name: "Finger-Tracing in Salt Tray", description: "Fill trays with salt or flour. Children trace 13–20 numbers with fingers.", materials: "Tray, salt/flour" },
            { name: "Ice Cream Stick Forming", description: "Children use popsicle sticks to form numbers like 13, 14, etc. Use guides or teacher demonstrations.", materials: "Ice cream sticks, number cards" },
            { name: "Bead Count & Write", description: "Count and string 13 to 20 beads, then write the number on a board or sheet. Reinforces value + formation.", materials: "Beads, thread, paper" },
            { name: "Air Writing with Music", description: "Play slow counting music (13–20). Children write each number in the air with big arm movements.", materials: "Bluetooth speaker, open space" },
            { name: "Number Cups Tower", description: "Give students paper cups labeled with numbers 13–20. Children stack them in correct order while reading the numbers aloud and tracing them on paper.", materials: "Paper cups, markers, number tracing sheets" },
            { name: "Paper Plate Spin & Trace", description: "A paper plate is divided into 8 sections, each with a number from 13–20. Children spin a straw pointer and trace the number it lands on.", materials: "Paper plate, straw, marker, worksheets" },
            { name: "Number Writing Race", description: "Children are given number cards (13–20). They run to the board and write that number before passing the turn. Encourages peer cheering and fast recall.", materials: "Number cards, board, marker" },
            { name: "Paint with Cotton Swabs", description: "Using ear buds and paint, students dot along large numbers (13–20). Fun and builds control.", materials: "Ear buds, paint, large number templates" },
            { name: "Number Clay Stamps", description: "Teacher prepares cardboard number cutouts (13–20). Students press them into clay to see the number shape. Then try forming it with hands.", materials: "Clay, cardboard stamps" },
            { name: "Rainbow Number Writing", description: "Children trace each number (13–20) using 7 different crayon colors to form a 'rainbow effect.'", materials: "Crayons, number worksheets" },
            { name: "Bead Tray Writing", description: "Children count out beads for each number and then write the number next to it on their worksheet. They see value + writing together.", materials: "Beads, trays, paper, pencil" },
            { name: "Cup Drop Counting & Write", description: "Plastic balls are dropped into 8 cups labeled 13 to 20. Count how many in each cup and write the matching number.", materials: "Cups, plastic balls, number cards" },
            { name: "Number Flag Craft", description: "Each child decorates a mini flag with one number from 13–20 and then traces that number. Flags are strung together for class display.", materials: "Small paper sheets, string, crayons" },
            { name: "Number Song with Big Tracing", description: "Sing a slow song from 13–20. Each child traces the number on a large sheet while singing. Helps reinforce sequence and shape.", materials: "Bluetooth speaker, large tracing sheets" },
            { name: "Number Necklace", description: "Children string 13–20 colored paper beads, each labeled with a number. Then they trace or write that number on a matching sheet.", materials: "Thread, paper beads, number worksheet" },
            { name: "Footprint Number Trail", description: "Create number footprints (13–20) on paper. Children walk along them and trace the matching number on a board/paper.", materials: "Footprint cutouts, paper, marker" },
            { name: "Match & Write Puzzle", description: "Cut number cards in half (top: digits, bottom: number words). Children match pieces (e.g., '13' + 'thirteen') and write the number.", materials: "Number cards, pencils" },
            { name: "Sand Tray Magic Writing", description: "Fill trays with colored sand. Children trace 13–20 with fingers. Teacher can play calm music to set rhythm.", materials: "Sand trays, Bluetooth speaker" },
            { name: "Spoon Numbers Sorting", description: "Label spoons with 13–20 and provide number mats. Children match the spoon to its number mat, then write the number.", materials: "Plastic spoons, paper mats" },
            { name: "Cup Stamping", description: "Dip the rim of a paper cup in paint and stamp on a number outline (13–20). Reinforces curves and number shape.", materials: "Cups, paint, printed numbers" },
            { name: "Number Tunnel Crawl", description: "Children crawl through a 'tunnel' made of boxes labeled 13–20 in order. At each number, they stop and trace it with finger.", materials: "Cardboard boxes, marker" },
            { name: "Paper Dot Trail", description: "Teacher gives worksheets with dotted numbers 13–20. Children join dots using crayons or pencils to form numbers.", materials: "Dotted worksheets, crayons" },
            { name: "Match With Clay Numbers", description: "Provide printed numbers (13–20) and clay. Children form the number using clay and place it on the matching printout.", materials: "Clay, number printouts" },
            { name: "Paintbrush Water Writing", description: "Children dip paintbrushes in water and write numbers 13–20 on chalkboards or black chart paper. Great sensory activity.", materials: "Paintbrushes, water, chalkboard/black paper" },
            { name: "Musical Writing Pass", description: "Children sit in a circle and pass a marker while music plays. When music stops, the child holding the marker runs to the board and writes any number from 13–20.", materials: "Bluetooth speaker, marker, board" },
            { name: "Number Sticker Tracing", description: "Provide outline worksheets for numbers 13–20. Children decorate the number using small circle stickers, then trace it.", materials: "Dot stickers, tracing sheets" },
            { name: "Hanging Clothespin Numbers", description: "Hang strings across the class. Children clip paper numbers (13–20) in the correct order and then trace that number on their paper.", materials: "String, clips, number cards" },
            { name: "Leaf Numbers Art", description: "Children collect 13–20 dried leaves, paste them on paper, and write the matching number below. Builds number sense + writing.", materials: "Dried leaves, glue, paper" },
            { name: "Pom-Pom Counting & Write", description: "Children count 13–20 pom-poms into cups and then trace or write the number they counted.", materials: "Pom-poms, cups, number sheet" },
            { name: "Match and Write Ball Toss", description: "Numbers 13–20 are stuck on a wall. Child tosses a soft ball at a number, says it aloud, and writes it on their paper.", materials: "Ball, number cards, paper" },
            { name: "Crayon Roll & Write", description: "Each crayon is labeled 13–20. Children roll a crayon, say the number out loud, and trace it three times.", materials: "Crayons, labels, worksheets" },
            { name: "Pipe Cleaner Numbers", description: "Students bend pipe cleaners to form numbers from 13 to 20, then practice writing them after building.", materials: "Pipe cleaners, number guide cards" },
            { name: "Magic Number Reveal", description: "Teacher writes numbers 13–20 using white crayon. Children paint over with watercolor to 'reveal' the number and trace it.", materials: "White crayons, watercolors, paper" },
            { name: "Number Hand Trace Match", description: "Children trace their hand, then glue 13–20 small objects (like paper balls) on fingers and write the matching number inside the palm.", materials: "Paper, glue, scrap paper, pencil" },
            { name: "Dot-to-Dot Number Lines", description: "Provide worksheets where children connect dots to complete numbers 13–20 and then trace the final shape.", materials: "Dot-to-dot sheets, pencil" },
            { name: "Number Pebble Trace", description: "Children pick pebbles labeled 13–20, place them on matching outlines on paper, and trace the number underneath.", materials: "Pebbles, number outlines" },
            { name: "Paint Blow Numbers", description: "Drop paint blobs on number outlines. Children use straws to blow paint gently along the number's path. Encourages motor control.", materials: "Paint, straws, number printouts" },
            { name: "Sandpaper Number Feeling", description: "Pre-cut sandpaper numbers (13–20) are glued to cards. Children trace them with fingers before writing on their own.", materials: "Sandpaper, glue, cardboard" },
            { name: "Balloon Pop and Write", description: "Slip number cards (13–20) into balloons. Pop a balloon, reveal the number, and write it on the board. Exciting group activity!", materials: "Balloons, number slips, board" },
            { name: "Match and Trace Cloth Match", description: "Teacher displays 13–20 cloth pieces, each with a number. Children match to cards and trace on their worksheet.", materials: "Old cloth bits, number cards" },
            { name: "Number Flag Race", description: "Children pick a flag with a number between 13–20, run to the board, and write the number before the next person's turn.", materials: "Paper flags, markers" },
            { name: "Puzzle Me a Number", description: "Number cards (13–20) are cut into 2–3 puzzle pieces. Children solve, say the number, and then trace it on a worksheet.", materials: "Cut-out number puzzles" },
            { name: "Spoon-Paint Numbers", description: "Children dip the back of a spoon in paint and drag it along large number outlines (13–20) to practice formation with flow.", materials: "Spoon, paint, outline sheets" },
            { name: "Shape Inside the Number", description: "Children draw tiny shapes (stars, hearts, circles) inside each number from 13–20, reinforcing control and creativity.", materials: "Crayons, number worksheets" }
          ],
          "Number Revision Activities (1–20)": [
            { name: "Number Race Mat", description: "Spread number mats (1–20) across the room. Teacher calls out a number, and students race to stand on the correct one.", materials: "Number mats/cards" },
            { name: "Bead Count & Write", description: "Children pick a number card (1–20), count and string that many beads, and then write the number.", materials: "Beads, number cards, thread" },
            { name: "Jump & Shout", description: "Play music. When paused, show a number. Children jump and shout that number and do the same number of jumps.", materials: "Number cards, Bluetooth speaker" },
            { name: "Color by Number Sheet", description: "Provide a coloring sheet with small sections labeled 1–20. Children color using a color code (e.g., 1 = red, 2 = blue).", materials: "Coloring sheets, crayons" },
            { name: "Clay Count Garden", description: "Children make flowers using clay and place the correct number of petals according to a number card. Then write the number.", materials: "Clay, number cards, paper" },
            { name: "Cup Tower Count", description: "Children stack paper cups labeled 1 to 20 in correct order. Then write numbers in reverse below it.", materials: "Paper cups, marker, paper" },
            { name: "Straw Bundle Game", description: "Provide number cards and cut straws. Children make bundles matching the number and write it below.", materials: "Straws, rubber bands, paper" },
            { name: "Spoon Sorting Numbers", description: "Plastic spoons labeled with numbers are placed in sand or rice. Children pick and sort them into cups in order.", materials: "Plastic spoons, cups, sand" },
            { name: "Number Train Puzzle", description: "Children connect number cards 1–20 in order to build a long 'number train' on the floor.", materials: "Number cards" },
            { name: "Clothespin Clip It", description: "Children clip clothespins labeled with numbers onto a hanger in the correct order from 1 to 20.", materials: "Clothespins, hanger, number labels" },
            { name: "Hopscotch Numbers", description: "Create a hopscotch grid with numbers 1–20. Children hop and say the number they land on.", materials: "Chalk/tape, open space" },
            { name: "Water Brush Tracing", description: "Children dip brushes in water and trace numbers 1–20 on black paper or a chalkboard.", materials: "Paintbrushes, water, black chart" },
            { name: "Clay Ball Matching", description: "Children count and place clay balls (1–20) into paper bowls and write the number next to it.", materials: "Clay, paper bowls, pencil" },
            { name: "Rolling Dice Write", description: "Children roll two dice, count total (up to 20), and write the number on their worksheet.", materials: "Dice, worksheet" },
            { name: "Rainbow Loop Writing", description: "Children trace numbers 1–20 with colored pencils, making a rainbow pattern.", materials: "Worksheets, colored pencils" },
            { name: "Finger Trace Sand Tray", description: "Students trace numbers from memory in a sand tray as the teacher calls out each one.", materials: "Tray, sand" },
            { name: "Number Card Fishing", description: "Children use a magnet or paperclip to 'fish' for paper fish labeled 1–20. Say the number and write it.", materials: "Numbered fish cutouts, stick, magnet" },
            { name: "Number Song Follow-Along", description: "Sing a number song (1–20) while children point to each number on their worksheet or mat.", materials: "Number mat, Bluetooth speaker" },
            { name: "Build-a-Tower Challenge", description: "Using blocks labeled with numbers, children build towers in order from 1–20.", materials: "Numbered blocks, open space" },
            { name: "Paint Dot Trail (1–20)", description: "Children use cotton buds to make paint dots tracing numbers 1–20 in order.", materials: "Paint, cotton swabs, number sheet" }
          ],
          "Introduction to Shapes": [
            { name: "Shape Hunt Around Us", description: "Take students around the classroom or corridor to find real objects shaped like circles, squares, triangles, and rectangles. Each child points and names the shape aloud.", materials: "Everyday classroom objects" },
            { name: "Clay Shape Tray", description: "Children roll clay and form basic shapes (circle, square, triangle, rectangle) on trays. The teacher calls out a shape and students try forming it.", materials: "Clay, plastic trays" },
            { name: "Button Shape Sorting", description: "Teacher gives shape outlines on paper and buttons of various sizes. Children sort and place buttons inside matching shape outlines.", materials: "Paper, buttons, marker" },
            { name: "Straw Shape Making", description: "Cut straws are used to form straight-edged shapes like square, triangle, and rectangle. Circle is made using pipe cleaner or string.", materials: "Straws, glue, string" },
            { name: "Shape Music Freeze", description: "Play a song. When music stops, show a shape card. Children must draw the shape in the air or find that shape from their mat.", materials: "Shape flashcards, Bluetooth speaker" },
            { name: "Shape Plate Craft", description: "Give each child a paper plate. They paste shape cutouts on it and say aloud what shapes they have.", materials: "Paper plates, colored shape cutouts, glue" },
            { name: "Walking the Shape Path", description: "Tape shapes (circle, square, triangle, etc.) on the floor. Children walk slowly on the borders while naming the shape.", materials: "Masking tape, open space" },
            { name: "Shape Stamp Painting", description: "Children use sponge stamps in different shapes (or cut vegetables like ladyfinger or potato into shapes) and stamp them on paper.", materials: "Sponge or vegetable shapes, paint, paper" },
            { name: "Paper Cup Shape Stack", description: "Cups labeled with shapes are stacked to match posters (e.g., triangle on triangle). Children say shape name before stacking.", materials: "Paper cups, shape posters" },
            { name: "Shape Song & Movement", description: "Teacher plays a 'Shapes Song' where students make shapes using hands or bodies (arms for triangle, circle, etc.).", materials: "Bluetooth speaker" },
            { name: "Shape Match Puzzle", description: "Children receive a puzzle board with empty shape slots and must match the correct shape pieces into each one. Teacher helps identify shapes while matching.", materials: "Cardboard shape puzzle" },
            { name: "Shape Bead Bracelet", description: "Children string beads in the shape of circles, squares, etc., in a specific pattern to form a bracelet while naming each shape aloud.", materials: "Shape beads (or color-coded for shape), thread" },
            { name: "Shape Bingo", description: "Teacher calls out shapes and children mark the matching shapes on their bingo cards. First child to complete a row wins.", materials: "Bingo cards with shapes, markers" },
            { name: "Shape Garden with Clay", description: "Students make flowers using different shapes (circle flower, triangle leaf, etc.) and paste them on a sheet.", materials: "Clay, paper, glue" },
            { name: "Ice Cream Stick Shape Cards", description: "Children use colored popsicle sticks to create triangles, squares, rectangles. Teacher can guide them by shape flashcards.", materials: "Popsicle sticks, flashcards" },
            { name: "Trace the Shape Path", description: "Children trace over dotted lines forming shapes (circle to star) using crayons or colored pencils. Helps with formation practice.", materials: "Shape worksheets, crayons" },
            { name: "Shape Fishing Game", description: "Shapes with paper clips are placed in a box. Children use a magnetic fishing rod to catch a shape and name it.", materials: "Shape cutouts, paper clips, stick with magnet" },
            { name: "Shape Face Activity", description: "Children make a face using basic shapes: circle for head, triangle nose, rectangle mouth, etc. Encourages creativity and recognition.", materials: "Pre-cut shapes, glue, paper" },
            { name: "Spoon Shape Sort", description: "Each spoon has a shape sticker. Children place the spoon into the matching shape cup (circle spoon in circle cup, etc.).", materials: "Plastic spoons, shape stickers, cups" },
            { name: "Shape Hop Game", description: "Shapes are taped onto the floor. Teacher calls out a shape and children jump onto it. Builds gross motor coordination and shape recall.", materials: "Floor tape shapes, open space" },
            { name: "Clay Shape Stamp Press", description: "Prepare cardboard shape cutouts (circle, triangle, square, etc.). Children press these onto soft clay to make stamped shapes. After stamping, they can try making the shape with their fingers. Helps in shape recognition + hand strength.", materials: "Clay, cardboard shape cutouts" },
            { name: "Rolling Shape Match Cups", description: "On each paper cup, draw or paste a different shape. Children roll a dice and based on number, pick a cup and match the shape to one on their worksheet by coloring or drawing it.", materials: "Paper cups, dice, shape worksheet" },
            { name: "Shape Umbrella Craft", description: "Children paste triangle and semicircle shapes to build an umbrella. Teacher shows a model and helps the child name the shapes as they paste.", materials: "Triangle/semicircle cutouts, glue, base paper" },
            { name: "Shape Trace with Beads", description: "Teachers prepare large shape outlines on card paper. Children trace along the borders with beads or buttons, building coordination and shape memory.", materials: "Buttons or beads, glue, card paper with shapes" },
            { name: "Shape Crown Making", description: "Each child gets a strip of paper to turn into a crown. They paste pre-cut shapes on it and say the shape name before gluing. Can be worn during rhyme time or parade.", materials: "Strip paper, pre-cut shapes, glue, tape" },
            { name: "Shape Ring Toss", description: "Use paper rings labeled with shapes. Children toss them onto cones or cups with matching shapes. Every correct toss is followed by tracing the same shape on paper.", materials: "Paper rings, cones/cups, shape tracing sheet" },
            { name: "Shape Threading Cards", description: "Shape outlines are punched with small holes along the edge. Children thread yarn through the holes to 'sew' the shape outline. Excellent for hand control.", materials: "Cardboard shape cards, thread, punch" },
            { name: "Shape Color Pour", description: "Using thick shape outlines on newspaper, children drip paint of different colors into each shape using spoons. They say the shape name before coloring.", materials: "Spoons, paints, newspaper, shape outlines" },
            { name: "Shape Plate Clock", description: "On a paper plate, draw 12 shapes instead of numbers (e.g., triangle at 1 o'clock, circle at 2 o'clock). Children spin a straw in the center and identify the shape it points to.", materials: "Paper plate, straw, shape drawings" },
            { name: "Match the Shape Path Game", description: "Teacher lays down yarn on the floor in the form of a big square, circle, and triangle. Children walk along the path and then draw the shape they walked on paper. Builds body memory of shape structure.", materials: "Yarn/string, open floor, worksheet" }
          ]
        }
      }
    ],
    evs: [
      {
        volume: 1,
        topics: {
          "My School": [
            { name: "School Walk & Talk", description: "Teacher-guided tour around the school (classroom, washroom, garden). Children name each place.", materials: "None" },
            { name: "My School Drawing", description: "Children draw their school building. Teacher helps with prompts like 'Where is the flag?'", materials: "A4 sheet, crayons" },
            { name: "School Collage", description: "Children stick paper pieces, straws (windows), and buttons to create a school collage.", materials: "Scrap paper, glue, buttons, straws" },
            { name: "Clay School Model", description: "With help, children form a simple school building using clay.", materials: "Clay" },
            { name: "School Bus Craft", description: "Children decorate a paper plate as a school bus using colors and buttons.", materials: "Paper plate, buttons, crayons" },
            { name: "Match the Places", description: "Teacher shows cards: garden, class, office. Children match with real places visited earlier.", materials: "Flashcards" },
            { name: "Sorting Game - School vs Home", description: "Children sort items (bag, spoon, pencil) into 'school' or 'home.'", materials: "Printed images" },
            { name: "Flag Hoisting Roleplay", description: "Teacher demonstrates flag hoisting, and children mimic saluting the flag.", materials: "Small flag" },
            { name: "Find & Point Game", description: "Teacher says 'Find the blackboard!' and children point to it.", materials: "Classroom surroundings" },
            { name: "My School Bag Hunt", description: "Children open their bags and show one item. Teacher names it and praises sharing.", materials: "Child's school bag" }
          ],
          "My Teacher": [
            { name: "Dress Like Teacher", description: "Children wear a dupatta or glasses and pretend to be the teacher.", materials: "Fabric pieces, toy glasses" },
            { name: "My Teacher's Voice", description: "Teacher says typical phrases ('Sit down, please') and children guess who says it.", materials: "Teacher's voice" },
            { name: "Thank You Card", description: "Children make a simple card using handprints. Teacher helps them write 'Thank You.'", materials: "Paper, paint, crayons" },
            { name: "Teacher Finger Puppet", description: "Children decorate a finger puppet as 'teacher' with teacher's help.", materials: "Paper, markers" },
            { name: "Follow the Teacher", description: "Teacher does actions (clap, wave), children copy.", materials: "None" },
            { name: "What Does Teacher Use?", description: "Match items (chalk, duster, book) to the teacher. Teacher explains each use.", materials: "Real or picture objects" },
            { name: "Roleplay - Be the Teacher", description: "Children pretend to teach, say 'Good Morning,' show a book.", materials: "Book, pointer (optional)" },
            { name: "Clay Face of Teacher", description: "Children mold smiling faces using clay. Teacher helps identify features.", materials: "Clay" },
            { name: "Sing for My Teacher", description: "Teacher teaches a simple rhyme like 'My teacher is kind to me...'", materials: "None" },
            { name: "Picture Talk - My Teacher", description: "Show a big poster of a teacher. Ask: 'What is she holding?' 'Where is she?'", materials: "Picture/poster" }
          ],
          "My Family": [
            { name: "Family Tree Craft", description: "Create simple family tree with photos or drawings of family members.", materials: "Paper, photos, glue, crayons" },
            { name: "Family Role Play", description: "Children pretend to be different family members (mom, dad, sibling).", materials: "Props (hats, scarves)" },
            { name: "Family Photo Show", description: "Children bring family photos and talk about their family members.", materials: "Family photos" },
            { name: "Family Counting", description: "Count family members: 'How many people in your family?'", materials: "None" },
            { name: "Family Drawing", description: "Draw picture of family doing something together.", materials: "Paper, crayons" },
            { name: "Family Song", description: "Sing 'My family loves me' with actions for each family member.", materials: "None" },
            { name: "Family Sorting", description: "Sort pictures of family activities (cooking, playing, reading).", materials: "Picture cards" },
            { name: "Family Collage", description: "Create collage showing different family activities.", materials: "Magazine cutouts, glue, paper" },
            { name: "Family Story Time", description: "Read stories about families and discuss.", materials: "Family story books" },
            { name: "Family Puppet Show", description: "Use puppets to act out family scenarios.", materials: "Puppets" }
          ],
          "My Body": [
            { name: "Body Part Touch", description: "Teacher calls out body parts, children touch them (touch your nose, ears).", materials: "None" },
            { name: "Body Drawing", description: "Draw outline of body and label body parts.", materials: "Large paper, crayons" },
            { name: "Body Movement", description: "Move different body parts (wave hands, stomp feet, nod head).", materials: "None" },
            { name: "Body Song", description: "Sing 'Head, shoulders, knees and toes' with actions.", materials: "None" },
            { name: "Body Puzzle", description: "Match body part pictures to complete a person.", materials: "Body puzzle pieces" },
            { name: "Body Collage", description: "Create collage of body parts from magazines.", materials: "Magazine cutouts, glue, paper" },
            { name: "Body Tracing", description: "Trace child's body outline on large paper.", materials: "Large paper, crayons" },
            { name: "Body Matching", description: "Match body part names with pictures.", materials: "Body part cards" },
            { name: "Body Movement Game", description: "Follow commands to move body parts (jump, hop, spin).", materials: "None" },
            { name: "Body Story", description: "Read story about body and discuss how we use different parts.", materials: "Body story book" }
          ],
          "My Home": [
            { name: "Home Tour", description: "Children describe different rooms in their home.", materials: "None" },
            { name: "Home Drawing", description: "Draw picture of their home with different rooms.", materials: "Paper, crayons" },
            { name: "Room Sorting", description: "Sort objects by which room they belong in (kitchen, bedroom, bathroom).", materials: "Object cards, room labels" },
            { name: "Home Collage", description: "Create collage of home items and furniture.", materials: "Magazine cutouts, glue, paper" },
            { name: "Home Building", description: "Build simple house using blocks or cardboard boxes.", materials: "Blocks, cardboard" },
            { name: "Home Song", description: "Sing song about home and family.", materials: "None" },
            { name: "Home Puzzle", description: "Complete puzzle of a house with different rooms.", materials: "House puzzle" },
            { name: "Home Story", description: "Read story about homes and discuss.", materials: "Home story book" },
            { name: "Home Role Play", description: "Pretend to do activities in different rooms of home.", materials: "Props (pots, books, towels)" },
            { name: "Home Matching", description: "Match furniture with correct room.", materials: "Furniture cards, room cards" }
          ]
        }
      },
      {
        volume: 2,
        topics: {
          "Wild Animals": [
            { name: "Wild Animal Mask Craft", description: "Children color and decorate pre-cut animal mask shapes (lion, elephant, etc.) using buttons and paper bits. The teacher helps tie the masks for brief display.", materials: "Paper mask cutouts, buttons, glue, string, crayons" },
            { name: "Jungle Footprint Match", description: "Footprint cutouts of wild animals are placed around. Children match each to the correct animal picture.", materials: "Paper footprints, animal picture cards" },
            { name: "Animal Sound Dance", description: "Play animal sounds. Children dance to a lion roar, freeze at an elephant sound, and jump at a monkey sound.", materials: "Bluetooth speaker" },
            { name: "Wild Animal Sticker Sheet", description: "Children paste animal stickers into a jungle scene worksheet and name each animal.", materials: "Jungle worksheet, animal stickers" },
            { name: "Clay Wild Animals", description: "Children use clay to form simple animal shapes like lion faces, elephant trunks, or snakes.", materials: "Clay" },
            { name: "Animal Button Sorting", description: "Buttons are sorted into trays labeled with animal pictures, helping children with recognition and fine motor skills.", materials: "Buttons, small labeled trays" },
            { name: "Animal Sound Match Cards", description: "Teacher plays animal sounds. Children hold up matching animal picture cards.", materials: "Bluetooth speaker, animal cards" },
            { name: "Jungle Leaves & Animal Trace", description: "Children paste green leaves and trace wild animal outlines on the same worksheet.", materials: "Paper leaves, glue, crayons, worksheet" },
            { name: "Count the Wild Ones", description: "A worksheet shows different numbers of wild animals. Children count and write the correct number beside each.", materials: "Worksheet, crayons" },
            { name: "Animal Hide-and-Seek Chart", description: "A jungle scene chart has animals hidden under flaps. Children lift them to find and name the animals.", materials: "Jungle scene chart, paper flaps" },
            { name: "Dot the Jungle Animal", description: "Children use earbuds dipped in paint to make dotted outlines of animals like tigers or giraffes.", materials: "Paint, earbuds, animal outline sheet" },
            { name: "Wild Animal Number Trail", description: "Jungle animals numbered 1 to 10 are laid out. Children walk along the trail, counting and naming animals.", materials: "Animal cutouts, number tags" },
            { name: "Tail Matching Game", description: "Children match animal tails to the correct wild animal pictures like lion, zebra, elephant.", materials: "Paper tail cards, animal cards" },
            { name: "Straw Mane Lion", description: "Children glue paper straws around a lion face to form its mane.", materials: "Lion face cutout, paper straws, glue" },
            { name: "Jungle Sound Walk", description: "Jungle sounds are played. Children close their eyes and try to guess the animal based on the sound.", materials: "Bluetooth speaker" },
            { name: "Wild Animal Coloring Race", description: "Teacher calls out an animal. Children find and color it on a jungle worksheet.", materials: "Jungle animal worksheet, crayons" },
            { name: "Button-Eye Animal Faces", description: "Children stick buttons as eyes on printed wild animal face sheets.", materials: "Buttons, glue, animal face printouts" },
            { name: "Vegetable Stamp Animals", description: "Using okra or potato pieces dipped in paint, children stamp simple animal body shapes.", materials: "Cut vegetable stamps, paint, paper" },
            { name: "Animal Shape Clay Tray", description: "Children fill animal outlines with clay, helping them shape and recognize animals.", materials: "Clay, animal outline tray" },
            { name: "Paper Cup Tiger", description: "Children turn upside-down paper cups into tiger faces using stripes, eyes, and ears.", materials: "Paper cups, paper cutouts, glue, crayons" },
            { name: "Animal Button Tracks", description: "Children trace wild animal tracks using buttons, like tiger paws or elephant feet.", materials: "Footprint outlines, buttons, glue" },
            { name: "Roar and Count", description: "Teacher plays lion roars. Children count the roars and place that many lions on the board.", materials: "Bluetooth speaker, lion cutouts" },
            { name: "Wild Animal Puzzle Match", description: "Children match two-piece puzzles — animal heads and bodies — to form whole animals.", materials: "DIY wild animal puzzles" },
            { name: "Spoon and Bead Animal Sort", description: "Using spoons, children transfer beads into bowls labeled with different wild animals.", materials: "Beads, spoons, labeled bowls" },
            { name: "Zebra Stripe Painting", description: "Children paint black stripes on zebras using earbuds dipped in paint.", materials: "Zebra outline, earbuds, black paint" },
            { name: "Elephant Trunk Craft", description: "Children create elephant trunks using rolled paper or straws and attach them to face cutouts.", materials: "Paper/straws, glue, elephant face printout" },
            { name: "Wild Animal Count & Match", description: "Children count animals in a jungle picture and match them with number cards 1 to 10.", materials: "Jungle picture sheet, number cards" },
            { name: "Animal Button Graph", description: "Children use buttons to create bar charts showing how many lions, elephants, or tigers are present.", materials: "Buttons, chart sheet" },
            { name: "Jungle Music Parade", description: "Children march to drum beats while holding wild animal cutouts.", materials: "Bluetooth speaker, animal masks or cutouts" },
            { name: "Animal Sound Clap Game", description: "Teacher names animals. Children clap once for quiet animals (like deer), twice for loud ones (like lions).", materials: "Animal cards, open space" },
            { name: "Snake Spiral Craft", description: "Children color a spiral snake and add eyes. They twirl it gently to see it move.", materials: "Spiral-cut paper, crayons, googly eyes or dots" },
            { name: "Wild Animal Paper Puzzle Trail", description: "Jungle path is created using animal head and body halves. Children match them to complete the trail.", materials: "Jungle path chart, animal halves" },
            { name: "Elephant Ear Button Sort", description: "Children paste buttons inside large elephant ear outlines to complete the look.", materials: "Paper elephant ears, glue, buttons" },
            { name: "Straw Jungle Fence Craft", description: "Children paste paper straws vertically to form a jungle fence, then stick animals inside it.", materials: "Straws, glue, paper, animal pictures" },
            { name: "Crayon Rubbing Animal Shapes", description: "Children rub crayons over stencils placed under paper to reveal hidden animal shapes.", materials: "Animal stencils, paper, crayons" },
            { name: "Tiger Stride Count Game", description: "Children walk like tigers while the teacher counts. They draw one stripe for each stride taken.", materials: "Open space, crayons, stripe drawing sheet" },
            { name: "Wild Animal Shadow Match", description: "Children match animals to their shadow outlines.", materials: "Shadow cards and matching animal cards" },
            { name: "Animal Thread Patterning", description: "Children thread yarn through holes around animal shapes, like lion manes or tiger outlines.", materials: "Paper animal cards with holes, thread" },
            { name: "Paper Dish Animal Face", description: "Children turn paper plates into jungle animal faces using paper shapes and colors.", materials: "Paper plates, colored paper, glue, crayons" },
            { name: "Animal Sound Flash Freeze", description: "Teacher plays animal sounds. Children freeze for wild animal sounds and sit down for others.", materials: "Bluetooth speaker, sound files, space" },
            { name: "Jungle Animal Matching Wheel", description: "A spin wheel with animal pictures and names/sounds helps children match and identify.", materials: "Paper wheel, pictures, arrow pin" },
            { name: "Jungle Stamp & Count Book", description: "Children use stamps or fingertips to create animals in a mini-booklet and count them aloud.", materials: "Stamp pads or paint, paper booklets" },
            { name: "Button Mane Lion Puzzle", description: "Children complete a lion face by pasting buttons around the head as its mane.", materials: "Lion face sheet, glue, buttons" },
            { name: "Wild Animal Train Craft", description: "Children create a train where each coach holds a wild animal, arranged by size or sound.", materials: "Animal cutouts, paper, glue, crayons" },
            { name: "Straw Count Giraffe", description: "Children glue straws as giraffe legs and count them, then trace the number.", materials: "Giraffe sheet, straws, glue" },
            { name: "Wild Animal Role Chant", description: "Teacher chants 'Who roars loud?' Children respond 'Lion!' and mimic the sound. Continues for others.", materials: "Bluetooth speaker (optional), chant sheet" },
            { name: "Animal-Leaf Match", description: "Children match animals to leaves they might live near, like elephants with big jungle leaves.", materials: "Paper leaves, animal pictures" },
            { name: "Pattern the Stripes", description: "Children create AB or ABC patterns with stripes on zebra or tiger outlines.", materials: "Zebra/tiger outlines, paper strips, glue" },
            { name: "Build-a-Jungle Poster", description: "As a class, children add animals to a big jungle poster made with green paper and figures.", materials: "Chart paper, animal pictures, crayons" },
            { name: "Goodbye Jungle Song", description: "Children sing a fun goodbye song with jungle animal sounds and clapping to end the topic.", materials: "Bluetooth speaker, teacher-led chant, open space" }
          ],
          "Pet Animals": [
            { name: "Pet Animal Flash Talk", description: "Teacher shows pet animal flashcards (dog, cat, bird) and children name them aloud.", materials: "Flashcards" },
            { name: "Pet Sound Game", description: "Play animal sounds. Children guess: 'Is it a dog barking? A cat meowing?'", materials: "Bluetooth speaker" },
            { name: "Colour My Pet", description: "Children color pet animals like dogs, fish, and rabbits.", materials: "Coloring sheets, crayons" },
            { name: "Feed the Pet Craft", description: "Children 'feed' the correct food to each pet (bones for dogs, seeds for birds).", materials: "Paper bowls, stickers or paper food cutouts" },
            { name: "Pet Home Match", description: "Children match pets to their homes — dog to kennel, fish to bowl.", materials: "Pictures of kennels, cages, bowls" },
            { name: "Pet Puppet Talk", description: "Children make simple puppets of cats, dogs or birds and say 'Hi, I'm a pet dog!'", materials: "Paper bags, craft materials" },
            { name: "Tail or No Tail", description: "Children point out if the animal has a tail or not. 'Does the rabbit have a tail?'", materials: "Pet pictures" },
            { name: "Pet Walk Parade", description: "Children walk around with a soft toy pet while the teacher plays music.", materials: "Stuffed animal toys or cutouts" },
            { name: "Pet Petting Game", description: "Children gently pet soft animal toys and say how it feels – 'soft,' 'fluffy,' etc.", materials: "Soft toy animals" },
            { name: "Pet Colour Sorting", description: "Children sort animals by color — all white pets together, all brown pets together.", materials: "Toy animals or picture cutouts" },
            { name: "Pet Care Talk", description: "Teacher shows caring actions for pets and asks, 'How do we care for a dog?'", materials: "Pictures of brushing, feeding" },
            { name: "Match the Pet Pairs", description: "Children flip and match two of the same pet — 'It's a cat and another cat!'", materials: "Cards with pet pairs" },
            { name: "Pet Sound & Move", description: "Play pet sounds and let children move like that animal: crawl like a cat, hop like a bunny.", materials: "Bluetooth speaker" },
            { name: "Collar & Leash Craft", description: "Children make pretend pet collars with paper, writing their pet's name on it.", materials: "Paper strips, glue" },
            { name: "Find the Pet", description: "Children hunt around the room for hidden pet pictures.", materials: "Pet cutouts hidden in room" },
            { name: "Musical Pets", description: "Children sit in a circle, pass a pet toy. When music stops, whoever holds the toy names the pet.", materials: "Bluetooth speaker, pet toys" },
            { name: "Where's the Bone?", description: "Teacher hides a paper bone, children search for it and say, 'I found the dog's bone!'", materials: "Paper bone, dog cutout" },
            { name: "Pet Puzzle Time", description: "Children solve simple 2–4 piece puzzles of pet animals.", materials: "Pet puzzles" },
            { name: "Pet Dress-Up", description: "Children decorate pet pictures with hats or bows and say, 'My pet is wearing a hat!'", materials: "Paper hats, glasses, bows" },
            { name: "Pet Shape Match", description: "Match pets to shapes they're built from.", materials: "Shape animals — circle cat, square dog" },
            { name: "My Pet Drawing", description: "Children draw their own pet or a pet they wish to have.", materials: "A4 sheets, crayons" },
            { name: "Feed the Fish Game", description: "Children place dot stickers as fish food in the bowl while counting out loud.", materials: "Fish bowl printouts, dot stickers" },
            { name: "Pet Counting Line", description: "Line up 1 to 5 pets in order. Count and say, 'One cat, two cats…'", materials: "Number cards, pet cutouts" },
            { name: "Bird Feather Craft", description: "Children decorate a bird outline with colorful paper feathers.", materials: "Glue, colored paper feathers" },
            { name: "Doggy Paw Stamp", description: "Children dip hands in paint and stamp paw shapes like a dog walking.", materials: "Sponge, paint" },
            { name: "Pet Balloon Toss", description: "Children toss balloon to each other, saying a pet name when they catch it.", materials: "Balloon with pet face drawn" },
            { name: "Pet vs Wild Sorting", description: "Children sort which animals are pets and which are wild.", materials: "Mixed animal pictures" },
            { name: "Doggy Bone Counting", description: "Count and place the right number of bones into dog bowls.", materials: "Bone cutouts, bowls" },
            { name: "Guess My Pet", description: "Teacher gives clues: 'This pet has a tail and says meow.' Children guess: 'Cat!'", materials: "Teacher prompts" },
            { name: "Hop to the Pet", description: "Teacher calls out 'Hop to the rabbit!' and children hop over to the rabbit cutout.", materials: "Floor markers" },
            { name: "Pet Story Time", description: "Teacher tells a short story about a lost puppy or a helpful cat.", materials: "Pet book or big picture story" },
            { name: "Pet Hat Parade", description: "Children wear dog or cat ear hats and walk in a fun pet parade.", materials: "Paper hats with ears drawn" },
            { name: "Pet Bath Fun", description: "Children pretend to wash toy pets with soft cloths.", materials: "Toy animals, water basin" },
            { name: "Pet Bed Sorting", description: "Match toy animals to correct paper beds (cat to small bed, dog to big one).", materials: "Paper pet beds, toy animals" },
            { name: "Pet Bingo", description: "Teacher calls 'Dog!' and children cover that animal on their bingo sheets.", materials: "Bingo sheets with animal pictures" },
            { name: "Pet Mask Play", description: "Children wear masks and act out pet actions — barking, purring, wagging tails.", materials: "Pet animal face masks" },
            { name: "Fish Bowl Sticker Play", description: "Stick fish inside the bowl and count them: 'How many fish are swimming?'", materials: "Fish bowl printout, fish stickers" },
            { name: "Pet Dance", description: "Teacher plays music. Children dance like bouncing dogs, gliding cats, hopping bunnies.", materials: "Bluetooth speaker" },
            { name: "Pet Shadow Match", description: "Match pet to its shadow — dog with dog shape, fish with fish shadow.", materials: "Shadow outline cards" },
            { name: "Pet Tails and Ears Craft", description: "Children wear pet ears and tails made from paper and pretend to be that pet.", materials: "Headbands, paper tails" },
            { name: "Yarn Cat Craft", description: "Wrap yarn around a cat outline like it's playing with string.", materials: "Paper cat, yarn, glue" },
            { name: "My Pet Story Sheet", description: "Children draw and say, 'My pet is a cat. It eats fish.'", materials: "Worksheet with prompts" },
            { name: "Pet Rescue Roleplay", description: "Children pretend to care for sick pets and gently wrap them.", materials: "Toy animals, bandages, boxes" },
            { name: "Pet Food Matching", description: "Match fish to fish food, cat to milk, dog to bone.", materials: "Cards showing pets and their food" },
            { name: "Animal Doctor Kit", description: "Children play vet, checking temperature or bandaging paws.", materials: "Toy thermometer, bandages" },
            { name: "Bark-Whisper-Meow", description: "Teacher says pet sounds in whisper/loud voice. Children guess animal and sound.", materials: "None" },
            { name: "Pet Stick Puppets", description: "Children glue animals onto sticks to make little puppet friends.", materials: "Popsicle sticks, pet cutouts" },
            { name: "Pet Movement Maze", description: "Walk like different pets through a taped floor maze: hop like rabbit, crawl like puppy.", materials: "Floor maze path" },
            { name: "Pet Button Sort", description: "Children sort buttons to match pet colors — brown for dog, white for cat.", materials: "Color buttons, pet outlines" },
            { name: "Thank You, Pet Song", description: "Sing a goodbye song to pets: 'Thank you, dog, for wagging your tail…'", materials: "Bluetooth speaker" }
          ],
          "Domestic and Farm Animals": [
            { name: "Farm Animal Button Barn", description: "Give children a barn-shaped worksheet with blank spaces inside. Provide paper cutouts of domestic/farm animals (like cow, goat, hen). Children will paste the animals inside the barn and stick a button as the 'eye' on each animal. This helps with recognition and fine motor control.", materials: "Barn worksheet, animal cutouts, glue, buttons" },
            { name: "Moo-Meow-Cluck Sound Match", description: "Play animal sounds using a Bluetooth speaker — cow's moo, cat's meow, hen's cluck. Children are given a set of animal flashcards and must hold up the card that matches the sound. It improves auditory recognition and sound association.", materials: "Bluetooth speaker, sound clips, animal flashcards" },
            { name: "Paper Plate Cow Face", description: "Each child gets a paper plate to turn into a cow face. They stick black paper patches, paper horns, and ears. Button eyes or drawn features complete the cow. This activity develops creativity and animal recognition.", materials: "Paper plates, black/white paper bits, glue, buttons" },
            { name: "Straw Fence Farm Craft", description: "Children receive a paper farm scene (or plain sheet). They glue straws vertically to form a fence. Inside the fence, they paste animal pictures (e.g., sheep, horse). Great for sensory, thematic learning, and spatial awareness.", materials: "Paper straws, glue, printed animal cutouts, chart sheet" },
            { name: "Cotton Sheep Sheet", description: "Provide children with a large sheep outline. They will paste small pieces of cotton on the body area to make it fluffy. While they work, the teacher can talk about sheep and wool.", materials: "Sheep outline, cotton balls, glue" },
            { name: "Clay Farm Animal Models", description: "Children use soft clay to shape simple domestic animals. The teacher can demonstrate a basic shape (e.g., round body for a duck or cylinder for a cow). Children are encouraged to try their own versions.", materials: "Clay, visual samples of animals (pictures or models)" },
            { name: "Hen and Eggs Counting Game", description: "Each child gets a hen cutout and paper eggs. The teacher calls out a number (e.g., 4). Children must place the matching number of paper eggs under the hen and count aloud. This teaches both counting and association.", materials: "Hen cutouts, small oval paper eggs, number cards" },
            { name: "Domestic vs Wild Sorting", description: "Children receive mixed animal picture cards. They sort them into two trays or boxes: one labeled 'Domestic/Farm Animals' and the other 'Wild Animals.' This teaches classification skills and animal recognition.", materials: "Two labeled trays or bowls, mixed animal cards" },
            { name: "Farm Animal Movement Fun", description: "Play farm music using a Bluetooth speaker. Stop the music and call out an animal (e.g., 'Duck!'). Children waddle gently. Continue with other animals: horse (gallop), sheep (bounce). The movements stay safe and light.", materials: "Bluetooth speaker, open space" },
            { name: "Feed the Cow Drop Game", description: "Use a large cow face made from paper with a slit for the mouth. Children drop in paper grass bits or small beads ('food') one at a time, counting as they go. Teacher helps guide and review numbers.", materials: "Cow face cutout, paper grass or beads, a small box or tray" },
            { name: "Thread the Tail – Horse Edition", description: "Give children a horse cutout with holes punched near the tail area. They use thread or yarn to 'sew' through the holes, creating a colorful tail. This strengthens fine motor skills and introduces the concept of grooming pets.", materials: "Horse cutout with punched holes, yarn/thread, glue" },
            { name: "Muddy Pig Painting with Sand", description: "Children paint a pig outline using brown paint and then sprinkle dry sand on it to make a 'muddy pig.' As they work, the teacher explains how pigs love rolling in mud to stay cool.", materials: "Pig outline sheet, brown paint, sand, glue" },
            { name: "Clay Duck Pond Scene", description: "Children create a mini duck pond on paper using blue paint for water and shape little ducks from clay. They can also paste green strips around for grass. This integrates art and theme learning.", materials: "Clay, paint, paper, glue, green paper strips" },
            { name: "Cotton Goat Craft", description: "Give students a goat outline. They paste cotton balls on the goat's body to represent its wooly coat. Teacher can talk about goats giving milk and how we take care of them.", materials: "Goat outline, cotton balls, glue" },
            { name: "Farm Animal Stamping with Vegetables", description: "Cut vegetables like okra or potato are used as stampers. Children dip them in paint and stamp around animal outlines (e.g., around a hen). This adds sensory play while reinforcing farm animal identification.", materials: "Okra/potato stampers, paint, animal outline sheets" },
            { name: "Fence the Animals – Straw Craft", description: "Give a chart with farm animals printed. Children paste straws around the animal areas to build fences. This improves spatial understanding and teaches about animal enclosures.", materials: "Farm animal chart, paper straws, glue" },
            { name: "Domestic Animal Homes Matching", description: "Show children animal cards (cow, dog, sheep) and house images (shed, kennel, pen). Children match each animal to its correct home by pasting or pointing.", materials: "Animal cards, house cards or chart, glue" },
            { name: "Color the Farm Animal Silhouettes", description: "Children are given silhouette drawings of various domestic animals. They use crayons or paints to color inside the lines, naming each animal as they work.", materials: "Silhouette sheets, crayons or paints" },
            { name: "Farm Animal Puzzle Circle", description: "Circle charts with missing animal pieces are used. Children identify the missing parts and paste them in correct places. For example, a cow with a missing tail or head.", materials: "Circle puzzle chart, animal parts cutouts, glue" },
            { name: "Animal Footprint Walk", description: "Print or draw farm animal footprints (cow, duck, goat) on paper and place them in a path on the floor. Children walk along them, naming the animal as they follow the footprints.", materials: "Footprint cutouts or drawn shapes, tape" },
            { name: "Hen's Nest Button Sort", description: "Children are given a hen nest made from paper. They place buttons inside to represent eggs — one button per number called out by the teacher. This reinforces number concepts and pet care.", materials: "Hen nest cutout, buttons, glue (optional)" },
            { name: "Make a Cow Mask (with Spoon Base)", description: "Using a plastic spoon as a base, children stick paper ears, spots, and horns to make a cow face. Teacher assists in describing how cows help us with milk.", materials: "Plastic spoons, paper bits, glue, crayons" },
            { name: "Farm Animal Music Parade", description: "Teacher plays rhythmic farm music. Children hold or wear paper cutouts of different animals and walk/march in rhythm. Every few seconds, music pauses and they name their animal.", materials: "Bluetooth speaker, music, animal cutouts or badges" },
            { name: "Hay for the Horse (Straw Pasting)", description: "Children receive a horse face or stable sheet. They paste real or paper straws below the horse's mouth to show hay/grass. Teacher can explain feeding domestic animals.", materials: "Paper horse chart, straws, glue" },
            { name: "Match Animal to Product", description: "Children are given cards showing animals (cow, hen, goat) and cards showing their products (milk, eggs, wool). They match each animal with what it gives.", materials: "Picture cards of animals and products" },
            { name: "Sand Tray Letter Drawing – Animal Names", description: "Children trace first letters of domestic animals (C for Cow, D for Dog) in a sand tray. Teacher shows flashcards and guides hand movements.", materials: "Sand tray, animal flashcards" },
            { name: "Shape the Sheep – Clay on Outline", description: "Each child receives a sheep outline. They roll small clay balls and place them inside the body area to form a wooly texture. Good for fine motor skills.", materials: "Sheep sheet, soft clay" },
            { name: "Domestic Animal Face Matching", description: "Give half-cut animal faces (e.g., goat, rabbit). Children complete the match by finding and pasting the other half. Teacher can talk about names and sounds.", materials: "Animal face halves, glue" },
            { name: "Farm Animal Finger Rhyme", description: "A simple finger rhyme: 'Five animals on the farm…' where each finger is named (cow, goat, hen, etc.). Teacher demonstrates, and children follow with their fingers.", materials: "Rhyme script (verbal)" },
            { name: "Cowbell Circle Game", description: "Children sit in a circle. One child walks around holding a cowbell (or object that makes a soft sound). On ringing, the others guess which animal it belongs to.", materials: "Toy bell or metal object, animal cards" },
            { name: "Paint the Pig Pen", description: "Children are given a pig pen scene with pigs drawn inside. They paint the ground using brown paint to represent mud. While painting, the teacher explains how pigs enjoy mud baths to cool off.", materials: "Pig pen worksheet, brown paint, brushes" },
            { name: "Feather the Hen", description: "Each child gets a hen outline. They paste small strips of colored paper or real feathers (if available) on the body. The teacher sings a hen rhyme as they work.", materials: "Hen outline, colored paper feathers or craft feathers, glue" },
            { name: "Farm Animal Bead Graph", description: "Each child is given a pet animal (like cow, goat, hen). Children count how many animals are on a card and place the same number of beads in a row — making a simple graph.", materials: "Farm animal count cards, beads" },
            { name: "Hide the Sheep – Cotton Rolling Game", description: "Teacher shows a paper sheep. Children take cotton balls, roll them, and gently paste over the body until the sheep is 'hidden.' Then they count aloud how many cotton balls they used.", materials: "Sheep chart, cotton, glue" },
            { name: "Cup Cow Craft", description: "Children use a paper cup as the cow's body. They paste paper horns, ears, and a tail. Black spots are added using a sponge or thumb dipped in paint.", materials: "Paper cups, black paint, glue, paper parts" },
            { name: "Who Says What? Animal Sound Match", description: "Teacher plays a farm sound on the speaker (e.g., 'baa,' 'moo'). Children hold up the correct animal card. Builds listening skills and sound identification.", materials: "Bluetooth speaker, animal cards, recorded sounds" },
            { name: "Yarn Tail Goat Craft", description: "Children receive a goat picture and a piece of yarn. They paste the yarn as the goat's tail. Teacher explains the usefulness of goats on farms.", materials: "Goat cutout, yarn/thread, glue" },
            { name: "Make a Farm Collage", description: "Using cutouts from magazines or printed pictures, children create a farm scene collage. They paste animals, trees, grass, etc., and describe what they made.", materials: "Paper base, pictures, glue, crayons" },
            { name: "Milk the Cow (Squeeze Activity)", description: "A teacher-led demonstration using a glove filled with water (with a small hole) as an udder. Children take turns gently squeezing the glove to simulate milking a cow. Teacher explains the milk process.", materials: "Rubber glove, water, pinhole, tray" },
            { name: "Animal Face Lacing", description: "Children are given paper animal face cards (cow, hen) with punched holes. They use string or yarn to lace around the face outline, improving coordination.", materials: "Animal face cards with holes, yarn/thread" }
          ]
        }
      },
      {
        volume: 3,
        topics: {
          "All About Seasons": [
            { name: "Season Dress-Up Sorting", description: "Children match paper clothes to the correct season chart, like a raincoat for rainy season or a wool cap for winter.", materials: "Paper clothes cutouts, season posters" },
            { name: "Rainy Season Drip Art", description: "Using straws, children drop blue paint on umbrella drawings to create a rain-like effect.", materials: "Paper, straws, blue paint" },
            { name: "Summer Ice Melt", description: "Children touch and observe how ice cubes melt quickly, especially in warm temperatures like summer.", materials: "Ice cubes, bowls, towels" },
            { name: "Cotton Cloud Craft", description: "Children stick cotton onto blue paper to make fluffy clouds and talk about how clouds bring rain.", materials: "Cotton, glue, blue paper" },
            { name: "Winter Button Snowman", description: "Children build a snowman with buttons for the body, paper for the hat and scarf, and cotton for snow.", materials: "Buttons, paper, cotton, glue" },
            { name: "Sun Tracing with Clay", description: "Using yellow clay, children form the shape of a sun and learn that the sun shines brightly in summer.", materials: "Yellow clay, paper" },
            { name: "Spring Flower Collage", description: "Children paste paper flowers onto green sheets while learning about blooming flowers in spring.", materials: "Paper flowers, glue, green paper" },
            { name: "Rainy Season Sound Game", description: "Play thunder and rain sounds. Children guess the sound and name the season it belongs to.", materials: "Bluetooth speaker, sound clips" },
            { name: "Season Sorting Mat", description: "Children sort small picture cards like ice cream, umbrella, or wool cap under the correct season.", materials: "Season mats, picture cards" },
            { name: "Shape the Season (Sand Tray)", description: "In a tray of sand, children draw seasonal symbols like a sun, cloud, or umbrella with their fingers.", materials: "Sand tray" },
            { name: "Umbrella Button Art", description: "Children decorate umbrella outlines with buttons and talk about the need for umbrellas in the rainy season.", materials: "Umbrella outlines, glue, buttons" },
            { name: "Ice Cream Cone Craft", description: "Children make paper ice creams with triangle cones and circle scoops to represent summer treats.", materials: "Paper cutouts, glue, crayons" },
            { name: "Winter Cap Stamping", description: "Using sponge or potato stamps shaped like winter caps, kids decorate stamped hats with paint.", materials: "Sponge/potato stamps, paint, paper" },
            { name: "Rainbow in the Rain", description: "Children paint rainbows with fingers and glue paper raindrops to complete a rainy season scene.", materials: "Paint, paper, glue, raindrop cutouts" },
            { name: "Spring Butterfly Release", description: "Kids color butterflies and fly them around the classroom while learning about spring insects.", materials: "Butterfly printouts, crayons, sticks" },
            { name: "Season Weather Dance", description: "Play music and call out seasons. Children act out the weather—shiver for winter, open umbrella for rain.", materials: "Bluetooth speaker" },
            { name: "Hot or Cold Sorting Cups", description: "Children sort item pictures into 'hot' or 'cold' cups—like soup in hot and ice in cold.", materials: "Cups, small image cards" },
            { name: "Sun Hat Craft", description: "Kids make summer hats using paper plates and decorate them with stickers and colors.", materials: "Paper plates, crayons, stickers" },
            { name: "Raindrop Counting & Pasting", description: "Based on a number shown by the teacher, children paste that many raindrops onto a cloud shape.", materials: "Blue paper drops, cloud cutouts, glue" },
            { name: "Seasonal Tree Art", description: "Children decorate trees to show all seasons—cotton for winter, flowers for spring, leaves for summer, and no leaves + clouds for rainy.", materials: "Tree outlines, cotton, paper bits, glue" },
            { name: "Seasonal Footwear Match", description: "Children match paper cutouts of boots or sandals with the correct season and explain their choices.", materials: "Paper footwear cutouts" },
            { name: "Popsicle Stick Season Signs", description: "Each child makes a signpost for a season and decorates it with seasonal images like the sun or snowflakes.", materials: "Popsicle sticks, paper, markers" },
            { name: "Summer Fan Craft", description: "Children fold and decorate A4 paper into handheld fans and discuss how they help during hot summers.", materials: "A4 paper, crayons" },
            { name: "Water Splash Game", description: "Children pour water from one cup to another to feel its coolness and discuss its use during summer.", materials: "Plastic cups, water" },
            { name: "Wool Sorting Basket", description: "Children sort fabric scraps into baskets labeled for summer and winter clothing.", materials: "Cloth scraps, baskets" },
            { name: "Raindrop Song & Dance", description: "Children hold paper umbrellas and dance to a rain song while pretending it's raining.", materials: "Paper umbrellas, Bluetooth speaker" },
            { name: "Paint the Sunshine", description: "Children stamp a large sun using sponge dipped in yellow paint and say 'It's hot!'", materials: "Sponge, yellow paint, paper" },
            { name: "Ice Cream Counting Game", description: "Children add scoops onto a cone drawing and count them aloud, linking it with summer fun.", materials: "Cone and scoop printouts, crayons" },
            { name: "Umbrella Matching Game", description: "Children match umbrella tops and handles by shape or color, strengthening focus and memory.", materials: "Umbrella cutouts (2-part puzzles)" },
            { name: "Dress the Season Doll", description: "Children dress a blank doll figure with the right clothes for the season called by the teacher.", materials: "Paper doll, seasonal clothes cutouts, glue" },
            { name: "Paper Snowflake Fun", description: "With teacher help, kids fold and cut paper into snowflakes and paste them to form a winter scene.", materials: "Pre-folded paper, glue, blue chart" },
            { name: "Rain Boot Match-Up", description: "Children match colorful rain boots by size or color and place them under a rainy season poster.", materials: "Rain boot cards, seasonal chart" },
            { name: "Sun & Cloud Puppet Talk", description: "Children create sun and cloud puppets and use them to explain which season they belong to.", materials: "Paper plates, crayons, sticks" },
            { name: "Leaf Blowing Game", description: "Using straws, children blow paper leaves across a surface, pretending it's the windy springtime.", materials: "Paper leaves, straws" },
            { name: "Popsicle Ice Painting", description: "Children use frozen colored ice blocks to paint and see how they melt—connected to summer heat.", materials: "Colored ice, paper" },
            { name: "Four Seasons Song Actions", description: "Play a song describing all seasons. Children act out each one—shivering, jumping, fanning, or blooming.", materials: "Bluetooth speaker, open space" },
            { name: "Spring Garden Button Art", description: "Children paste buttons onto a printed garden to represent flowers and leaves in springtime.", materials: "Garden printout, buttons, glue" },
            { name: "Wool Cap Weaving", description: "Children weave yarn into a pre-cut wool cap shape, connecting it with warmth in winter.", materials: "Wool, punched paper cap shape" },
            { name: "Watermelon Painting", description: "Using fingers or sponges, kids paint inside a watermelon outline, learning it's a summer fruit.", materials: "Watermelon outline, red and green paint, sponge" },
            { name: "Season Wheel Craft", description: "Children make a rotating season wheel and spin it to talk about what happens in each season.", materials: "Cardboard wheel, pin for rotation" },
            { name: "Rainy Day Rhythm", description: "Children mimic rain sounds by tapping on plates or floors and listen to real rain via a speaker.", materials: "Plates or table, Bluetooth speaker" },
            { name: "Summer Lemonade Role Play", description: "Children mix lemon juice with water and pretend to sell lemonade, learning about refreshing summer drinks.", materials: "Lemons, water, paper cups" },
            { name: "Season Puzzle Match", description: "Children complete season-themed puzzles and explain what they see in each one.", materials: "Season puzzle cards" },
            { name: "Spring Bug Hunt", description: "Hidden bug pictures are searched and found by kids, who say which season they appear in.", materials: "Paper bugs, glue dots" },
            { name: "Build-a-Snowman Race", description: "In teams, kids race to stick snowman parts onto a big chart. Encourages winter season recall.", materials: "Snowman parts, glue, large chart" },
            { name: "Circle the Summer Things", description: "Children use worksheets to find and circle only summer-related items like fans or ice creams.", materials: "Printed worksheets, crayons" },
            { name: "Rainbow Spray Painting", description: "Children use toothbrushes to spray watercolor over a rainbow template, linking it to spring/rainy themes.", materials: "Toothbrushes, watercolors, rainbow printout" },
            { name: "Four Corners of Seasons", description: "Each classroom corner represents a season. When music stops, children run to the called season.", materials: "Season posters, Bluetooth speaker" },
            { name: "Dress for the Season Relay", description: "Children pick correct seasonal clothes and dress a paper doll as per the season called out.", materials: "Paper dolls, seasonal clothes cutouts" },
            { name: "Season Medal Ceremony", description: "After all activities, children receive paper medals with seasonal icons and say what they liked best.", materials: "Paper medals, crayons, glue, safety pins" }
          ],
          "Introduction to Vehicles": [
            { name: "Vehicle Sorting Mat", description: "Children are given picture cards of various vehicles. With the help of the teacher, they sort them into three mats labeled 'Land,' 'Air,' and 'Water.' This helps develop classification skills and understanding of vehicle types.", materials: "Picture cards, three labeled sorting mats" },
            { name: "Wheel Rolling Painting", description: "Children dip the wheels of toy cars in paint and roll them on paper to make tracks. As they play, the teacher discusses which vehicles have wheels and which don't.", materials: "Toy cars, paint, paper" },
            { name: "Make-a-Boat Float Test", description: "Children fold paper boats and place them in a water tub. The teacher explains that these boats are examples of water transport.", materials: "Paper, tub, water" },
            { name: "Transport Sound Guessing", description: "Play different vehicle sounds like honking, engines, airplanes, or trains. Children listen carefully and guess the vehicle name and type.", materials: "Bluetooth speaker, transport sound clips" },
            { name: "Clay Vehicle Modeling", description: "Children use clay to make simple shapes of vehicles like a car, train, or boat. The teacher helps name each vehicle and identifies where it travels.", materials: "Clay" },
            { name: "Match the Vehicle to the Road", description: "Use printed sheets with a road, clouds, and water waves. Children place each vehicle on the correct surface (e.g., ship on water, car on road).", materials: "Printed base sheets, vehicle cutouts" },
            { name: "Spoon Car Craft", description: "Using a plastic spoon as the base, children create a car by adding paper and buttons as wheels. A fun way to explore land vehicles.", materials: "Plastic spoons, buttons, glue, colored paper" },
            { name: "Fly the Airplane Craft", description: "Children fold paper to make airplanes and fly them across the room. The teacher explains that airplanes belong to air transport.", materials: "Paper" },
            { name: "Wheel Button Match", description: "Children are given vehicle cards. They place a button only on the vehicles that have wheels (like cars and buses), skipping others like boats or helicopters.", materials: "Vehicle picture cards, buttons" },
            { name: "Drive and Park Game", description: "A paper mat is marked with parking lots. Children drive toy cars around and 'park' them in spaces after saying the vehicle name and its type.", materials: "Toy cars, large paper mat with drawn parking boxes" },
            { name: "Watercolor Boat Scene", description: "Children use blue watercolor to paint a sea and paste a paper boat on it. They learn how boats travel over water.", materials: "Blue paint, paper, boat cutouts, glue" },
            { name: "Vehicle Song with Actions", description: "Play a lively transport rhyme. Children mimic the movement of different vehicles: flying like a plane, driving like a car, or chugging like a train.", materials: "Bluetooth speaker or mobile with audio" },
            { name: "Dot the Road Vehicles", description: "On a chart showing a mix of vehicle images, children place dot stickers only on the land vehicles like bus, car, or truck.", materials: "Vehicle chart, dot stickers" },
            { name: "Bus Craft with Cups", description: "Children convert a paper cup into a bus by decorating it with colored paper and attaching wheels. Encourages creativity and learning vehicle parts.", materials: "Paper cups, colored paper, buttons, glue" },
            { name: "Vehicle Hop Mat", description: "Spread large cutouts of different vehicles on the floor. When the teacher calls out a vehicle name, the child hops onto its picture.", materials: "Large floor mats or printed vehicle cutouts" },
            { name: "Boat in a Bowl Game", description: "Float paper boats in a bowl of water. Children blow gently to move them and observe how boats float and move on water.", materials: "Paper boats, water bowl" },
            { name: "Vehicle Puzzle Assembly", description: "Children are given simple 2-piece or 3-piece vehicle puzzles. After completing the puzzle, they say the vehicle's name aloud.", materials: "Vehicle puzzles (printed or laminated)" },
            { name: "String the Traffic Light", description: "Children string three paper circles (red, yellow, green) in the correct order while learning what each light means for vehicles.", materials: "Yarn/thread, paper circles, hole punch" },
            { name: "Paper Plate Wheel Spin", description: "Create a spinning wheel with a paper plate showing different vehicles. Children spin it and name the vehicle it lands on, explaining whether it goes on land, air, or water.", materials: "Paper plate, pin, pictures of vehicles" },
            { name: "Balloon Rocket (Air Transport)", description: "Tape an inflated balloon to a straw threaded on a string. Release it and watch it fly across the room. Teacher connects it to fast air vehicles.", materials: "Balloon, straw, long string, tape" },
            { name: "Transport Sorting Mats", description: "Prepare three mats labeled 'Water Transport,' 'Road Transport,' and 'Air Transport.' Show children picture cards of different vehicles. Briefly discuss each vehicle. Invite children to place each card on the correct mat. Offer praise and guide gently if needed.", materials: "Picture cards, 3 labeled mats" },
            { name: "Make-a-Paper Boat", description: "Demonstrate how to fold a simple paper boat. Help children fold their own. Fill a tub with water. Let the children float their boats and observe. Discuss how boats float and how they are used in water transport.", materials: "Paper, tub, water" },
            { name: "Roll-a-Car Painting", description: "Pour some paint onto a tray. Dip toy car wheels into the paint. Children roll cars on paper to create track patterns. Talk about how cars move on roads. Let the artwork dry and display.", materials: "Toy cars, paint, paper" },
            { name: "Paper Airplane Flight", description: "Show how to fold a basic paper airplane. Assist children in folding their own. In a clear space, let them fly their planes. Discuss how airplanes travel through air.", materials: "Paper" },
            { name: "Clay Vehicle Modeling", description: "Give each child clay. Demonstrate simple shapes for cars, boats, or airplanes. Encourage children to model a vehicle. Ask them to name the vehicle and say where it travels—road, water, or air.", materials: "Clay" },
            { name: "Vehicle Sound Guessing Game", description: "Play sounds of vehicles like honking, engines, and airplane takeoff. Children listen and guess the vehicle. Discuss the vehicle type after each sound.", materials: "Bluetooth speaker, sound clips" },
            { name: "Button Wheel Matching", description: "Show pictures of vehicles with wheels. Give children buttons and ask them to place buttons where the wheels would be. Discuss which vehicles have wheels and which don't.", materials: "Vehicle picture cards, buttons" },
            { name: "Boat Floating Race", description: "Use paper boats and place them in trays or tubs of water. Children blow gently to race their boats. Discuss floating and how boats move in water.", materials: "Paper boats, water trays" },
            { name: "Road Transport Obstacle Course", description: "Use cones or tape to create a driving path on the floor. Children 'drive' toy cars through the course. Teach simple road safety like stopping at signals and slowing at corners.", materials: "Toy cars, cones or tape" },
            { name: "Air Transport Parachute Drop", description: "Make simple parachutes using string and paper or cotton balls. Drop them from a height and watch them float. Talk about helicopters and parachutes as air transport.", materials: "Paper, cotton balls, string" },
            { name: "Create a Transport Collage", description: "Provide old magazines or printed vehicle images. Children cut or tear out vehicles and paste them under three headings: water, road, and air. Discuss each one as they build the collage.", materials: "Magazines, glue, paper" },
            { name: "Transport Puppet Show", description: "Create simple paper puppets of different vehicles attached to sticks. Children use them to act out a mini story with teacher narration. Talk about the types of transport in the story.", materials: "Paper puppets, craft sticks" },
            { name: "Airplane Paper Craft", description: "Give children paper and crayons. Help them fold paper airplanes and decorate with stickers or colors. Let them fly their creations and relate it to air transport.", materials: "Paper, crayons" },
            { name: "Vehicle Memory Game", description: "Prepare pairs of cards for each transport type. Shuffle and place them face down. Children take turns flipping two cards to find matches. Discuss the vehicle types as pairs are found.", materials: "Vehicle picture cards" },
            { name: "Traffic Light Craft", description: "Cut red, yellow, and green circles. Children glue them in order onto black paper to form a traffic light. Explain what each color means for road transport.", materials: "Colored paper, glue, scissors" },
            { name: "Water Transport Sound Making", description: "Fill containers with water. Children tap or splash gently to imitate boat sounds. Use small instruments to add rhythm. Connect this with water vehicle noises.", materials: "Water containers, small drums or sticks" },
            { name: "Road Transport Safety Dress-Up", description: "Provide hats, vests, or other simple costumes. Children role-play as traffic police, drivers, or pedestrians. Practice road safety rules through acting.", materials: "Hats, vests, props" },
            { name: "Floating and Sinking Test", description: "Collect small items like toys, leaves, stones. One by one, children drop items in water and observe if they float or sink. Relate this to boat floating.", materials: "Water tub, various small objects" },
            { name: "Vehicle Race Game", description: "Let children race cars on the floor, boats in tubs, and fly paper planes. Use all three transport types and talk about the differences in movement.", materials: "Toy cars, paper boats, paper planes" },
            { name: "Air Transport Movement Game", description: "In open space, call out air transport types—plane, helicopter, hot-air balloon. Children act out their movements with body gestures.", materials: "Open area for movement" },
            { name: "Build-a-Bus Craft", description: "Give children paper cups. Help them glue on paper wheels and windows. Talk about how buses carry people on roads.", materials: "Paper cups, paper, glue, buttons" },
            { name: "Floating Boat Decor", description: "Children decorate paper boats using crayons, stickers, or paint. Float the boats in tubs. Discuss boats' purpose in water transport.", materials: "Paper boats, crayons, water tubs" },
            { name: "Vehicle Sorting with Straws", description: "Give children colored straws and vehicle pictures. They group matching straw colors and draw similar vehicles. Teacher helps connect color and transport type.", materials: "Straws, paper, crayons" },
            { name: "Balloon Rocket Experiment", description: "Thread a string through a straw. Tape a blown-up balloon to the straw. Let it zoom forward. Discuss air movement and air transport.", materials: "Balloon, straw, string, tape" },
            { name: "Traffic Signal Hopscotch", description: "Create a hopscotch game using red, yellow, and green circles. Call out colors; children hop accordingly. Discuss what the signals mean.", materials: "Colored paper circles or tape" },
            { name: "Water Splash Painting", description: "Children drip watercolor onto paper and tilt it to create wave-like patterns. Discuss how water moves and affects boats.", materials: "Watercolors, paper" }
          ],
          "Water, Road, and Air Transport": [
            { name: "Transport Sorting Mats", description: "Prepare three mats labeled 'Water Transport,' 'Road Transport,' and 'Air Transport.' Show children picture cards of different vehicles. Briefly discuss each vehicle. Invite children to place each card on the correct mat. Offer praise and guide gently if needed.", materials: "Picture cards, 3 labeled mats" },
            { name: "Make-a-Paper Boat", description: "Demonstrate how to fold a simple paper boat. Help children fold their own. Fill a tub with water. Let the children float their boats and observe. Discuss how boats float and how they are used in water transport.", materials: "Paper, tub, water" },
            { name: "Roll-a-Car Painting", description: "Pour some paint onto a tray. Dip toy car wheels into the paint. Children roll cars on paper to create track patterns. Talk about how cars move on roads. Let the artwork dry and display.", materials: "Toy cars, paint, paper" },
            { name: "Paper Airplane Flight", description: "Show how to fold a basic paper airplane. Assist children in folding their own. In a clear space, let them fly their planes. Discuss how airplanes travel through air.", materials: "Paper" },
            { name: "Clay Vehicle Modeling", description: "Give each child clay. Demonstrate simple shapes for cars, boats, or airplanes. Encourage children to model a vehicle. Ask them to name the vehicle and say where it travels—road, water, or air.", materials: "Clay" },
            { name: "Vehicle Sound Guessing Game", description: "Play sounds of vehicles like honking, engines, and airplane takeoff. Children listen and guess the vehicle. Discuss the vehicle type after each sound.", materials: "Bluetooth speaker, sound clips" },
            { name: "Button Wheel Matching", description: "Show pictures of vehicles with wheels. Give children buttons and ask them to place buttons where the wheels would be. Discuss which vehicles have wheels and which don't.", materials: "Vehicle picture cards, buttons" },
            { name: "Boat Floating Race", description: "Use paper boats and place them in trays or tubs of water. Children blow gently to race their boats. Discuss floating and how boats move in water.", materials: "Paper boats, water trays" },
            { name: "Road Transport Obstacle Course", description: "Use cones or tape to create a driving path on the floor. Children 'drive' toy cars through the course. Teach simple road safety like stopping at signals and slowing at corners.", materials: "Toy cars, cones or tape" },
            { name: "Air Transport Parachute Drop", description: "Make simple parachutes using string and paper or cotton balls. Drop them from a height and watch them float. Talk about helicopters and parachutes as air transport.", materials: "Paper, cotton balls, string" },
            { name: "Create a Transport Collage", description: "Provide old magazines or printed vehicle images. Children cut or tear out vehicles and paste them under three headings: water, road, and air. Discuss each one as they build the collage.", materials: "Magazines, glue, paper" },
            { name: "Transport Puppet Show", description: "Create simple paper puppets of different vehicles attached to sticks. Children use them to act out a mini story with teacher narration. Talk about the types of transport in the story.", materials: "Paper puppets, craft sticks" },
            { name: "Airplane Paper Craft", description: "Give children paper and crayons. Help them fold paper airplanes and decorate with stickers or colors. Let them fly their creations and relate it to air transport.", materials: "Paper, crayons" },
            { name: "Vehicle Memory Game", description: "Prepare pairs of cards for each transport type. Shuffle and place them face down. Children take turns flipping two cards to find matches. Discuss the vehicle types as pairs are found.", materials: "Vehicle picture cards" },
            { name: "Traffic Light Craft", description: "Cut red, yellow, and green circles. Children glue them in order onto black paper to form a traffic light. Explain what each color means for road transport.", materials: "Colored paper, glue, scissors" },
            { name: "Water Transport Sound Making", description: "Fill containers with water. Children tap or splash gently to imitate boat sounds. Use small instruments to add rhythm. Connect this with water vehicle noises.", materials: "Water containers, small drums or sticks" },
            { name: "Road Transport Safety Dress-Up", description: "Provide hats, vests, or other simple costumes. Children role-play as traffic police, drivers, or pedestrians. Practice road safety rules through acting.", materials: "Hats, vests, props" },
            { name: "Floating and Sinking Test", description: "Collect small items like toys, leaves, stones. One by one, children drop items in water and observe if they float or sink. Relate this to boat floating.", materials: "Water tub, various small objects" },
            { name: "Vehicle Race Game", description: "Let children race cars on the floor, boats in tubs, and fly paper planes. Use all three transport types and talk about the differences in movement.", materials: "Toy cars, paper boats, paper planes" },
            { name: "Air Transport Movement Game", description: "In open space, call out air transport types—plane, helicopter, hot-air balloon. Children act out their movements with body gestures.", materials: "Open area for movement" },
            { name: "Build-a-Bus Craft", description: "Give children paper cups. Help them glue on paper wheels and windows. Talk about how buses carry people on roads.", materials: "Paper cups, paper, glue, buttons" },
            { name: "Floating Boat Decor", description: "Children decorate paper boats using crayons, stickers, or paint. Float the boats in tubs. Discuss boats' purpose in water transport.", materials: "Paper boats, crayons, water tubs" },
            { name: "Vehicle Sorting with Straws", description: "Give children colored straws and vehicle pictures. They group matching straw colors and draw similar vehicles. Teacher helps connect color and transport type.", materials: "Straws, paper, crayons" },
            { name: "Balloon Rocket Experiment", description: "Thread a string through a straw. Tape a blown-up balloon to the straw. Let it zoom forward. Discuss air movement and air transport.", materials: "Balloon, straw, string, tape" },
            { name: "Traffic Signal Hopscotch", description: "Create a hopscotch game using red, yellow, and green circles. Call out colors; children hop accordingly. Discuss what the signals mean.", materials: "Colored paper circles or tape" },
            { name: "Water Splash Painting", description: "Children drip watercolor onto paper and tilt it to create wave-like patterns. Discuss how water moves and affects boats.", materials: "Watercolors, paper" }
          ],
          "Understanding Missing Capital Letters": [
            { name: "Capital Letter Match", description: "Prepare cards with lowercase words missing their starting capital letters (like 'apple'). Show capital letter cards separately. Children match each word with the correct capital letter card. As they match, explain that each word must begin with a capital letter.", materials: "Word cards, capital letter cards" },
            { name: "Fix the Sentence Game", description: "Write simple sentences without capital letters at the beginning (e.g., 'my cat is cute'). Read them aloud and ask children what's missing. Invite them to rewrite the sentence using a capital letter at the start.", materials: "Printed sentences, pencils" },
            { name: "Capital Letter Coloring", description: "Give children coloring sheets with simple sentences. The first letters are lowercase. Ask children to color the first letter of each sentence brightly and talk about how it should be capitalized.", materials: "Coloring sheets, crayons" },
            { name: "Capital Letter Sorting", description: "Mix a bunch of capital and lowercase letter cards. Ask children to sort capital letters into one pile and lowercase into another. Talk about when and why we use capital letters.", materials: "Letter cards" },
            { name: "Letter Detective", description: "Show children a short paragraph or sentence with missing capital letters. Ask them to circle or highlight where capital letters should go. Discuss their answers together.", materials: "Printed text, pencils" },
            { name: "Name Capital Letters", description: "Ask each child to write their name on a piece of paper. Highlight the capital letter in the beginning. Say the capital letter sound together and emphasize that names always start with capitals.", materials: "Paper, pencils" },
            { name: "Capital Letter Bingo", description: "Make bingo cards with capital letters in the boxes. Call out letters or words, and children mark the correct capital letters. When they get a bingo, ask them to say a word that begins with that letter.", materials: "Bingo cards, markers" },
            { name: "Storybook Capitals", description: "Read a story aloud to the class. Pause at each sentence start or name, pointing out the capital letter. Ask children to repeat the capital letter loudly.", materials: "Storybook" },
            { name: "Capital Letter Tracing", description: "Provide worksheets with dotted capital letters. Children trace each one while saying its name aloud. Reinforce that these letters begin names and sentences.", materials: "Tracing sheets, pencils" },
            { name: "Capital Letter Craft", description: "Cut out large capital letters from colored paper. Children decorate them with buttons, glitter, or beads. Hang them on a wall and practice saying their sounds.", materials: "Colored paper, scissors, glue, buttons" },
            { name: "Capital Letter Jump", description: "Place big letter cards on the floor. Call out a word, and children jump to the capital letter that begins it. Discuss why it's capitalized.", materials: "Floor letter cards" },
            { name: "Missing Capital Letter Poster", description: "Create a large poster with sentences missing capital letters. Invite children to take turns fixing them using colored markers. Discuss their choices aloud.", materials: "Poster paper, markers" },
            { name: "Capital Letter Puzzle", description: "Design puzzles where one half has a lowercase word and the other has the correct capital letter. Children match them and complete the puzzle.", materials: "Puzzle pieces" },
            { name: "Capital Letter Song", description: "Teach a fun, repetitive song that talks about capital letters starting names and sentences. Sing it together with hand movements to reinforce learning.", materials: "Bluetooth speaker (optional)" },
            { name: "Capital Letter Flashcards", description: "Show a flashcard with a capital letter and a picture (like 'A' and an Apple). Ask children to name the letter and word out loud. Repeat with different cards.", materials: "Flashcards" },
            { name: "Sentence Building with Capitals", description: "Give word cards to children and help them arrange them into simple sentences. Remind them to use a capital letter at the beginning. Read sentences together.", materials: "Word cards" },
            { name: "Capital Letter Hunt", description: "Show a page from a book or printout. Ask children to circle all capital letters they can find. Then discuss what kinds of words start with capitals.", materials: "Book page or text, pencils" },
            { name: "Name Badge Craft", description: "Children create their own name badges, starting with a big capital letter. Let them decorate it with glitter or stickers. Practice saying the capital sound in their name.", materials: "Paper, glitter, stickers" },
            { name: "Capital Letter Relay", description: "Set up capital letter cards at the other end of the room. Call out a word, and children run to get the capital letter it begins with. Return and say the word aloud.", materials: "Letter cards" },
            { name: "Capital Letter Collage", description: "Let children cut out capital letters from old magazines. They glue them onto a large chart to create a collage. Discuss the sound each letter makes.", materials: "Magazines, glue, chart paper" },
            { name: "Capital Letter Bingo Game (Advanced)", description: "Create bingo cards with both capital letters and words that begin with them. Call out words, and children cover the matching capital letter.", materials: "Bingo cards, markers" },
            { name: "Capital Letter Drawing", description: "Children draw something that begins with a capital letter (e.g., 'D' for Dog). Write the word next to the drawing using a capital.", materials: "Paper, crayons" },
            { name: "Capital Letter Sticker Book", description: "Make small booklets with one page per capital letter. Children add stickers of things starting with each letter. Say the words aloud together.", materials: "Mini sticker books, stickers" },
            { name: "Story Time Capitals", description: "Read a story emphasizing capital letters. Point out every capital at the beginning of a sentence or name. Children repeat the letters with you.", materials: "Storybook" },
            { name: "Capital Letter Tracing in Sand", description: "Pour sand into trays. Children use their fingers to trace capital letters in the sand. Say the letter aloud as they trace.", materials: "Sand trays" }
          ],
          "Five Senses, Big & Small, and Emotions": [
            { name: "Scented Guessing Game", description: "Prepare small containers with different scents such as lemon, coffee, or spices. Blindfold a child and let them smell one scent. Ask them to guess what it is and describe if it smells nice or not. Continue with other children. Explain that this uses the sense of smell.", materials: "Small containers, lemon, coffee, spices" },
            { name: "Texture Touch Box", description: "Fill a box with a variety of textures like soft cloth, rough sponge, and smooth stone. Without looking, children reach in, touch one object, and describe how it feels. Then show them the item and explain how they used their sense of touch.", materials: "Box, cloth, sponge, stones" },
            { name: "Sound Matching", description: "Play recorded sounds such as rain, animal noises, or vehicles using a speaker. Show matching pictures for each sound. Children listen and point to the correct picture. Talk about how hearing helps us understand our surroundings.", materials: "Bluetooth speaker, sound recordings, matching pictures" },
            { name: "Taste Test", description: "Prepare small samples of sugar (sweet), salt (salty), and lemon (sour). Let children taste each one and describe how it tastes. Discuss the role of the sense of taste in enjoying food.", materials: "Small food samples (sugar, salt, lemon)" },
            { name: "Sight Scavenger Hunt", description: "Ask children to find and point to objects of specific colors or shapes around the classroom. They can collect them or just identify them. Talk about how sight helps us see and find things.", materials: "Classroom objects" },
            { name: "Big and Small Sorting", description: "Gather various-sized toys and blocks. Ask children to sort them into 'big' and 'small' groups. Talk about the differences in size.", materials: "Toys, blocks, assorted objects" },
            { name: "Big vs Small Drawing", description: "Give children paper and crayons. Ask them to draw one big object and one small one, like a big tree and a small tree. Let them share and explain their drawings.", materials: "Paper, crayons" },
            { name: "Big and Small Paper Chain", description: "Cut colored paper into big and small strips. Help children make alternating big and small loops to form a paper chain. Hang it up and discuss the pattern.", materials: "Colored paper strips, glue" },
            { name: "Matching Big and Small Pairs", description: "Show picture cards of big and small versions of objects or animals (like big dog and puppy). Children match the correct pairs and talk about how size can vary.", materials: "Picture cards" },
            { name: "Big and Small Obstacle Course", description: "Use furniture and tape to create an obstacle course. Include spaces for crawling (small) and walking around (big). Children move through and talk about the differences.", materials: "Classroom furniture, tape" },
            { name: "Emotion Face Masks", description: "Hand out paper plates and colors. Children draw different facial expressions (happy, sad, angry). Attach string to turn them into wearable masks. Talk about each emotion.", materials: "Paper plates, coloring materials, string" },
            { name: "Emotion Charades", description: "Write different emotions on slips of paper. Each child picks a slip and acts out the emotion without speaking. The rest of the group guesses. Discuss how we show emotions.", materials: "Emotion slips" },
            { name: "Color Your Mood", description: "Provide coloring sheets and crayons. Ask children to choose colors that match their current mood and color accordingly. Let them explain their color choices.", materials: "Coloring sheets, crayons" },
            { name: "Storytime Emotion Talk", description: "Read a story with emotional moments. Pause during the story to ask how the characters are feeling and why. Encourage discussion about those feelings.", materials: "Storybook" },
            { name: "Feelings Matching Game", description: "Show picture cards with facial expressions. Say an emotion (like 'sad'), and children find the correct face. Repeat with other emotions.", materials: "Emotion face cards" },
            { name: "Listening Walk", description: "Take children on a short outdoor walk. Ask them to listen carefully and identify sounds like birds chirping or cars passing. Discuss all the sounds they heard.", materials: "Outdoor space" },
            { name: "Touch and Tell Bag", description: "Place small, textured objects inside a bag. Children reach in without looking and describe the object they feel. After guessing, reveal the object.", materials: "Bag, small textured objects" },
            { name: "Taste Sorting", description: "Show pictures or samples of sweet, sour, and salty foods. Ask children to sort them into the correct taste category. Talk about the different flavors.", materials: "Food samples or food pictures" },
            { name: "Sight Sorting with Colors", description: "Give children a mix of colored objects. Ask them to sort them by color. Talk about how the sense of sight helps us recognize colors.", materials: "Colored objects" },
            { name: "Smell and Match", description: "Provide items with distinct smells (like cinnamon, soap) and matching pictures. Children smell each item and find the matching picture.", materials: "Scented items, pictures" },
            { name: "Build Big and Small Towers", description: "Give children a set of blocks. Ask them to build one big tower and one small tower. Talk about the differences in size and how it affects balance.", materials: "Blocks" },
            { name: "Big and Small Pattern Making", description: "Cut out big and small shapes from paper. Children glue them on paper in a repeating pattern: big-small-big-small. Discuss the size difference.", materials: "Paper cutouts, glue" },
            { name: "Emotion Sorting Basket", description: "Provide emotion cards and baskets labeled 'Happy,' 'Sad,' and 'Angry.' Children sort the cards into the correct baskets. Discuss the emotions as they sort.", materials: "Emotion cards, labeled baskets" },
            { name: "Happy/Sad Dance", description: "Play different kinds of music — happy and upbeat, then slow and sad. Children dance in ways that match the feeling of the music. Talk about how music can affect emotions.", materials: "Bluetooth speaker" },
            { name: "Emotion Story Drawing", description: "Read a story that includes emotional scenes. Ask children to draw a picture showing how one of the characters feels. Share and discuss their drawings.", materials: "Paper, crayons" }
          ]
        }
      }
    ]
  },
  "jr. kg": {
    english: [
      {
        volume: 1,
        topics: {
          "Water, Road, and Air Transport": [
            { name: "Transport Sorting Mats", description: "Prepare three mats labeled 'Water Transport,' 'Road Transport,' and 'Air Transport.' Show children picture cards of different vehicles. Briefly discuss each vehicle. Invite children to place each card on the correct mat. Offer praise and guide gently if needed.", materials: "Picture cards, 3 labeled mats" },
            { name: "Make-a-Paper Boat", description: "Demonstrate how to fold a simple paper boat. Help children fold their own. Fill a tub with water. Let the children float their boats and observe. Discuss how boats float and how they are used in water transport.", materials: "Paper, tub, water" },
            { name: "Roll-a-Car Painting", description: "Pour some paint onto a tray. Dip toy car wheels into the paint. Children roll cars on paper to create track patterns. Talk about how cars move on roads. Let the artwork dry and display.", materials: "Toy cars, paint, paper" },
            { name: "Paper Airplane Flight", description: "Show how to fold a basic paper airplane. Assist children in folding their own. In a clear space, let them fly their planes. Discuss how airplanes travel through air.", materials: "Paper" },
            { name: "Clay Vehicle Modeling", description: "Give each child clay. Demonstrate simple shapes for cars, boats, or airplanes. Encourage children to model a vehicle. Ask them to name the vehicle and say where it travels—road, water, or air.", materials: "Clay" },
            { name: "Vehicle Sound Guessing Game", description: "Play sounds of vehicles like honking, engines, and airplane takeoff. Children listen and guess the vehicle. Discuss the vehicle type after each sound.", materials: "Bluetooth speaker, sound clips" },
            { name: "Button Wheel Matching", description: "Show pictures of vehicles with wheels. Give children buttons and ask them to place buttons where the wheels would be. Discuss which vehicles have wheels and which don't.", materials: "Vehicle picture cards, buttons" },
            { name: "Boat Floating Race", description: "Use paper boats and place them in trays or tubs of water. Children blow gently to race their boats. Discuss floating and how boats move in water.", materials: "Paper boats, water trays" },
            { name: "Road Transport Obstacle Course", description: "Use cones or tape to create a driving path on the floor. Children 'drive' toy cars through the course. Teach simple road safety like stopping at signals and slowing at corners.", materials: "Toy cars, cones or tape" },
            { name: "Air Transport Parachute Drop", description: "Make simple parachutes using string and paper or cotton balls. Drop them from a height and watch them float. Talk about helicopters and parachutes as air transport.", materials: "Paper, cotton balls, string" },
            { name: "Create a Transport Collage", description: "Provide old magazines or printed vehicle images. Children cut or tear out vehicles and paste them under three headings: water, road, and air. Discuss each one as they build the collage.", materials: "Magazines, glue, paper" },
            { name: "Transport Puppet Show", description: "Create simple paper puppets of different vehicles attached to sticks. Children use them to act out a mini story with teacher narration. Talk about the types of transport in the story.", materials: "Paper puppets, craft sticks" },
            { name: "Airplane Paper Craft", description: "Give children paper and crayons. Help them fold paper airplanes and decorate with stickers or colors. Let them fly their creations and relate it to air transport.", materials: "Paper, crayons" },
            { name: "Vehicle Memory Game", description: "Prepare pairs of cards for each transport type. Shuffle and place them face down. Children take turns flipping two cards to find matches. Discuss the vehicle types as pairs are found.", materials: "Vehicle picture cards" },
            { name: "Traffic Light Craft", description: "Cut red, yellow, and green circles. Children glue them in order onto black paper to form a traffic light. Explain what each color means for road transport.", materials: "Colored paper, glue, scissors" },
            { name: "Water Transport Sound Making", description: "Fill containers with water. Children tap or splash gently to imitate boat sounds. Use small instruments to add rhythm. Connect this with water vehicle noises.", materials: "Water containers, small drums or sticks" },
            { name: "Road Transport Safety Dress-Up", description: "Provide hats, vests, or other simple costumes. Children role-play as traffic police, drivers, or pedestrians. Practice road safety rules through acting.", materials: "Hats, vests, props" },
            { name: "Floating and Sinking Test", description: "Collect small items like toys, leaves, stones. One by one, children drop items in water and observe if they float or sink. Relate this to boat floating.", materials: "Water tub, various small objects" },
            { name: "Vehicle Race Game", description: "Let children race cars on the floor, boats in tubs, and fly paper planes. Use all three transport types and talk about the differences in movement.", materials: "Toy cars, paper boats, paper planes" },
            { name: "Air Transport Movement Game", description: "In open space, call out air transport types—plane, helicopter, hot-air balloon. Children act out their movements with body gestures.", materials: "Open area for movement" }
          ],
          "Understanding Missing Capital Letters": [
            { name: "Capital Letter Match", description: "Prepare cards with lowercase words missing their starting capital letters (like 'apple'). Show capital letter cards separately. Children match each word with the correct capital letter card. As they match, explain that each word must begin with a capital letter.", materials: "Word cards, capital letter cards" },
            { name: "Fix the Sentence Game", description: "Write simple sentences without capital letters at the beginning (e.g., 'my cat is cute'). Read them aloud and ask children what's missing. Invite them to rewrite the sentence using a capital letter at the start.", materials: "Printed sentences, pencils" },
            { name: "Capital Letter Coloring", description: "Give children coloring sheets with simple sentences. The first letters are lowercase. Ask children to color the first letter of each sentence brightly and talk about how it should be capitalized.", materials: "Coloring sheets, crayons" },
            { name: "Capital Letter Sorting", description: "Mix a bunch of capital and lowercase letter cards. Ask children to sort capital letters into one pile and lowercase into another. Talk about when and why we use capital letters.", materials: "Letter cards" },
            { name: "Letter Detective", description: "Show children a short paragraph or sentence with missing capital letters. Ask them to circle or highlight where capital letters should go. Discuss their answers together.", materials: "Printed text, pencils" },
            { name: "Name Capital Letters", description: "Ask each child to write their name on a piece of paper. Highlight the capital letter in the beginning. Say the capital letter sound together and emphasize that names always start with capitals.", materials: "Paper, pencils" },
            { name: "Capital Letter Bingo", description: "Make bingo cards with capital letters in the boxes. Call out letters or words, and children mark the correct capital letters. When they get a bingo, ask them to say a word that begins with that letter.", materials: "Bingo cards, markers" },
            { name: "Storybook Capitals", description: "Read a story aloud to the class. Pause at each sentence start or name, pointing out the capital letter. Ask children to repeat the capital letter loudly.", materials: "Storybook" },
            { name: "Capital Letter Tracing", description: "Provide worksheets with dotted capital letters. Children trace each one while saying its name aloud. Reinforce that these letters begin names and sentences.", materials: "Tracing sheets, pencils" },
            { name: "Capital Letter Craft", description: "Cut out large capital letters from colored paper. Children decorate them with buttons, glitter, or beads. Hang them on a wall and practice saying their sounds.", materials: "Colored paper, scissors, glue, buttons" },
            { name: "Capital Letter Jump", description: "Place big letter cards on the floor. Call out a word, and children jump to the capital letter that begins it. Discuss why it's capitalized.", materials: "Floor letter cards" },
            { name: "Missing Capital Letter Poster", description: "Create a large poster with sentences missing capital letters. Invite children to take turns fixing them using colored markers. Discuss their choices aloud.", materials: "Poster paper, markers" },
            { name: "Capital Letter Puzzle", description: "Design puzzles where one half has a lowercase word and the other has the correct capital letter. Children match them and complete the puzzle.", materials: "Puzzle pieces" },
            { name: "Capital Letter Song", description: "Teach a fun, repetitive song that talks about capital letters starting names and sentences. Sing it together with hand movements to reinforce learning.", materials: "Bluetooth speaker (optional)" },
            { name: "Capital Letter Flashcards", description: "Show a flashcard with a capital letter and a picture (like 'A' and an Apple). Ask children to name the letter and word out loud. Repeat with different cards.", materials: "Flashcards" },
            { name: "Sentence Building with Capitals", description: "Give word cards to children and help them arrange them into simple sentences. Remind them to use a capital letter at the beginning. Read sentences together.", materials: "Word cards" },
            { name: "Capital Letter Hunt", description: "Show a page from a book or printout. Ask children to circle all capital letters they can find. Then discuss what kinds of words start with capitals.", materials: "Book page or text, pencils" },
            { name: "Name Badge Craft", description: "Children create their own name badges, starting with a big capital letter. Let them decorate it with glitter or stickers. Practice saying the capital sound in their name.", materials: "Paper, glitter, stickers" },
            { name: "Capital Letter Relay", description: "Set up capital letter cards at the other end of the room. Call out a word, and children run to get the capital letter it begins with. Return and say the word aloud.", materials: "Letter cards" },
            { name: "Capital Letter Collage", description: "Let children cut out capital letters from old magazines. They glue them onto a large chart to create a collage. Discuss the sound each letter makes.", materials: "Magazines, glue, chart paper" },
            { name: "Capital Letter Bingo Game (Advanced)", description: "Create bingo cards with both capital letters and words that begin with them. Call out words, and children cover the matching capital letter.", materials: "Bingo cards, markers" },
            { name: "Capital Letter Drawing", description: "Children draw something that begins with a capital letter (e.g., 'D' for Dog). Write the word next to the drawing using a capital.", materials: "Paper, crayons" },
            { name: "Capital Letter Sticker Book", description: "Make small booklets with one page per capital letter. Children add stickers of things starting with each letter. Say the words aloud together.", materials: "Mini sticker books, stickers" },
            { name: "Story Time Capitals", description: "Read a story emphasizing capital letters. Point out every capital at the beginning of a sentence or name. Children repeat the letters with you.", materials: "Storybook" },
            { name: "Capital Letter Tracing in Sand", description: "Pour sand into trays. Children use their fingers to trace capital letters in the sand. Say the letter aloud as they trace.", materials: "Sand trays" }
          ],
          "Five Senses, Big & Small, and Emotions": [
            { name: "Scented Guessing Game", description: "Prepare small containers with different scents such as lemon, coffee, or spices. Blindfold a child and let them smell one scent. Ask them to guess what it is and describe if it smells nice or not. Continue with other children. Explain that this uses the sense of smell.", materials: "Small containers, lemon, coffee, spices" },
            { name: "Texture Touch Box", description: "Fill a box with a variety of textures like soft cloth, rough sponge, and smooth stone. Without looking, children reach in, touch one object, and describe how it feels. Then show them the item and explain how they used their sense of touch.", materials: "Box, cloth, sponge, stones" },
            { name: "Sound Matching", description: "Play recorded sounds such as rain, animal noises, or vehicles using a speaker. Show matching pictures for each sound. Children listen and point to the correct picture. Talk about how hearing helps us understand our surroundings.", materials: "Bluetooth speaker, sound recordings, matching pictures" },
            { name: "Taste Test", description: "Prepare small samples of sugar (sweet), salt (salty), and lemon (sour). Let children taste each one and describe how it tastes. Discuss the role of the sense of taste in enjoying food.", materials: "Small food samples (sugar, salt, lemon)" },
            { name: "Sight Scavenger Hunt", description: "Ask children to find and point to objects of specific colors or shapes around the classroom. They can collect them or just identify them. Talk about how sight helps us see and find things.", materials: "Classroom objects" },
            { name: "Big and Small Sorting", description: "Gather various-sized toys and blocks. Ask children to sort them into 'big' and 'small' groups. Talk about the differences in size.", materials: "Toys, blocks, assorted objects" },
            { name: "Big vs Small Drawing", description: "Give children paper and crayons. Ask them to draw one big object and one small one, like a big tree and a small tree. Let them share and explain their drawings.", materials: "Paper, crayons" },
            { name: "Big and Small Paper Chain", description: "Cut colored paper into big and small strips. Help children make alternating big and small loops to form a paper chain. Hang it up and discuss the pattern.", materials: "Colored paper strips, glue" },
            { name: "Matching Big and Small Pairs", description: "Show picture cards of big and small versions of objects or animals (like big dog and puppy). Children match the correct pairs and talk about how size can vary.", materials: "Picture cards" },
            { name: "Big and Small Obstacle Course", description: "Use furniture and tape to create an obstacle course. Include spaces for crawling (small) and walking around (big). Children move through and talk about the differences.", materials: "Classroom furniture, tape" },
            { name: "Emotion Face Masks", description: "Hand out paper plates and colors. Children draw different facial expressions (happy, sad, angry). Attach string to turn them into wearable masks. Talk about each emotion.", materials: "Paper plates, coloring materials, string" },
            { name: "Emotion Charades", description: "Write different emotions on slips of paper. Each child picks a slip and acts out the emotion without speaking. The rest of the group guesses. Discuss how we show emotions.", materials: "Emotion slips" },
            { name: "Color Your Mood", description: "Provide coloring sheets and crayons. Ask children to choose colors that match their current mood and color accordingly. Let them explain their color choices.", materials: "Coloring sheets, crayons" },
            { name: "Storytime Emotion Talk", description: "Read a story with emotional moments. Pause during the story to ask how the characters are feeling and why. Encourage discussion about those feelings.", materials: "Storybook" },
            { name: "Feelings Matching Game", description: "Show picture cards with facial expressions. Say an emotion (like 'sad'), and children find the correct face. Repeat with other emotions.", materials: "Emotion face cards" },
            { name: "Listening Walk", description: "Take children on a short outdoor walk. Ask them to listen carefully and identify sounds like birds chirping or cars passing. Discuss all the sounds they heard.", materials: "Outdoor space" },
            { name: "Touch and Tell Bag", description: "Place small, textured objects inside a bag. Children reach in without looking and describe the object they feel. After guessing, reveal the object.", materials: "Bag, small textured objects" },
            { name: "Taste Sorting", description: "Show pictures or samples of sweet, sour, and salty foods. Ask children to sort them into the correct taste category. Talk about the different flavors.", materials: "Food samples or food pictures" },
            { name: "Sight Sorting with Colors", description: "Give children a mix of colored objects. Ask them to sort them by color. Talk about how the sense of sight helps us recognize colors.", materials: "Colored objects" },
            { name: "Smell and Match", description: "Provide items with distinct smells (like cinnamon, soap) and matching pictures. Children smell each item and find the matching picture.", materials: "Scented items, pictures" },
            { name: "Build Big and Small Towers", description: "Give children a set of blocks. Ask them to build one big tower and one small tower. Talk about the differences in size and how it affects balance.", materials: "Blocks" },
            { name: "Big and Small Pattern Making", description: "Cut out big and small shapes from paper. Children glue them on paper in a repeating pattern: big-small-big-small. Discuss the size difference.", materials: "Paper cutouts, glue" },
            { name: "Emotion Sorting Basket", description: "Provide emotion cards and baskets labeled 'Happy,' 'Sad,' and 'Angry.' Children sort the cards into the correct baskets. Discuss the emotions as they sort.", materials: "Emotion cards, labeled baskets" },
            { name: "Happy/Sad Dance", description: "Play different kinds of music — happy and upbeat, then slow and sad. Children dance in ways that match the feeling of the music. Talk about how music can affect emotions.", materials: "Bluetooth speaker" },
            { name: "Emotion Story Drawing", description: "Read a story that includes emotional scenes. Ask children to draw a picture showing how one of the characters feels. Share and discuss their drawings.", materials: "Paper, crayons" }
          ]
        }
      },
      {
        volume: 2,
        topics: {
          "Revision Activities for Letters A–Z": [
            { name: "Alphabet Hopscotch", description: "Draw letter boxes A to Z on the ground. Children jump on the letters as the teacher calls them out.", materials: "Chalk or tape, open floor space" },
            { name: "Clay Letters", description: "Children mold letters A to Z using colorful clay. Helps build letter recognition and fine motor skills.", materials: "Clay" },
            { name: "Match Letter to Object", description: "Match alphabet cards (A–Z) with picture cards of objects like A – apple, B – ball.", materials: "Letter cards, object cards" },
            { name: "Alphabet Song with Actions", description: "Sing the ABC song with matching hand movements or marching steps. Add phonics sounds for each letter.", materials: "Bluetooth speaker" },
            { name: "Alphabet Wheel", description: "Children spin a paper wheel with letters and name a word starting with the selected letter.", materials: "Paper wheel" },
            { name: "Missing Letter Train", description: "Show a train of letters with some missing. Kids figure out which letters go in the blank spots.", materials: "Paper train with blank sections" },
            { name: "Bead the Alphabet", description: "Children thread alphabet beads from A to Z onto a string. Great for sequencing and fine motor skills.", materials: "Alphabet beads, string" },
            { name: "Touch & Tell Bag", description: "Kids pull a letter card from a mystery bag and say the letter and a word it begins with.", materials: "Bag, letter flashcards" },
            { name: "Button Letter Match", description: "Say a letter aloud and have children place buttons on that letter on a chart.", materials: "Alphabet chart, colorful buttons" },
            { name: "Alphabet Hunt", description: "Hide letter flashcards around the classroom. Kids find them and say both the letter and a word.", materials: "Flashcards" },
            { name: "Build with Sticks", description: "Using matchsticks or popsicle sticks, kids form uppercase letters on the table or mat.", materials: "Matchsticks or popsicle sticks" },
            { name: "Trace the Letters", description: "Give worksheets with A to Z outlines. Kids trace using crayons, markers, or fingers.", materials: "Worksheets, crayons" },
            { name: "Alphabet Puzzle", description: "Give children a shuffled alphabet puzzle and ask them to complete the A–Z sequence.", materials: "Printed alphabet puzzle" },
            { name: "Draw and Say", description: "Call out a letter. Kids draw an object beginning with that letter and say the word aloud.", materials: "Paper, crayons" },
            { name: "Phonics Sound Bingo", description: "Play a sound. Children match it to the correct picture on their bingo card.", materials: "Bluetooth speaker, bingo cards with pictures" },
            { name: "Alphabet Toss Game", description: "Spread letter cards on the floor. Kids toss a soft ball and say the letter and a matching word.", materials: "Soft ball, letter cards" },
            { name: "Alphabet Story Time", description: "Read a story filled with alphabet-related words. Pause to ask what letter a word starts with.", materials: "Picture book or letter-rich story" },
            { name: "Straw Letters", description: "Let children use plastic straws to create capital letters on a table surface.", materials: "Plastic straws" },
            { name: "'Letter Says' Action Game", description: "Like Simon Says! For example: 'Letter J says jump!' Kids jump and chant 'J for Jump!'", materials: "None" },
            { name: "Alphabet Line Walk", description: "Lay letter cards A to Z in a line on the floor. Children walk along the line, saying each aloud.", materials: "Floor letter cards" },
            { name: "Fingerprint Letters", description: "Children use their fingertips dipped in paint to make dotted outlines of letters.", materials: "Paint, paper" },
            { name: "Sound Box Sorting", description: "Put small toys in a big box. Kids sort them into bowls labeled with matching starting letters.", materials: "Toys or mini objects, bowls labeled A–Z" },
            { name: "'What's My Letter?' Game", description: "Give clues like 'I begin with A and I am red.' Kids guess the object — 'Apple!'", materials: "Verbal clues (no materials needed)" },
            { name: "Alphabet Crown", description: "Each child decorates a paper crown with a letter and pictures of things that start with it.", materials: "Paper strips, glue, crayons" },
            { name: "Letter of the Day March", description: "Choose one letter each day. March around with its big cutout and chant the letter and sound.", materials: "Large letter cutout, Bluetooth speaker" }
          ],
          "Vegetables, Birds, Flowers & Ocean Animals": [
            { name: "Vegetable Basket Sorting", description: "Place two baskets on the floor: one labeled 'Green' and the other 'Red' (or 'Big' and 'Small'). Give each child a turn to pick a paper or plastic vegetable. Ask: 'What is this?' → Let child answer: 'Carrot!' (Teacher prompts if needed). Then ask: 'Where should this go? Red or Green basket?' Child places the vegetable in the correct basket. Repeat until all vegetables are sorted. Conclude by reviewing each group together.", materials: "Toy/paper vegetables, 2 baskets, colored labels (Green/Red or Big/Small)" },
            { name: "Bird Sound Guessing Game", description: "Gather children in a circle. Play a real bird sound using a Bluetooth speaker (e.g., 'cuckoo' or 'crow'). Ask: 'Which bird makes this sound?' Allow children to guess or imitate the bird's sound/movement. Show them a flashcard or picture of the correct bird. Let all children flap their arms and pretend to be that bird. Repeat with 3–5 common birds.", materials: "Bluetooth speaker, bird sounds, bird flashcards" },
            { name: "Fingerprint Flower Garden", description: "Distribute white paper to each child. Pour small amounts of paint in different colors. Demonstrate dipping a finger in paint and pressing onto the paper to make flower petals. Guide them to make 3–5 flowers with different colors. Use green color to draw stems and leaves. Let artwork dry and label each flower with teacher help (e.g., 'Sunflower' or 'My Flower').", materials: "Paint, paper, crayons or sketch pens" },
            { name: "Clay Sea Animals", description: "Show pictures of sea animals (fish, starfish, octopus, turtle). Give a small ball of colored clay to each child. Demonstrate making a simple fish shape using fingers. Guide children step by step (e.g., 'Flatten the ball to make a fish body', 'Add tail'). Let children create more animals with help. Display creations on a blue paper 'ocean.'", materials: "Clay (blue, yellow, orange), paper plate or blue chart for display" },
            { name: "Vegetable Printing with Paint", description: "Cut ladyfinger, potato, and carrot into halves. Dip cut surface in paint. Press gently on paper to make a print. Let each child try 2–3 vegetables. Ask children to identify each print (e.g., 'This is ladyfinger!'). Let the prints dry and decorate around them if time allows.", materials: "Paint, cut vegetables, paper, old newspapers (to protect the table)" },
            { name: "Feather Bird Masks", description: "Give each child a pre-cut paper circle with two holes (for eyes). Let them color and decorate it like a bird's face (peacock, owl, etc.). Paste feather cutouts or real feathers on top. Punch holes and tie a string to wear it. Children wear masks and flap like their bird.", materials: "Paper mask base, feathers, glue, crayons, elastic/string" },
            { name: "Grow a Sprout Jar", description: "Provide each child with a small transparent plastic cup or jar. Place wet cotton or tissue at the bottom. Add a few moong or chana seeds. Keep the cup near sunlight. Every day, let children observe and talk about the changes. Discuss what plants need to grow: 'water,' 'air,' 'sun.'", materials: "Jar/cup, cotton, seeds, water" },
            { name: "Bubble Wrap Fish Art", description: "Provide each child with a paper fish cutout. Give them a small square of bubble wrap and a paintbrush. Paint over the bubble wrap and press it onto the fish to create scale effect. Add eyes and fins with crayons or paper. Display finished fish on a class 'ocean wall.'", materials: "Bubble wrap, fish cutouts, paint, glue, crayons" },
            { name: "Button Flower Craft", description: "Give each child a paper flower outline. Ask them to paste a button in the center of each flower. Color the petals and stems using crayons. Let children share: 'My flower is pink!' etc.", materials: "Buttons, glue, paper flower outlines, crayons" },
            { name: "Ocean Animal Guessing Bag", description: "Place 5–6 plastic or paper cutout sea animals in a cloth bag. One child reaches in and pulls one out without showing others. They give clues: 'I have fins and swim fast.' Others guess: 'Fish!' Then reveal the animal. Rotate turns among all children.", materials: "Cloth bag, plastic or laminated sea animals" },
            { name: "Vegetable Relay Race", description: "Divide students into two groups. Place vegetable flashcards on one end of the classroom. One by one, each child runs to pick a vegetable card and says its name aloud (e.g., 'This is tomato!'). They return and tag the next child. The race continues until all cards are collected and identified.", materials: "Vegetable flashcards, open space" },
            { name: "Bird Nest Craft", description: "Show real images of bird nests. Give each child a small paper bowl or cut-out nest shape. Provide bits of brown paper, thread, and straw (or grass). Kids glue the bits onto the bowl to make their own nests. Optional: Add tiny egg cutouts inside the nest.", materials: "Paper bowls, glue, paper strips, thread, optional egg cutouts" },
            { name: "Ocean Sand Tray", description: "Fill shallow trays or boxes with clean sand. Give each child small toy fish, starfish, or shells. Children move animals around and pretend to make them swim. Teacher asks: 'Which animal do you have?' and 'Where does it live?'", materials: "Sand trays, toy ocean animals or shells" },
            { name: "Rainbow Flower Art", description: "Give each child a white flower outline on paper. Provide small pieces of colorful paper (red, yellow, blue, etc.). Kids tear and paste petals in a rainbow order. Help label the flower: stem, petal, leaf.", materials: "Flower outlines, color paper bits, glue" },
            { name: "Who Am I? Riddle Game", description: "Teacher gives verbal clues: 'I am red and round. You eat me in salad.' Children guess: 'Tomato!' Use for vegetables, birds, flowers, or sea animals. Show flashcards after each answer for visual support.", materials: "Verbal clues, flashcards (optional)" },
            { name: "Peacock Handprint Craft", description: "Children trace their hands on colored paper or directly stamp with painted palms. Arrange 3–4 handprints behind a peacock body cutout as feathers. Paste eyes and beak. Label: 'Peacock – Our National Bird.'", materials: "Paint or colored paper, peacock cutout, glue, markers" },
            { name: "Fish Toss Game", description: "Make a 'pond' using a blue mat or large blue paper. Prepare paper fish with numbers or letters written on them. Each child tosses a beanbag onto a fish. They pick it up and say: 'Fish number 4!' or 'Fish says F!'", materials: "Blue mat/paper, paper fish, beanbags" },
            { name: "Vegetable Chart Making", description: "Display a sample chart with three columns. Give cutouts or drawings of vegetables to each child. Kids come up one by one and paste each vegetable in the correct category. Teacher names them aloud while pasting.", materials: "Chart paper, vegetable cutouts, glue" },
            { name: "Fly Like a Bird Movement Game", description: "Announce a bird (e.g., sparrow). All children flap small and fast like sparrows. Next, say 'Eagle!' — children glide with arms stretched. Continue with more birds like 'Duck' (waddle), 'Parrot' (squawk). End with everyone freezing like sleeping birds.", materials: "None (open space)" },
            { name: "Fish Count and Color", description: "Give each child a worksheet with fish outlines grouped in 1s, 2s, up to 5. Ask them to count fish in each group. Then color each group a different color (e.g., 'Group of 2 – use blue!'). Review answers together.", materials: "Worksheet with grouped fish, crayons" },
            { name: "Flower Walk", description: "Place artificial/paper flower cutouts all over the classroom floor (e.g., rose, sunflower, lotus). As music plays, children walk around. Pause the music — each child stops near a flower. Teacher asks: 'What flower is this?' or 'What color is it?' Continue until each child has spoken once or twice.", materials: "Flower cutouts/pics, Bluetooth speaker" },
            { name: "Sink or Float – Vegetable Edition", description: "Fill a large tub with water. Display vegetables: tomato, potato, onion, spinach, etc. Ask: 'Do you think this will float or sink?' One by one, kids drop vegetables into the tub. Teacher helps observe and discuss results: 'Tomato floats!' 'Potato sinks!'", materials: "Tub, water, variety of vegetables" },
            { name: "Ocean Dance Song", description: "Play an ocean-themed children's song (e.g., 'Baby Shark' or whale/fish movement songs). Assign each child an animal — fish, crab, dolphin, turtle. Ask children to dance like their animal. Pause music randomly — kids freeze in their animal pose. Resume with different animal roles.", materials: "Bluetooth speaker, open space" },
            { name: "Bird Feather Sorting", description: "Provide paper or craft feathers in different colors and sizes. Ask children to sort by color: 'Put all blue feathers here.' Next, sort by size: 'Short feathers in this box, long feathers in that one.' Encourage children to say the name of birds that match the feathers (e.g., 'Peacock has long feathers').", materials: "Paper/craft feathers, 2–3 containers" },
            { name: "Smell the Vegetable – Guessing Game", description: "Blindfold one child at a time. Hold a vegetable close to their nose (e.g., coriander, onion, mint). Ask: 'What does this smell like?' After guessing, remove the blindfold and show the answer. Applaud correct answers and assist where needed.", materials: "Real leafy/smelly vegetables, blindfold" },
            { name: "Eggshell Flower Planter", description: "Give each child a half eggshell with cotton inside. Add a few methi or mustard seeds. Let children water lightly every day. Keep on the window sill and observe growth over 4–5 days. Decorate the eggshell with smiley faces or flowers.", materials: "Eggshells, cotton, seeds, water droppers, markers" },
            { name: "Match the Shadow – Sea Animals", description: "Provide printouts with sea animal shadows (fish, crab, octopus). Give cutouts or cards of the actual colored animals. Kids match and place the animal on its correct shadow. Reinforce by naming: 'This is a crab. It has claws!'", materials: "Shadow sheets, animal cutouts/cards" },
            { name: "Beaded Flower Necklaces", description: "Provide beads and flower-shaped paper cutouts with a hole in the middle. Children thread beads and paper flowers alternately onto a string. Once completed, tie ends to form a necklace. Let children say: 'I made a rose necklace!'", materials: "Beads, string, paper flowers" },
            { name: "Vegetable Dance Rhyme", description: "Play a vegetable-themed rhyme like 'I'm a Tomato, Round and Red.' Children sing and act like each vegetable (rolling, hopping, stretching). Pause and ask: 'Who can show how a carrot moves?' Encourage imagination and fun.", materials: "Bluetooth speaker, rhyme track" },
            { name: "Bird & Nest Matching Game", description: "Provide picture cards of birds (e.g., pigeon, sparrow, eagle). Provide nest cards – tree nest, balcony nest, mountain cliff nest. Children match each bird to its nest. Teacher explains: 'Eagles build nests on cliffs.'", materials: "Bird cards, nest cards" },
            { name: "Veggie Puppet Talk", description: "Give each child a simple stick puppet of a vegetable (tomato, carrot, brinjal, etc.). Children take turns coming forward to introduce themselves using the puppet. Example: 'Hello! I'm Carrot. I am orange. I help your eyes.' Teacher prompts if needed and encourages full sentences. Applaud each child after their talk.", materials: "Vegetable cutouts, ice cream sticks, glue, crayons" },
            { name: "Fish Number Trail", description: "Place numbered paper fish (1–10) in a winding trail on the floor. Each child walks along the trail, stepping on one fish at a time. As they step, they say the number aloud. Add variations like: 'Clap on number 5!' or 'Jump on number 2!'", materials: "Paper fish numbered 1–10" },
            { name: "Flower Petal Counting", description: "Give each child a flower center (a circle) glued to paper. Ask them to count and paste the correct number of petal cutouts around it. E.g., 'Paste 6 petals around your flower.' Help children count and adjust as needed.", materials: "Colored petal cutouts, glue, paper" },
            { name: "Bird Watching Corner", description: "Set up a small classroom display with pictures or toys of common birds (sparrow, parrot, crow, etc.). Children visit in small groups. Each child chooses one bird and says: 'This is a parrot. It is green.' Use binocular toys for pretend 'bird watching.'", materials: "Bird pictures or toys, small area for display, optional toy binoculars" },
            { name: "Sea Animal Memory Game", description: "Make pairs of cards with pictures of sea animals. Lay all cards face down. Children take turns flipping two cards at a time to find a match. If matched, they say: 'This is a turtle!' and keep the pair. If not, cards go back face-down.", materials: "Sea animal picture cards (pairs)" },
            { name: "Bird Song Freeze", description: "Play bird sounds/music using a Bluetooth speaker. Children flap arms, hop, or glide around like birds. When the music stops, they must freeze like a bird statue. Repeat and vary speed or sounds (owl hoot, crow caw).", materials: "Bluetooth speaker, bird sound/music file" },
            { name: "Vegetable Patterning", description: "Draw or place vegetable cutouts in a pattern (e.g., tomato, carrot, tomato, carrot…). Ask children: 'What comes next?' Give children their own strips and ask them to complete the pattern. Try harder patterns too (e.g., onion, potato, onion, potato…).", materials: "Paper cutouts of vegetables, glue, pattern strips" },
            { name: "Underwater Mural", description: "Spread a large blue chart paper on the floor or wall. Each child contributes by sticking one or more sea creatures. Encourage creativity with drawn fish, pasted shells, seaweed made from green paper. Add sand or bubble effects using white crayon or glitter.", materials: "Blue chart paper, animal cutouts, crayons, glue, paper bits" },
            { name: "Flower Show & Tell", description: "Give each child a real or paper flower (e.g., rose, marigold, sunflower). Children take turns saying: 'This is a sunflower. It is yellow.' 'It smells sweet.' Teacher models first if needed. Optional: Let kids match their flower to a flashcard.", materials: "Flowers (real or fake), flashcards (optional)" },
            { name: "Vegetable Basket Puzzle", description: "Hide picture pieces of a vegetable puzzle (e.g., 2-piece tomato, 3-piece carrot) around the room. Children search for pieces and bring them back. As a group, they assemble the puzzle and name the vegetable. Repeat for 2–3 different vegetables.", materials: "Cut-and-paste vegetable puzzles, small baskets" }
          ]
        }
      },
      {
        volume: 3,
        topics: {
          "Vowel": [
            { name: "My Name, My Vowels", description: "Children write their name and surname on the board or paper. With the teacher's help, they underline or circle all vowels (A, E, I, O, U).", materials: "Chalkboard/whiteboard, chalk/marker, name cards (optional)" },
            { name: "Vowel Sound Song Time", description: "Play and sing catchy vowel songs (e.g., 'A says /æ/ like Apple'). Children repeat sounds.", materials: "Bluetooth speaker, rhyme audio" },
            { name: "Clay Vowel Models", description: "Children roll clay to form letters A, E, I, O, U.", materials: "Clay" },
            { name: "Vowel Hunt Around the Class", description: "Hide images of vowel-starting objects. Children find and say the object name and starting vowel.", materials: "Picture cards" },
            { name: "Vowel Basket Sort", description: "Children sort picture cards or real objects into 5 baskets labeled A, E, I, O, U.", materials: "Baskets, picture cards" },
            { name: "Finger Tracing Vowels", description: "Children trace big vowel letters using their fingers or crayons.", materials: "Printed large vowel sheets" },
            { name: "Vowel Balloon Pop", description: "Teacher calls a vowel sound. Children 'pop' the correct vowel balloon taped to the wall.", materials: "Paper balloons, wall tape" },
            { name: "A for Apple Craft", description: "Children decorate a big letter A with red paper dots or buttons to make it look like an apple.", materials: "A templates, red buttons/paper" },
            { name: "Sing and Circle the Vowel", description: "Sing a word. Children circle the matching vowel on a worksheet.", materials: "Worksheets, crayons" },
            { name: "Clay Object Creation", description: "Children make objects that start with vowels like egg, inkpot, orange, using clay.", materials: "Clay" },
            { name: "Vowel Puppet Talk", description: "Use hand/finger puppets shaped like vowels. Puppets introduce their sound and one matching word.", materials: "Paper/cloth puppets" },
            { name: "Vowel Sound Matching", description: "Match vowel cards with picture cards that begin with that vowel.", materials: "Vowel and picture cards" },
            { name: "Vowel Hopscotch", description: "Draw vowel letters on the floor. Kids jump to the vowel when the sound is called.", materials: "Chalk/floor tape" },
            { name: "Button E for Elephant", description: "Children glue buttons inside a large E outline to form an elephant.", materials: "Buttons, E template, glue" },
            { name: "Cup Toss Vowel Game", description: "Label 5 paper cups with vowels. Children toss a bead/ball into the correct cup when a sound is called.", materials: "Cups, small soft balls/beads" },
            { name: "Draw One Word Per Vowel", description: "Children draw one object starting with each vowel.", materials: "Paper, crayons" },
            { name: "Vowel Spinner Wheel", description: "Spin a DIY spinner with vowels. Child says a word beginning with that vowel.", materials: "Spinner chart" },
            { name: "Vowel Train Parade", description: "Children wear headbands with vowels. Each says one word and sound in a train-style parade.", materials: "Paper strips, markers" },
            { name: "Straw Vowel Fishing", description: "Pick up vowel cards using straws and match with objects or picture bowls.", materials: "Straws, small cards" },
            { name: "Sand Tray Vowel Writing", description: "Trace vowels in sand using fingers.", materials: "Sand tray" },
            { name: "Vowel Sorting Paper Plate", description: "Use a paper plate divided into 5 parts (A-E-I-O-U) to sort mini picture cutouts.", materials: "Paper plate, cards" },
            { name: "Vowel Bingo with Sounds", description: "Play vowel sounds using a speaker. Children place tokens on matching letters.", materials: "Bingo cards, tokens, speaker" },
            { name: "Vowel Hats", description: "Each child wears a paper hat with a vowel and says one object starting with it.", materials: "Paper hats" },
            { name: "Flashcard Sing & Sound", description: "Hold up vowel flashcards and sing the vowel and matching object aloud.", materials: "Flashcards" },
            { name: "Cup Stack Vowel Challenge", description: "Stack cups labeled with vowels while saying their sound.", materials: "Cups, marker" },
            { name: "Match & Stick Vowels", description: "Match vowel letters with matching objects and stick on chart.", materials: "Cards, glue, chart" },
            { name: "Vowel Echo Game", description: "Teacher says a vowel sound. Class echoes it back 2–3 times.", materials: "None" },
            { name: "Walking on Vowel Letters", description: "Spread large printed vowel letters on the floor. Walk and speak the sound.", materials: "Paper letters" },
            { name: "Paint the Vowel", description: "Children paint vowels using finger painting or earbuds.", materials: "Paints, worksheets" },
            { name: "Freeze on the Vowel", description: "Play music. When it stops, call a vowel. Children freeze in the shape of the letter.", materials: "Bluetooth speaker" },
            { name: "Stack and Match Vowel Cups", description: "Use cups with vowel letters and cups with objects. Children match and stack correctly.", materials: "Paper cups, pictures" }
          ],
          "Vowel Story Time": [
            { name: "Vowel Mask Parade", description: "Children wear masks with A, E, I, O, or U and act out characters from the vowel stories.", materials: "Paper masks, crayons, elastic thread" },
            { name: "Vowel Sound Freeze Dance", description: "Play music. When paused, say a vowel sound. Children freeze and shout a matching word.", materials: "Bluetooth speaker" },
            { name: "Clay Character Creation", description: "Children make animals from the story (ant, owl, etc.) with clay.", materials: "Clay, mats" },
            { name: "Draw the Story Scene", description: "Kids draw a scene from one of the vowel stories.", materials: "Drawing sheet, crayons" },
            { name: "Vowel Hat Craft", description: "Create a paper hat with a vowel on it and decorate it with matching pictures.", materials: "Chart paper, glue, markers" },
            { name: "Picture Sorting Game", description: "Mix images from all 5 stories. Children sort them under the correct vowel group.", materials: "Picture cards, 5 baskets" },
            { name: "Matching Vowel Object Hunt", description: "Hide real objects or images from the stories. Children find and place them in the right vowel basket.", materials: "Toy/apple/object props, baskets" },
            { name: "Vowel Handprint Art", description: "Trace hands and write one vowel on each finger with a matching word.", materials: "Paper, crayons" },
            { name: "Straw Story Relay", description: "Pick a straw from a cup and name a word from the vowel story printed on it.", materials: "Straws, marker" },
            { name: "Stick Puppet Play", description: "Make story puppets (ant, elephant, owl, etc.) and retell stories.", materials: "Ice cream sticks, pictures, glue" },
            { name: "Vowel Bingo", description: "Children listen to vowel sounds and place buttons on matching pictures.", materials: "Bingo cards, buttons, speaker" },
            { name: "Story Circle Time", description: "Teacher reads one story daily. Children guess the vowel sound before it begins.", materials: "Printed stories" },
            { name: "Vowel Path Walk", description: "Make a floor path with vowel words. Children walk while naming the vowel and the word.", materials: "Chart paper, markers" },
            { name: "Make-a-Vowel Booklet", description: "Children paste one image per vowel in their mini storybook.", materials: "Folded A4 sheets, glue, pictures" },
            { name: "Musical Vowel Chairs", description: "Like musical chairs, but each chair has a vowel card. When music stops, name a word with your vowel.", materials: "Chairs, cards, speaker" },
            { name: "Paper Plate Vowel Wheels", description: "Make spinning wheels with vowel letters and matching objects drawn.", materials: "Paper plates, split pins" },
            { name: "Story Picture Puzzle", description: "Cut large pictures from stories into 2-3 pieces. Children assemble and name the object.", materials: "Printed images, scissors" },
            { name: "Vowel Sound Clap Game", description: "Teacher says a word. Children clap if they hear a vowel sound.", materials: "None" },
            { name: "Button Word Build", description: "Stick buttons on printed vowel words from the story.", materials: "Vowel word sheets, glue, buttons" },
            { name: "Object-to-Vowel Line Match", description: "Draw lines to match story images to the correct vowel.", materials: "Worksheet, pencils" }
          ],
          "Months of the Year": [
            { name: "Months of the Year Song & Actions", description: "Play a catchy 'Months of the Year' song and teach students simple hand or body actions for each month.", materials: "Bluetooth speaker" },
            { name: "Paper Chain Calendar", description: "Make a colorful chain of 12 links, one for each month. Children help decorate each link with seasonal drawings.", materials: "Colored paper strips, stapler/glue" },
            { name: "Month-by-Month Picture Wall", description: "Create a class wall chart with a row for each month. Add child drawings (e.g., kites for Jan, rain for July).", materials: "Chart paper, crayons" },
            { name: "Birthday Month Match-Up", description: "Children tell their birth month and stick their photo on a big birthday month chart.", materials: "Photos, birthday chart" },
            { name: "Clap the Month", description: "Clap once for each month name as you say it. Slow in the beginning, then faster.", materials: "None" },
            { name: "Month Sorting Cups", description: "Label paper cups with each month. Children sort matching pictures (e.g., snow for December) into the right cup.", materials: "Cups, picture cutouts" },
            { name: "Seasons & Months Circle", description: "Draw a large circle showing months in order, grouped into seasons. Children color and decorate it.", materials: "Chart paper, crayons" },
            { name: "Clay Month Letters", description: "Children make the first letter of each month using clay.", materials: "Clay" },
            { name: "Month Hopscotch", description: "Write month names on the floor. Children jump month-by-month in order.", materials: "Floor tape or chalk" },
            { name: "Story Time: The Month Train", description: "Tell a short story of 12 train bogies, each named after a month, traveling through a year.", materials: "Toy train/drawings" },
            { name: "Months Puzzle Match", description: "Cut apart a month chart. Children assemble it like a puzzle in the correct order.", materials: "Month chart printout, scissors" },
            { name: "Birthday Song by Month", description: "Sing a 'Happy Birthday' song for each child in their birth month while showing a visual calendar.", materials: "Birthday chart, speaker (optional)" },
            { name: "Draw Your Favorite Month", description: "Children draw what they like best about their favorite month (e.g., Holi in March).", materials: "Drawing sheet, crayons" },
            { name: "Month-of-the-Year Garland", description: "Make a class garland with month name cards strung together with thread or ribbon.", materials: "Thread, paper, glue" },
            { name: "Month Memory Game", description: "Use month cards turned upside down. Pick two and match them in order (e.g., Jan → Feb).", materials: "Month flashcards" },
            { name: "Paint the Month", description: "Assign one month per child and ask them to finger-paint a theme (snow, sun, rain, etc.).", materials: "Paints, paper" },
            { name: "Vowel Search in Month Names", description: "Children circle vowels in the names of months written on paper.", materials: "Worksheet, pencils" },
            { name: "Month Sound Train", description: "Say a month; children respond with the next one. Do it in a rhythm like a 'choo-choo' sound.", materials: "None" },
            { name: "Calendar of Me", description: "Children make a simple monthly calendar and add their photo to their birth month.", materials: "Calendar template, glue" },
            { name: "Flashcard Vowel Jump (Month Edition)", description: "Lay out month flashcards. Teacher calls a month. Children jump to it and say a word that happens in that month.", materials: "Month flashcards" }
          ]
        }
      }
    ],
    maths: [
      {
        volume: 1,
        topics: {
          "Numbers 1-10": [
            { name: "Number Hopscotch", description: "Draw a hopscotch grid with numbers 1-10 on the floor. Children hop on each number while counting aloud. This helps them learn number sequence and recognition.", materials: "Chalk, floor space" },
            { name: "Number Tower Building", description: "Give children blocks with numbers 1-10 written on them. Ask them to stack the blocks in order from 1 to 10. Count together as they build.", materials: "Numbered blocks" },
            { name: "Number Finger Painting", description: "Children dip their fingers in paint and make the correct number of dots on paper. Write the number next to the dots. Count the dots together.", materials: "Paint, paper, number cards" },
            { name: "Number Matching Game", description: "Create cards with numbers 1-10 and corresponding picture cards with objects. Children match the number card with the correct number of objects.", materials: "Number cards, picture cards" },
            { name: "Number Song and Dance", description: "Sing a counting song from 1 to 10 with hand movements. Children follow along and count on their fingers. Make it fun with jumping or clapping.", materials: "Bluetooth speaker (optional)" },
            { name: "Number Hunt", description: "Hide number cards 1-10 around the classroom. Children find them and arrange them in order. Count together as they collect the cards.", materials: "Number cards" },
            { name: "Number Stamping", description: "Provide number stamps and ink pads. Children stamp numbers 1-10 on paper in order. Count aloud as they stamp each number.", materials: "Number stamps, ink pads, paper" },
            { name: "Number Bead Stringing", description: "Give children beads and string. Ask them to string the correct number of beads for each number 1-10. Count the beads together.", materials: "Beads, string, number cards" },
            { name: "Number Drawing", description: "Children draw the correct number of objects (like 3 apples, 5 stars) on paper. Write the number next to their drawing.", materials: "Paper, crayons, number cards" },
            { name: "Number Memory Game", description: "Create pairs of number cards. Place them face down. Children take turns flipping two cards to find matching numbers.", materials: "Number cards" },
            { name: "Number Jumping", description: "Place number cards 1-10 on the floor in a line. Children jump from one number to the next in order, counting aloud.", materials: "Number cards, floor space" },
            { name: "Number Collage", description: "Children cut out numbers 1-10 from magazines or printouts. They glue them in order on a large paper. Count together.", materials: "Magazines, glue, large paper" },
            { name: "Number Tracing", description: "Provide worksheets with dotted numbers 1-10. Children trace each one while saying it aloud. Reinforce that these letters begin names and sentences.", materials: "Tracing sheets, pencils" },
            { name: "Number Button Sorting", description: "Give children buttons and number cards. They place the correct number of buttons next to each number card.", materials: "Buttons, number cards" },
            { name: "Number Story Time", description: "Read a counting book that goes from 1 to 10. Point to each number and count the objects on each page together.", materials: "Counting book" },
            { name: "Number Playdough", description: "Children roll playdough into the shape of numbers 1-10. Count aloud as they form each number.", materials: "Playdough, number cards" },
            { name: "Number Bingo", description: "Create bingo cards with numbers 1-10. Call out numbers randomly. Children mark the numbers they hear.", materials: "Bingo cards, markers" },
            { name: "Number Movement Game", description: "Call out a number 1-10. Children move that many steps forward, backward, or in circles. Count steps together.", materials: "Open space" },
            { name: "Number Sticker Book", description: "Give children sticker books with numbers 1-10. They add stickers to match each number. Count the stickers together.", materials: "Sticker books, stickers" },
            { name: "Number Sound Game", description: "Clap, tap, or stomp the correct number of times for each number 1-10. Children count the sounds and identify the number.", materials: "None needed" }
          ],
          "Shapes and Colors": [
            { name: "Shape Hunt", description: "Ask children to find objects of different shapes (circle, square, triangle, rectangle) around the classroom. Sort them by shape and discuss the properties.", materials: "Classroom objects" },
            { name: "Color Sorting", description: "Provide objects of different colors. Children sort them into color groups. Name each color and count objects in each group.", materials: "Colored objects" },
            { name: "Shape Drawing", description: "Children draw different shapes on paper. Help them name each shape and discuss how many sides and corners each has.", materials: "Paper, crayons" },
            { name: "Color Mixing", description: "Use primary colors (red, blue, yellow) and let children mix them to create new colors. Discuss what happens when colors are mixed.", materials: "Paint, mixing trays" },
            { name: "Shape Stamping", description: "Provide shape stamps and ink pads. Children stamp different shapes and name them. Count the shapes they make.", materials: "Shape stamps, ink pads, paper" },
            { name: "Color Matching Game", description: "Create cards with colors and matching colored objects. Children match the color card with the correct colored object.", materials: "Color cards, colored objects" },
            { name: "Shape Building", description: "Give children blocks of different shapes. Ask them to build structures using specific shapes. Discuss the shapes they use.", materials: "Shape blocks" },
            { name: "Color Scavenger Hunt", description: "Children find objects of specific colors around the classroom. Collect them and count how many of each color they found.", materials: "Classroom objects" },
            { name: "Shape Collage", description: "Children cut out shapes from colored paper and glue them to create a picture. Name each shape and color as they work.", materials: "Colored paper, scissors, glue" },
            { name: "Color Sorting Baskets", description: "Provide baskets labeled with different colors. Children sort small objects into the correct color baskets.", materials: "Colored baskets, small objects" },
            { name: "Shape Tracing", description: "Give children shape tracing worksheets. They trace different shapes while naming them. Count sides and corners.", materials: "Tracing worksheets, pencils" },
            { name: "Color Painting", description: "Children paint pictures using specific colors. Discuss the colors they choose and what they're painting.", materials: "Paint, paper, brushes" },
            { name: "Shape Memory Game", description: "Create pairs of shape cards. Place them face down. Children take turns flipping cards to find matching shapes.", materials: "Shape cards" },
            { name: "Color Dance", description: "Play music and call out different colors. Children dance and point to objects of that color in the room.", materials: "Bluetooth speaker" },
            { name: "Shape Sorting", description: "Provide shape sorting toys or containers. Children sort shapes into the correct holes or containers.", materials: "Shape sorting toys" },
            { name: "Color Mixing with Water", description: "Use food coloring in water. Let children mix different colors and observe the changes. Discuss the new colors created.", materials: "Water, food coloring, clear containers" },
            { name: "Shape Pattern Making", description: "Children create patterns using different shapes. For example: circle, square, circle, square. Continue the pattern.", materials: "Shape cutouts" },
            { name: "Color Bingo", description: "Create bingo cards with different colors. Call out color names. Children mark the colors they hear.", materials: "Color bingo cards, markers" },
            { name: "Shape Building with Sticks", description: "Use craft sticks to create shapes. Children arrange sticks to form triangles, squares, and rectangles.", materials: "Craft sticks" },
            { name: "Color Story Time", description: "Read a book about colors. Point to different colored objects and ask children to name the colors.", materials: "Color book" },
            { name: "Shape and Color Matching", description: "Create cards with shapes in different colors. Children match shapes that are the same color or the same shape.", materials: "Shape and color cards" }
          ],
          "Counting and Sorting": [
            { name: "Object Counting", description: "Give children a variety of small objects (buttons, beads, blocks). Ask them to count objects in different groups. Practice counting from 1 to 10.", materials: "Small objects (buttons, beads, blocks)" },
            { name: "Sorting by Size", description: "Provide objects of different sizes. Children sort them into big, medium, and small groups. Count objects in each group.", materials: "Objects of different sizes" },
            { name: "Counting with Fingers", description: "Children use their fingers to count from 1 to 10. Practice counting objects by pointing and counting on fingers.", materials: "None needed" },
            { name: "Sorting by Type", description: "Give children mixed objects (animals, vehicles, food). They sort them into different categories and count each group.", materials: "Mixed object sets" },
            { name: "Counting Steps", description: "Children take a certain number of steps forward, backward, or in circles. Count each step aloud together.", materials: "Open space" },
            { name: "Sorting by Color", description: "Provide objects of different colors. Children sort them by color and count how many of each color they have.", materials: "Colored objects" },
            { name: "Counting Claps", description: "Clap a certain number of times. Children count the claps and tell you the number. Then they clap that many times.", materials: "None needed" },
            { name: "Sorting by Shape", description: "Give children objects of different shapes. They sort them by shape and count objects in each shape group.", materials: "Shape objects" },
            { name: "Counting Jumping", description: "Children jump a specific number of times. Count each jump aloud. Practice counting while moving.", materials: "Open space" },
            { name: "Sorting by Texture", description: "Provide objects with different textures (smooth, rough, soft). Children sort them and count objects in each texture group.", materials: "Textured objects" },
            { name: "Counting with Beads", description: "Children string beads on a string, counting each bead as they add it. Practice counting from 1 to 10.", materials: "Beads, string" },
            { name: "Sorting by Weight", description: "Give children objects of different weights. They sort them into light and heavy groups. Discuss the differences.", materials: "Objects of different weights" },
            { name: "Counting with Blocks", description: "Children build towers with a specific number of blocks. Count each block as they stack it.", materials: "Blocks" },
            { name: "Sorting by Sound", description: "Provide objects that make different sounds. Children sort them and count objects in each sound group.", materials: "Sound-making objects" },
            { name: "Counting with Stickers", description: "Children place stickers on paper, counting each sticker as they add it. Write the number next to the stickers.", materials: "Stickers, paper" },
            { name: "Sorting by Use", description: "Give children objects used for different purposes (eating, playing, writing). They sort them and count each group.", materials: "Objects with different uses" },
            { name: "Counting with Buttons", description: "Children place buttons on paper, counting each button as they add it. Practice counting from 1 to 10.", materials: "Buttons, paper" },
            { name: "Sorting by Material", description: "Provide objects made of different materials (wood, plastic, metal). Children sort them and count objects in each material group.", materials: "Objects of different materials" },
            { name: "Counting with Dots", description: "Children draw dots on paper, counting each dot as they draw it. Write the number next to the dots.", materials: "Paper, crayons" },
            { name: "Sorting by Pattern", description: "Give children objects with different patterns (striped, spotted, plain). They sort them and count objects in each pattern group.", materials: "Patterned objects" },
            { name: "Counting with Stamps", description: "Children stamp objects on paper, counting each stamp as they make it. Practice counting from 1 to 10.", materials: "Stamps, ink pads, paper" }
          ],
          "Simple Addition (1-5)": [
            { name: "Adding with Objects", description: "Show children 2 objects, then add 3 more. Count all objects together to find the total. Write the addition: 2 + 3 = 5.", materials: "Small objects (blocks, buttons)" },
            { name: "Adding with Fingers", description: "Hold up 2 fingers on one hand and 3 on the other. Count all fingers to find the total. Practice different combinations.", materials: "None needed" },
            { name: "Adding with Pictures", description: "Show picture cards with different numbers of objects. Add two groups together and count the total.", materials: "Picture cards with objects" },
            { name: "Adding with Blocks", description: "Children build two towers with different numbers of blocks. Then combine them and count the total blocks.", materials: "Blocks" },
            { name: "Adding with Beads", description: "Children string 2 beads, then add 3 more beads. Count all beads to find the total. Practice different combinations.", materials: "Beads, string" },
            { name: "Adding with Stickers", description: "Children place 2 stickers on paper, then add 3 more stickers. Count all stickers to find the total.", materials: "Stickers, paper" },
            { name: "Adding with Buttons", description: "Children place 2 buttons in one group, then add 3 buttons to another group. Count all buttons together.", materials: "Buttons" },
            { name: "Adding with Dots", description: "Children draw 2 dots, then add 3 more dots. Count all dots to find the total. Write the addition.", materials: "Paper, crayons" },
            { name: "Adding with Stamps", description: "Children stamp 2 objects, then add 3 more stamps. Count all stamps to find the total.", materials: "Stamps, ink pads, paper" },
            { name: "Adding with Toys", description: "Children place 2 toys in one group, then add 3 toys to another group. Count all toys together.", materials: "Small toys" },
            { name: "Adding with Food Items", description: "Use small food items like crackers or grapes. Children count 2 items, then add 3 more. Count the total.", materials: "Small food items" },
            { name: "Adding with Paper Shapes", description: "Children place 2 paper shapes, then add 3 more shapes. Count all shapes to find the total.", materials: "Paper shapes" },
            { name: "Adding with Building Blocks", description: "Children stack 2 blocks, then add 3 more blocks. Count all blocks in the tower.", materials: "Building blocks" },
            { name: "Adding with Counting Bears", description: "Children place 2 counting bears, then add 3 more bears. Count all bears together.", materials: "Counting bears" },
            { name: "Adding with Pom Poms", description: "Children place 2 pom poms, then add 3 more pom poms. Count all pom poms to find the total.", materials: "Pom poms" },
            { name: "Adding with Craft Sticks", description: "Children place 2 craft sticks, then add 3 more sticks. Count all sticks together.", materials: "Craft sticks" },
            { name: "Adding with Cotton Balls", description: "Children place 2 cotton balls, then add 3 more cotton balls. Count all cotton balls to find the total.", materials: "Cotton balls" },
            { name: "Adding with Paper Clips", description: "Children place 2 paper clips, then add 3 more paper clips. Count all paper clips together.", materials: "Paper clips" },
            { name: "Adding with Rubber Bands", description: "Children place 2 rubber bands, then add 3 more rubber bands. Count all rubber bands to find the total.", materials: "Rubber bands" },
            { name: "Adding with Marbles", description: "Children place 2 marbles, then add 3 more marbles. Count all marbles together.", materials: "Marbles" },
            { name: "Adding with Shells", description: "Children place 2 shells, then add 3 more shells. Count all shells to find the total.", materials: "Shells" }
          ],
          "Odd One Out": [
            { name: "Odd One Out with Buttons", description: "Place four buttons in a row — three of one color and one of another. Ask children to point out the one that looks different and explain why it's the odd one out.", materials: "Buttons of different colors" },
            { name: "Odd One Out Picture Cards", description: "Show children four picture cards — three showing the same object (like cats), and one different (like a dog). Ask them to choose the odd one and explain their choice.", materials: "Picture cards" },
            { name: "Odd One Out Fruit Sorting", description: "Put three apples and one banana in a basket. Ask the children to pick out the fruit that doesn't belong and explain how it's different.", materials: "Real or plastic fruits" },
            { name: "Color Pattern Odd One Out", description: "Arrange a row of colored strips or beads in a pattern (e.g., red, red, blue, red). Let children find and name the odd color.", materials: "Colored paper strips or beads" },
            { name: "Shape Odd One Out", description: "Show children four shapes — three circles and one square. Ask them to find the one that's different and explain why.", materials: "Paper cutout shapes" },
            { name: "Odd One Out with Clay", description: "Make four clay balls — three of one color and one of a different color. Children find and describe the odd one.", materials: "Colored clay" },
            { name: "Odd One Out Threading", description: "Thread beads onto a string — three red beads and one green. Ask children to spot the one that doesn't match.", materials: "Beads, string" },
            { name: "Odd One Out Sound", description: "Play three similar animal sounds (e.g., meows) and one different (e.g., bark). Children listen and identify the odd one.", materials: "Bluetooth speaker, sound clips" },
            { name: "Odd One Out in a Line", description: "Line up four balls — three large and one small. Ask children to find and describe the different one.", materials: "Plastic balls" },
            { name: "Odd One Out with Sticks", description: "Show three short sticks and one long one. Children point out the odd one and describe the difference.", materials: "Sticks of varying lengths" },
            { name: "Odd One Out Picture Story", description: "Show a sequence of four images — three of birds and one of a fish. Children pick the one that's different.", materials: "Picture cards" },
            { name: "Odd One Out Paper Plate", description: "Attach three buttons and one bead onto a paper plate. Ask children which object is different and why.", materials: "Paper plate, buttons, bead" },
            { name: "Odd One Out Collage", description: "Provide four fabric scraps — three of one color, one of a different color. Children paste them on paper and identify the odd one.", materials: "Fabric scraps, glue, paper" },
            { name: "Odd One Out with Straws", description: "Group four straws — three short, one long. Ask children to spot and describe the odd one.", materials: "Colored straws" },
            { name: "Odd One Out Ball Game", description: "Roll four plastic balls — three large and one small. Children identify the one that's different in size.", materials: "Plastic balls" },
            { name: "Odd One Out Clay Impressions", description: "Press shape cutters into clay — make three circle impressions and one square. Ask children to identify the different shape.", materials: "Clay, shape cutters" },
            { name: "Odd One Out Drawing", description: "Draw four apples — three red and one green. Let children find the apple that's different and discuss the color.", materials: "Paper, crayons" },
            { name: "Odd One Out Basket", description: "Place four toys in a basket — three of the same kind and one different. Ask children to pick and name the odd toy.", materials: "Small toys" },
            { name: "Odd One Out Sound Walk", description: "Play three similar sounds and one different while walking with children. They listen and identify the odd sound.", materials: "Bluetooth speaker" },
            { name: "Odd One Out with Paper Cups", description: "Set up four paper cups — three upside down, one right side up. Ask which one is different and why.", materials: "Paper cups" },
            { name: "Odd One Out Stick Puppets", description: "Create four stick puppets — three with the same face, one with a different expression. Ask children to find the odd puppet.", materials: "Paper, sticks, glue, coloring materials" },
            { name: "Odd One Out Counting", description: "Show four beads — three red, one blue. Ask children to find the bead that's different in color.", materials: "Beads" },
            { name: "Odd One Out Texture", description: "Present four objects — three soft and one rough. Ask children to touch and tell which one feels different.", materials: "Cloth, sponge, other textured items" },
            { name: "Odd One Out Shape Hunt", description: "Hide four shapes around the room — three triangles and one square. Children find and name the shape that doesn't belong.", materials: "Paper shapes" },
            { name: "Odd One Out Card Game", description: "Use a set of cards — three showing similar items, and one different. Children pick the odd one and explain their choice.", materials: "Picture cards" }
          ],
          "Same and Different": [
            { name: "Clay Shape Match", description: "Children use clay to make two same shapes (like two circles), and then one different shape (like a triangle). They place all three in a row and talk about which ones are the same and which one is different.", materials: "Clay" },
            { name: "Sock Sorting", description: "Place two pairs of matching socks and one odd sock in front of children. They match the socks that are the same and pick out the one that doesn't belong. Discuss patterns, color, and size.", materials: "Clean socks (pairs and singles)" },
            { name: "Button Grouping", description: "Children receive four buttons — three that are alike and one that is different in color or size. They choose the one that doesn't match and explain their reasoning.", materials: "Buttons of different colors and sizes" },
            { name: "Color Match Puzzle", description: "Provide colored cards in pairs — three matching and one mismatched pair. Children find the matching pairs and identify the one that's different.", materials: "Colored paper cards" },
            { name: "Straw Sorting", description: "Give children four straws — three identical and one that differs in size or color. They group the similar ones and describe the different one.", materials: "Plastic straws in different colors/sizes" },
            { name: "Same Sound Game", description: "Play three similar sounds (e.g., bird chirps) and one different (e.g., dog bark). Children listen and raise their hands when they hear the odd sound.", materials: "Bluetooth speaker, recorded sounds" },
            { name: "Touch and Feel", description: "Put three soft items and one rough item into a bag. Children feel each one without looking and describe which object feels different.", materials: "Bag, cotton, sponge, sandpaper" },
            { name: "Sticker Matching", description: "Give children four stickers — three of the same design and one different. They stick them on paper and circle the odd one.", materials: "Stickers, paper" },
            { name: "Handprint Match", description: "Children make two handprints using paint, then compare them with one adult-sized handprint. They talk about which two are the same and which one is different.", materials: "Paper, paints" },
            { name: "Animal Picture Match", description: "Show four animal pictures — three of the same animal and one different. Children name each animal and point out the different one.", materials: "Animal picture cards" },
            { name: "Cup Sorting", description: "Place four paper cups — three of the same kind and one different. Children identify the odd cup and sort them into groups.", materials: "Paper cups" },
            { name: "Spoon Group", description: "Provide four spoons — three metal and one plastic (or three small and one large). Children touch and find the one that feels or looks different.", materials: "Spoons (metal and plastic)" },
            { name: "Draw the Same", description: "Draw two same objects and one different one (like two stars and a square). Children color the same ones using one color and the odd one with another.", materials: "Paper, crayons" },
            { name: "Emotion Card Match", description: "Show four emotion face drawings — three smiling and one sad or angry. Children identify the different feeling and discuss emotions.", materials: "Emotion face cards or drawings" },
            { name: "Sorting Beads", description: "Mix three small red beads and one large blue bead. Children find the bead that's different and describe why.", materials: "Beads" },
            { name: "Alphabet Matching", description: "Show four alphabet cards — three with the same letter (like uppercase A) and one different (like lowercase a or B). Children match the same ones and identify the odd one.", materials: "Alphabet cards" },
            { name: "Shape Sorting Plate", description: "Stick three circles and one square onto a paper plate. Children point out and name the odd shape.", materials: "Paper plate, paper cutouts" },
            { name: "Paper Folding", description: "Fold three papers the same way (e.g., into triangles), and one into a different shape (like a rectangle). Children compare and say which one is different.", materials: "Paper" },
            { name: "Sound Clap Game", description: "Clap three short sounds and one long one. Children listen carefully and raise their hands when they hear the different clap.", materials: "None" },
            { name: "Same & Different Collage", description: "Provide four fabric pieces — three with same color or texture and one different. Children glue them on chart paper and talk about what's different.", materials: "Chart paper, glue, fabric scraps" },
            { name: "Sock Puppet Game", description: "Make four sock puppets — three the same and one with different features. Children pick the odd one and explain what makes it different.", materials: "Socks, buttons, glue" },
            { name: "Balloon Color Check", description: "Blow up four balloons — three red and one blue. Children point out the different one and may pop or toss it for fun.", materials: "Balloons" },
            { name: "Sand Tray Letters", description: "Write three of the same letter and one different letter in a sand tray. Children trace each letter and say which one doesn't match.", materials: "Tray, sand" },
            { name: "Toy Sorting", description: "Present four toys — three of the same type (like animals) and one different (like a car). Children separate the odd one and explain their choice.", materials: "Small toys" },
            { name: "Fruit Matching", description: "Show four fruits — three apples and one orange. Children name the fruits and say which one looks different, discussing color, shape, or taste.", materials: "Real or pretend fruits" }
          ],
          "Heavy and Light": [
            { name: "Bucket Balancing", description: "Hang two small buckets on either side of a hanger placed on a stand. Fill one with a heavy item like a stone and the other with a light item like cotton. Children observe which side goes down and discuss why.", materials: "Hanger, string, buckets, cotton, stones" },
            { name: "Hand Weighing", description: "Give a stone in one hand and a crumpled paper ball in the other. Ask children to raise both hands and feel which is heavier or lighter.", materials: "Stone, crumpled paper" },
            { name: "Sorting Game", description: "Create a large chart or mat labeled 'Heavy' and 'Light.' Children walk around the classroom picking objects and placing them in the correct category.", materials: "Classroom items" },
            { name: "Balloon and Book", description: "Give each child a balloon and a book. Ask them to lift both and tell which one is lighter and which is heavier.", materials: "Balloon, book" },
            { name: "Sand vs Feather Tray", description: "Fill one tray with sand and another with feathers or cotton. Let children lift both trays and identify which is heavier.", materials: "Trays, sand, feathers" },
            { name: "Rolling Test", description: "Roll a plastic ball and a heavier metal object. Children observe which rolls faster and which feels heavier when picked up.", materials: "Plastic ball, metal object" },
            { name: "Paint & Paste Chart", description: "Provide cut-out pictures of light and heavy items (e.g., feather, elephant). Children paste them onto a chart in the correct section.", materials: "Printed pictures, glue, chart paper" },
            { name: "Spoon Lifting", description: "Place marbles in one spoon and pom-poms in another. Children lift both and say which is heavier and why.", materials: "Spoons, marbles, pom-poms" },
            { name: "Floating Game", description: "Show two objects—one that floats (e.g., plastic cup) and one that sinks (e.g., stone). Let children guess, then test in water.", materials: "Bowl of water, cup, stone" },
            { name: "Water Bottle Comparison", description: "Give one full and one empty water bottle. Children hold both and compare their weight.", materials: "2 water bottles (one filled, one empty)" },
            { name: "Crayon & Chart Paper", description: "Ask children to color a picture of a heavy object like a truck in red and a light object like a leaf in yellow.", materials: "Chart paper, crayons" },
            { name: "Clay Object Weighing", description: "Children make one large and one small object from clay. Then they compare which feels heavier.", materials: "Clay" },
            { name: "Backpack Game", description: "Prepare two backpacks—one filled with books and one with soft toys. Children carry both and discuss the difference in weight.", materials: "Two school bags, books, soft toys" },
            { name: "Ball Weight Match", description: "Give each child a plastic ball and a rubber ball. Ask them to bounce and lift each, noticing the weight difference.", materials: "Balls of different weights" },
            { name: "Paper Dish Drop", description: "Drop a paper plate and a metal lid from the same height. Ask children which falls faster and talk about why.", materials: "Paper plate, metal lid" },
            { name: "Balloon Balance", description: "Blow up two balloons—one big, one small. Let children hold and bounce them, noticing how light both feel.", materials: "Balloons" },
            { name: "Spoon Race (Light Items)", description: "Children place a light object like a cotton ball or bead on a spoon and walk a short distance. They learn how easily light objects fall.", materials: "Spoon, cotton balls or beads" },
            { name: "Music Sound Weight", description: "Play two types of music using a speaker—light sounds like chimes and heavy beats like drums. Children move differently to each rhythm.", materials: "Bluetooth speaker" },
            { name: "Vegetable Sorting", description: "Give children various vegetables. Ask them to lift and sort into 'Heavy' (like potatoes) and 'Light' (like tomatoes).", materials: "Real vegetables" },
            { name: "Toy Weighing Table", description: "Place a variety of toys on a table. Children lift each and place it under a 'Heavy' or 'Light' label.", materials: "Toys, sorting chart" },
            { name: "Handbag Surprise", description: "Fill two small handbags—one with heavier items and one with lighter ones. Let children guess which bag is heavier before opening.", materials: "Handbags, assorted objects" },
            { name: "Bead String Weight", description: "Provide one thread filled with many beads and one with just a few. Children hold both and feel which is heavier.", materials: "Thread, beads" },
            { name: "Paint the Big & Small", description: "Ask children to paint one big, heavy object (like a bus) and one small, light object (like a feather), using different colors.", materials: "Paints, paper" },
            { name: "Push & Compare", description: "Let children try pushing a table and then a chair. Ask which one was harder to move and talk about the reason.", materials: "Table, chair" },
            { name: "Teacher-Helper Activity", description: "The teacher holds a heavy book and a child holds a light paper. Together, they show the group and discuss how the items feel different.", materials: "Book, paper" }
          ]
        }
      },
      {
        volume: 2,
        topics: {
          "Numbers 11–30": [
            { name: "Button Tower Counting (11–30)", description: "Give each child a number card (from 11–30). Ask them to count and stack the correct number of buttons vertically like a tower. Once built, they say aloud: 'This is 13 buttons!'", materials: "Number cards, buttons (or bottle caps)" },
            { name: "Hop & Count Mats", description: "Stick number flashcards (11–30) in a line on the floor. Play music and let kids hop on numbers in sequence. Pause music, ask: 'Where are you standing?' Child replies: 'Number 18!'", materials: "Flashcards, Bluetooth speaker" },
            { name: "Bead Necklace Counting", description: "Give each child a yarn thread and a number (e.g., 15). They count and string that many beads onto the thread. Teacher checks and says the number aloud together.", materials: "Beads, string/yarn, number flashcards" },
            { name: "Number Hunt (11–30)", description: "Hide number flashcards around the room (11–30). Children search for a number and stick it on a chart in the correct order. Teacher reads them aloud with children.", materials: "Number cards, glue stick, wall chart" },
            { name: "Spoon & Button Count Race", description: "Each child picks a number between 11–30. They use a spoon to carry that many buttons from a bowl to a cup. Count aloud when done.", materials: "Spoons, buttons, cups, number flashcards" },
            { name: "Straws in Cups Game", description: "Write numbers 11–30 on paper cups. Children place that many straws in each cup. Teacher checks by counting together.", materials: "Paper cups, straws, markers" },
            { name: "Number Train Assembly", description: "Give train engine and 20 blank coaches. Children write or paste numbers 11–30 in sequence on coaches. Assemble into a number train.", materials: "Paper train parts, glue, markers" },
            { name: "Rolling Dice Addition (Make 11–30)", description: "Roll two dice. Add numbers — e.g., 5 + 6 = 11. Find and color the number on a worksheet.", materials: "Dice, number chart or worksheet, crayons" },
            { name: "Count and Stick Pom-Poms", description: "Give a number (e.g., 17). Child counts and glues 17 pom-poms in a circle. Say the number and color them.", materials: "Pom-poms, glue, number flashcards" },
            { name: "Number Clothespin Line", description: "Hang a rope across the class. Children clip number cards 11–30 in order using clothespins.", materials: "Clothespins, number cards, rope" },
            { name: "Egg Tray Match", description: "Fill egg tray sections with beads (11–30). Give number cards; kids match to the correct tray.", materials: "Egg tray, beads, number cards" },
            { name: "Playdough Number Press", description: "Roll clay and use number stampers or fingers to press numbers 11–30. Trace with index finger while saying the number aloud.", materials: "Clay, number tools or fingers" },
            { name: "Footprint Number Path", description: "Place number footprints (11–30) in a path. Kids walk and say numbers as they step.", materials: "Footprint cutouts with numbers" },
            { name: "Sticker Dot Numbers", description: "Draw a large number (e.g., 14) on paper. Children fill the outline with that many sticker dots.", materials: "Paper, dot stickers, marker" },
            { name: "Clay Ball Counting (11–30)", description: "Write numbers 11–30 on paper. Kids make that many clay balls and place on the number.", materials: "Clay, number sheets" },
            { name: "Paper Chain Count", description: "Child receives a number (e.g., 22). They count and link 22 paper strips into a chain.", materials: "Paper strips, glue/stapler" },
            { name: "Number Matching Clothespins", description: "Number flashcards (11–30) are clipped onto cups. Kids drop that many sticks or buttons inside.", materials: "Clothespins, cups, sticks/buttons" },
            { name: "Number Bean Bag Toss", description: "Arrange number mats on the floor (11–30). Kids toss a bean bag and shout the number it lands on.", materials: "Number mats, bean bag" },
            { name: "Dot Marker Number Art", description: "Give dotted outline of a number. Kids fill it using paint dot markers (e.g., 13 dots for 13).", materials: "Dot markers, number outlines" },
            { name: "Number Wheel Spin & Color", description: "Create a spin wheel with numbers 11–30. Child spins, identifies number, and colors it on their sheet.", materials: "Paper spinner, coloring sheets" },
            { name: "Crayon Count Race", description: "Each child picks a number card (e.g., 25). They run and collect 25 crayons and place in a box. Count aloud with teacher.", materials: "Crayons, boxes, number cards" },
            { name: "Puzzle Number Tower", description: "Give a 5-piece vertical puzzle with a missing number. Children solve and identify the complete number (e.g., 27).", materials: "Homemade number puzzles" },
            { name: "Count the Balloons Picture", description: "Give worksheet with 11–30 balloons in clusters. Kids count and color balloons for each number.", materials: "Worksheet, crayons" },
            { name: "Match Me Dominoes (11–30)", description: "Create domino-style cards with numbers and dots (e.g., 12 on one side, 12 dots on the other). Kids match dots to numbers.", materials: "Domino cards with numbers and dot quantities" },
            { name: "Water Drop Count Game", description: "Children hold a spoon and 'pour' drops (e.g., 16) into a cup. Count each loudly. Teacher checks: 'Great! That's 16 water drops!'", materials: "Spoon, water/small beads, cups" }
          ],
          "Thick and Thin": [
            { name: "Straw Compare", description: "Give each child one thick and one thin straw. Ask: 'Which one is thicker? Which one is thinner?' Let them hold both and compare. Children place the thick straw on the left and thin on the right in their mat space.", materials: "Thick and thin straws" },
            { name: "Button Sort", description: "Mix thick and thin buttons in a tray. Label two bowls: 'Thick' and 'Thin'. Children pick and drop buttons in the correct bowl after feeling them.", materials: "Mixed buttons, 2 bowls" },
            { name: "Paper Strip Match", description: "Provide chart with outlines – one thick, one thin. Give cut paper strips of different widths. Children match and paste the correct strip on the matching outline.", materials: "Chart paper, paper strips, glue" },
            { name: "Crayon Hunt", description: "Ask children to find two crayons – one thick, one thin – from their crayon box. Place both in front and say aloud: 'This crayon is thick. This is thin.'", materials: "Crayon box" },
            { name: "Paint Stick Stamp", description: "Dip one thick stick and one thin stick in paint. Stamp both on white paper. Ask children to observe: 'Which is thicker?'", materials: "Thick and thin sticks, paint, paper" },
            { name: "Thick/Thin Clay Shapes", description: "Ask children to roll two clay snakes – one thick, one thin. Place both on a sheet. Label with the words 'THICK' and 'THIN'. Teacher helps pronounce the words.", materials: "Clay, paper" },
            { name: "Match the Pencil", description: "Place 3 thick pencils and 3 thin pencils on a table. Ask children to group them: thick ones in one cup, thin in another. Count and compare which group has more.", materials: "Pencils, paper cups" },
            { name: "Spoon Width Game", description: "Mix thin and thick plastic/wooden spoons in a tray. Ask: 'Can you find a thin spoon?' Let child feel and choose. Then switch and ask for a thick spoon.", materials: "Spoons" },
            { name: "Ribbon Sorting", description: "Hand over ribbons of different widths. Stick a chart with 'THICK' and 'THIN' columns. Child pastes ribbons under correct column.", materials: "Ribbon pieces, chart, glue" },
            { name: "Straw Necklace", description: "Cut thick and thin straws. Give string to child and ask them to make a 'thin necklace' or a 'thick necklace.' Count and wear!", materials: "Straws, string/yarn" },
            { name: "Trace the Lines", description: "Draw thick and thin lines with a marker. Ask child to trace over them using matching color crayons. Say aloud: 'This is a thick line.'", materials: "Worksheet, crayons" },
            { name: "Fabric Strip Game", description: "Use a thick wool strip and thin thread. Ask kids to feel both and guess: 'Which is thick?' Stick both on a paper and label.", materials: "Wool, thread, glue" },
            { name: "Drum & Pencil Tap", description: "Tap on table using thick drumstick and thin pencil. Let child guess which sound is heavier (thicker object). Repeat with different objects.", materials: "Drumstick, pencil" },
            { name: "Sand Art", description: "Pour sand on a tray. Let children draw a thick line with their hand, a thin line with a finger. Compare the two.", materials: "Sand tray" },
            { name: "Book Sort", description: "Let kids choose books from shelf. Hold two books and ask: 'Which is thicker?' Stack thick books in one pile, thin in another.", materials: "Books" },
            { name: "Finger Paint Widths", description: "Dip finger and cotton bud in paint. Draw a line with each. Observe: 'This is a thick line, this is a thin line!'", materials: "Paint, cotton buds, paper" },
            { name: "Button Path", description: "Use large buttons to make a 'thick path,' small ones for 'thin path.' Move a toy along both paths and describe.", materials: "Buttons, paper toy" },
            { name: "Yarn Measurement", description: "Give children thick wool and thin string. Let them tape on paper and label: 'Thick yarn, Thin thread.'", materials: "Yarn, thread, tape" },
            { name: "Spoon Sorting Tray", description: "Give spoons of various widths. Ask child to put all 'thin' spoons in Tray A, 'thick' in Tray B.", materials: "Spoons, trays" },
            { name: "Stick Puzzle", description: "Use thick and thin popsicle sticks to create basic shapes. Match to shape outlines printed on sheet.", materials: "Sticks, outline sheets" },
            { name: "Flag with Poles", description: "Paste thick and thin sticks as poles on chart. Child selects which flag fits better (heavy flag = thick pole).", materials: "Sticks, paper flags" },
            { name: "Match the Drum", description: "Use big and small drums (or containers). Ask child to tap both and describe the sound. Link thick object = deeper sound.", materials: "Drums, containers" },
            { name: "Animal Tails", description: "Give images of lion and mouse. Ask child to paste thick yarn on lion, thin thread on mouse.", materials: "Animal pictures, yarn/thread" },
            { name: "Trace the Object", description: "Keep thick and thin objects under paper. Let child trace the outline with crayon.", materials: "Objects, paper, crayons" },
            { name: "Puppet Handle Game", description: "Make two puppets — one with thick handle (stick), one with thin. Ask child to hold both and describe which feels better.", materials: "Puppets" }
          ],
          "Before and After": [
            { name: "Number Train", description: "Lay out number cards (11–20) in a line like a train. Say: 'Here is number 14. What comes before 14?' The child places the correct number card (13) in front of it. Repeat for various numbers in the set.", materials: "Number cards 11–20" },
            { name: "Egg Tray Fill", description: "Use an egg tray with 3 slots labeled as 'Before', 'Middle', and 'After'. Place the middle number, e.g., 17. Ask: 'What comes before 17? After 17?' The child places the correct numbered balls or cutouts in the right slots.", materials: "Egg tray, paper balls with numbers" },
            { name: "Flashcard Flip", description: "Flash a card with a number (e.g., 12). Ask the child to quickly say the number before and after. Repeat this as a quick game for multiple numbers.", materials: "Flashcards" },
            { name: "Jumping Line", description: "Place number cards on the floor in sequence. Ask children to jump on a number (e.g., 16). Ask: 'Now jump on the number that comes before!' Continue by moving to 'after' too.", materials: "Floor space, number cards" },
            { name: "Clay Number Line", description: "Ask children to roll and shape numbers using clay (e.g., 13, 14, 15). Place them in a line and ask: 'What is before 14? After 14?' Let them point or reorder.", materials: "Clay" },
            { name: "Crayon Line Up", description: "Attach number tags to crayons (e.g., 11–20). Arrange them in a mixed order. Child finds a number and places crayons correctly by before and after.", materials: "Crayons, number tags" },
            { name: "Bead Sequence", description: "Make bead strings with numbered tags. Leave one bead space blank. Ask: 'Bead 15 is here, what should be before it?' Help child insert the missing tag.", materials: "String, beads, number labels" },
            { name: "Spoon Toss", description: "Place numbered bowls from 11–20 on the ground. Toss a spoon in one bowl. Ask: 'Before 18 is...?' Let them say or toss in the correct bowl.", materials: "Spoons, bowls, number labels" },
            { name: "Counting Cups", description: "Provide cups labeled with numbers. Mix up and ask children to arrange three cups in sequence. Ask them to find the before and after cups.", materials: "Cups, stickers" },
            { name: "Number Ladder Game", description: "Draw a ladder on the floor with numbers. Ask child to place toys at a number (e.g., 19). Then climb up (after) or climb down (before).", materials: "Floor chalk or masking tape, toy figure" },
            { name: "Puzzle Completion", description: "Provide puzzles with number gaps. E.g., 12 – __ – 14. Ask child to complete by choosing from number options.", materials: "Puzzle printouts, number cards" },
            { name: "Chalk Hop", description: "Write numbers 11–20 outside on the floor using chalk. Ask kids to hop to a number and shout the one before or after. Turn it into a team challenge.", materials: "Chalk, outdoor space" },
            { name: "Button Line", description: "Place buttons labeled with numbers in a line. Child picks one and identifies the button before or after. Optionally use arrows or number arrows.", materials: "Buttons, number stickers" },
            { name: "Matching Pegs", description: "Use pegs labeled 11–20. Hang pegs on a string. Give the middle peg and ask the child to add before and after pegs.", materials: "Pegs, string, number labels" },
            { name: "Stick it Right", description: "Use a chart with missing number sequences (e.g., __ 12 13). Ask child to stick the correct number using a sticker or card.", materials: "Chart, number stickers/cards" },
            { name: "Visual Number Rope", description: "Peg numbers 11–20 on a rope line. Remove one number. Child identifies which is missing and what came before or after.", materials: "String, pegs, number cards" },
            { name: "Balloon Pop Order", description: "Label balloons with numbers. Pop a balloon and ask: 'What comes before the number we just popped?' Repeat with different children.", materials: "Balloons, number stickers" },
            { name: "Toy Car Race", description: "Label toy cars with numbers. Let them race. After the race, ask: 'Which car came before car 16?'", materials: "Toy cars, number labels" },
            { name: "Roll & Answer", description: "Roll a dice. Add 10. Ask: 'What number comes after that?' Can turn into a group game.", materials: "Dice" },
            { name: "Music Pause Game", description: "Play music. When it stops, show a number. Children must quickly say the number before or after. Encourage using Bluetooth speaker for fun.", materials: "Bluetooth speaker, flashcards" },
            { name: "Peg Number Sandwich", description: "Hand over 3 clothespins. One with a number in middle (e.g., 15). Ask child to find before (14) and after (16) from set. Clip them on left and right.", materials: "Clothespins, number tags" },
            { name: "Pick the Pair", description: "Provide cards like [13, __, 15]. Child finds correct missing card from options. Say full sequence aloud.", materials: "Cards with gaps" },
            { name: "Calendar Talk", description: "Use a classroom calendar. Ask: 'What number comes before the 16th? What comes after?' Circle and mark it with smiley stickers.", materials: "Calendar, markers" },
            { name: "Button Ladder", description: "Make a vertical number ladder using buttons or stickers. Stick one number and ask child to fill in 'Before' and 'After.'", materials: "Buttons, chart paper" },
            { name: "Clay Numbers & Questions", description: "Roll clay and form 3 numbers (e.g., 14, 15, 16). Ask: 'What comes before 15?' Let child point or rearrange clay numbers accordingly.", materials: "Clay" }
          ],
          "More or Less": [
            { name: "Button Bowls", description: "Fill two bowls — one with 10 buttons, another with 5. Ask: 'Which bowl has more buttons?' Child points and says 'More!' or 'Less!' Count together to verify.", materials: "Buttons, 2 bowls" },
            { name: "Crayon Count", description: "Provide two pencil boxes — one with more crayons, one with fewer. Child opens and counts. Say: 'This box has more crayons!'", materials: "Crayons, boxes" },
            { name: "Cupcake Cups", description: "Place pom-poms inside 2 paper cups (e.g., 4 and 8). Ask child to choose the one with more. Teacher reinforces vocabulary: '8 is more than 4.'", materials: "Paper cups, pom-poms" },
            { name: "Sticker Chart Race", description: "Give two sticker charts – one with 3 stickers, one with 6. Ask: 'Which chart has more stars?' Add more to balance them.", materials: "Chart paper, stickers" },
            { name: "Clay Balls Game", description: "Ask child to roll clay balls and place 5 in one tray, 9 in another. Ask: 'Which tray has more?' Count aloud and compare.", materials: "Clay, trays" },
            { name: "Bead String Match", description: "Give two strings with 5 and 7 beads each. Ask: 'Which has more?' Extend string with fewer beads to make it equal.", materials: "Beads, string" },
            { name: "Paint Dot Fun", description: "Draw two apples. Ask children to put paint dots (fingerprints) — 3 on one, 6 on another. Ask: 'Which apple has more dots?'", materials: "Paint, chart, fingers" },
            { name: "Cereal Count", description: "Use 2 clear cups — one filled with more cereal rings. Ask: 'Which cup has more cereal?' Eat or count together.", materials: "Cereal rings, cups" },
            { name: "Building Block Tower", description: "Build two towers — one with 4 blocks, another with 7. Ask: 'Which is more?' Let child add blocks to equalize them.", materials: "Building blocks" },
            { name: "Clap & Compare", description: "Clap 3 times, then 6 times. Ask child: 'Which was more?' Repeat with different numbers.", materials: "None (teacher-led)" },
            { name: "Spoon Sorting Game", description: "Mix spoons into two trays — 5 in one, 10 in another. Ask child to point to the tray with more spoons.", materials: "Spoons, trays" },
            { name: "Straw Count Race", description: "Place 3 straws in Box A, 8 in Box B. Child checks and says which has more.", materials: "Straws, small boxes" },
            { name: "Sticker Dot Apples", description: "Draw two apples and let child put red dot stickers — more on one. Ask: 'Which apple got more stickers?'", materials: "Red stickers, chart" },
            { name: "Button Bracelet", description: "Make two bracelets using buttons — one with 6, another with 9. Ask: 'Which has more buttons?' Count out loud.", materials: "Buttons, string" },
            { name: "Vegetable Basket Count", description: "Fill one basket with 4 toy carrots, another with 8. Ask: 'Which basket has more vegetables?'", materials: "Toy vegetables, baskets" },
            { name: "Paper Clip Match", description: "Place 7 paper clips on one card, 5 on another. Ask child: 'Which card has more clips?'", materials: "Paper clips, cards" },
            { name: "Thread Bead Count", description: "Thread 6 beads on one string, 3 on another. Compare and ask: 'Which is more?'", materials: "Thread, beads" },
            { name: "Paint Drops Game", description: "Drop 3 drops of blue paint on one side, 6 on another. Ask: 'Which side has more drops?'", materials: "Paint, paper" },
            { name: "Clothespin Count", description: "Clip 10 clothespins on one string, 7 on another. Ask child to count and compare.", materials: "Clothespins, string" },
            { name: "Cup Stack Game", description: "Stack 5 cups in one tower, 8 in another. Ask child to observe and say which is more.", materials: "Paper cups" },
            { name: "Color the Bigger Group", description: "Draw two groups of shapes — e.g., 3 stars and 7 stars. Ask: 'Color the group with more stars.'", materials: "Worksheet, crayons" },
            { name: "Stamp Count", description: "Provide stamps and paper. Ask child to stamp 4 flowers on one page, 9 on another. Compare and circle the one with more.", materials: "Stamps, ink, paper" },
            { name: "Button Tummy Bear", description: "Draw two bears and stick different numbers of buttons as their tummies. Ask: 'Which bear has more buttons?'", materials: "Buttons, paper" },
            { name: "Toy Animal Count", description: "Line up 3 elephants and 6 lions. Ask: 'Which group has more animals?'", materials: "Toy animals" },
            { name: "Bluetooth Music Move", description: "Teacher plays music on Bluetooth speaker. Clap 4 times in one round, 7 in next. Children say: 'More claps!' or 'Less claps!' accordingly.", materials: "Bluetooth speaker" }
          ],
          "Up and Down": [
            { name: "Balloon Rise", description: "Blow air into a balloon and release it. Watch it fly up. Ask: 'Where did it go?' → Encourage answers: 'Up!' Repeat a few times.", materials: "Balloons" },
            { name: "Slide Play", description: "Ask children to climb a small slide or sloped surface. Say 'UP' when they climb, and 'DOWN' when they slide. Repeat with different children.", materials: "Slide/slope setup" },
            { name: "Paper Plane Flight", description: "Make paper planes. Toss them into the air. Ask: 'Is the plane going up or down?' Draw arrows on board as a visual.", materials: "Paper planes" },
            { name: "Lift the Toy", description: "Use string to pull a small toy up from the floor. Say aloud: 'Up!' Drop it gently and say: 'Down!'", materials: "Toy, string" },
            { name: "Ladder Story", description: "Show a drawing of a monkey climbing a ladder. Move the picture of the monkey up and down. Children shout: 'Up!' or 'Down!' as it moves.", materials: "Chart of ladder and monkey cutout" },
            { name: "Crayon Drop", description: "Hold a crayon in the air, drop it. Ask: 'Did the crayon go up or down?' Repeat with other objects.", materials: "Crayons, small toys" },
            { name: "Hand Movement Song", description: "Sing 'Hands Up, Hands Down' with music from Bluetooth speaker. Children raise/lower hands accordingly. Repeat with different actions (e.g., 'Chin Up', 'Sit Down').", materials: "Bluetooth speaker" },
            { name: "Toy Elevator Game", description: "Use a small box on string as an elevator. Place a toy inside, pull up. Say: 'The elevator is going up/down!'", materials: "Small box, string, toy" },
            { name: "Bouncing Ball", description: "Bounce a plastic ball. Ask: 'Is the ball going up or down?' Track direction with finger.", materials: "Ball" },
            { name: "Up & Down Chart Matching", description: "Show pictures of sun, kite, airplane (up) and rocks, shoes, bucket (down). Let children sort images under correct label: 'Up' or 'Down'.", materials: "Chart, picture cutouts" },
            { name: "Arrow Craft", description: "Give children pre-cut up and down arrows. Paste 'Up' arrows at the top of the page, 'Down' arrows at the bottom. Say directions aloud.", materials: "Arrows, glue, paper" },
            { name: "Toy Slide Race", description: "Place two toy cars at the top of a slanted book. Let them roll down. Ask: 'Which car goes down faster?'", materials: "Toy cars, thick book" },
            { name: "Clay Ladder Model", description: "Roll clay to make a simple ladder. Place a toy figure climbing up, then down. Narrate the movement.", materials: "Clay, toy figure" },
            { name: "Parachute Drop", description: "Make a small paper parachute with a string. Drop it from a height. Observe as it floats down slowly.", materials: "Paper, string" },
            { name: "Paint Brush Strokes", description: "Ask children to paint upward strokes (bottom to top) and downward strokes. Label both types.", materials: "Paint, brushes, paper" },
            { name: "Jump Up, Sit Down Song", description: "Play music with instructions: 'Jump up!', 'Sit down!'. Kids follow the movement. Turn it into a quick game.", materials: "Bluetooth speaker" },
            { name: "Flag on Stick", description: "Move a flag up and down a stick like a school assembly. Ask kids to point and say 'Up!' or 'Down!'", materials: "Stick, paper flag" },
            { name: "Cup Stack Game", description: "Stack 5 paper cups in a tall tower. Remove cups one by one, saying: 'Down, down, down!'", materials: "Paper cups" },
            { name: "Paper Butterfly Toss", description: "Toss paper butterflies into the air. Watch as they float down. Ask: 'Up or Down?'", materials: "Paper butterfly cutouts" },
            { name: "Elevator Box Roleplay", description: "Create a pretend elevator with a cardboard box. Teacher lifts box with a toy inside. Kids chant 'Going up!' or 'Going down!'", materials: "Box, toy" },
            { name: "Clay Tower Build", description: "Roll small clay balls and stack to build a tower. Say: 'Let's go up!' as we build, 'Let's go down' as we remove.", materials: "Clay" },
            { name: "Paper Zigzag Ramp", description: "Create a paper zigzag path. Slide a bead or small ball down. Observe and describe direction.", materials: "Cardboard ramp, bead" },
            { name: "Fan & Feather Game", description: "Place a feather under a handheld fan or blow on it. Watch it rise and float down. Ask: 'Is it going up or down?'", materials: "Feather, hand fan or straw" },
            { name: "Visual Storytime", description: "Show a visual story where a character climbs a hill and comes back down. Ask: 'When was he going up? When down?' Encourage them to draw arrows.", materials: "Story chart or PPT" },
            { name: "Kite Picture Coloring", description: "Provide coloring sheet with kites flying up and leaves falling down. Ask them to color the kites 'blue' (up) and leaves 'brown' (down).", materials: "Coloring sheet, crayons" }
          ]
        }
      },
      {
        volume: 3,
        topics: {
          "Revision Numbers 1–50": [
            { name: "Number Path Walk", description: "Lay number cards 1–50 in a winding path. Children walk and say each number aloud.", materials: "Chart paper, number cards" },
            { name: "Clothespin Number Line", description: "Children pin numbers 1–50 on a string using clothespins in order.", materials: "Clothespins, string, number cards" },
            { name: "Cup Stack Count", description: "Write numbers 1–50 on paper cups. Children build and unstack them in order.", materials: "Paper cups, marker" },
            { name: "Bead Count Necklaces", description: "Children string beads according to a number card shown (e.g., 25 beads for number 25).", materials: "Thread, beads, number cards" },
            { name: "Jump & Count Game", description: "Play music. Pause and say a number. Children jump that many times.", materials: "Bluetooth speaker" },
            { name: "Clay Numbers", description: "Children roll clay to form numbers from 1–50.", materials: "Clay" },
            { name: "Find My Number (Sand Tray)", description: "Teacher calls a number. Child finds and traces it in a sand tray.", materials: "Sand tray, number cards" },
            { name: "Button Count Game", description: "Show a number, child counts and places that many buttons on the table.", materials: "Buttons, number cards" },
            { name: "Dot & Color by Number", description: "Children color sections in a picture using the matching number code (e.g., 1 = red).", materials: "Worksheets, crayons" },
            { name: "Stick My Number", description: "Children stick ice cream sticks to form the given number.", materials: "Glue, paper, sticks" },
            { name: "Number Toss Game", description: "Toss a soft ball onto a number mat (1–50). Child says the number.", materials: "Ball, number mat" },
            { name: "Clap the Number", description: "Teacher says a number. Children clap that many times together.", materials: "None" },
            { name: "Match the Pair", description: "Match numeral (e.g., 17) to quantity card (17 dots or objects).", materials: "Number and dot cards" },
            { name: "Roll & Cover Numbers", description: "Roll dice. Cover that number on the 1–50 board.", materials: "Dice, number board, tokens" },
            { name: "Vocal Echo Counting", description: "Teacher chants 1 to 50; students echo loudly in rhythm.", materials: "None (use speaker for music if desired)" },
            { name: "Write Numbers with Crayons", description: "Use crayons to trace large numbers 1–50 on sheets.", materials: "Tracing sheets, crayons" },
            { name: "Match Cloth Numbers", description: "Attach number tags to cloth scraps. Match to number board.", materials: "Old cloth, safety pins, number chart" },
            { name: "Playdough Counting Mats", description: "Use playdough balls to count and place correct number on mats.", materials: "Mats with numbers, clay" },
            { name: "Button Bingo 1–50", description: "Create bingo cards with random numbers. Teacher calls numbers.", materials: "Bingo cards, buttons" },
            { name: "Skip Count Jumps", description: "Practice counting in 2s, 5s, and 10s with physical jumps.", materials: "None" },
            { name: "Find My Partner (Before/After)", description: "Give children one number card. They find a friend who has the number before or after.", materials: "Number cards" },
            { name: "Flash and Say", description: "Flash number cards quickly. Children say the number out loud.", materials: "Flashcards" },
            { name: "Cup Tower Challenge", description: "Stack cups in number order from 1 to 50.", materials: "Numbered cups" },
            { name: "Paint a Number Path", description: "Children use earbud painting to create a number line on chart.", materials: "Paints, earbuds, chart paper" },
            { name: "Pair the Number Buttons", description: "Buttons have numbers. Children find and pair odd/even or skip-count sets.", materials: "Numbered buttons" },
            { name: "Missing Numbers Puzzle", description: "Give number lines with blanks. Children fill in the missing numbers.", materials: "Worksheets" },
            { name: "Straw Bead Count", description: "Place straws in cups labeled 1–10, each with correct number of beads.", materials: "Cups, straws, beads" },
            { name: "Stamp the Numbers", description: "Use number stamps to form patterns or count forward.", materials: "Stamps, ink pads" },
            { name: "Cupcake Liner Numbers", description: "Paste cupcake liners with numbers 1–50 onto a board.", materials: "Cupcake liners, glue, marker" },
            { name: "Toss the Number Ball", description: "Pass a soft ball. Whoever catches must say the next number.", materials: "Soft ball" },
            { name: "Pick and Color a Number", description: "Pick a number from a bowl. Color that number on the worksheet.", materials: "Number slips, worksheet, crayons" },
            { name: "Box Hop Counting Game", description: "Boxes numbered 1–10 or 1–50 on floor. Kids hop in correct order.", materials: "Floor tape" },
            { name: "Balloon Number Pop", description: "Balloon labeled with numbers. Child pops and says the number.", materials: "Paper balloons (or real if supervised), pin" },
            { name: "Puzzle Piece Numbers", description: "Cut a number chart and scramble. Children rebuild the 1–50 line.", materials: "Printed chart, scissors" },
            { name: "Story Counting (Oral)", description: "Tell a short story and ask, 'How many apples? How many dogs?' etc.", materials: "Oral only or with pictures" },
            { name: "Number Strip Race", description: "Two kids race to place numbers 1–50 in order using strips.", materials: "Number strips" },
            { name: "Draw My Number House", description: "Give a number (e.g., 36). Kids draw 36 windows on a house outline.", materials: "Paper, crayons" },
            { name: "Dot Sticker Numbers", description: "Children place correct number of dot stickers on number templates.", materials: "Stickers, templates" },
            { name: "Number Wheel Spin & Match", description: "Spin the wheel. Find and match that number on the board.", materials: "Spinner, number board" },
            { name: "Color Bead Ladder", description: "String color beads in steps — 1 red, 2 blue, 3 yellow… up to 10 or more.", materials: "Thread, color beads" }
          ],
          "Teach Ordinal Numbers (1st–10th)": [
            { name: "Ordinal Hat Parade", description: "Children wear paper crowns labeled 1st to 10th and walk in line. The class says each child's position aloud.", materials: "Paper crowns, markers" },
            { name: "Animal Train Line", description: "Toy animals or pictures are placed in a line. Children answer: 'Which animal is 3rd?' etc.", materials: "Toy animals or cutouts" },
            { name: "Button Race Lane", description: "Create 10 lanes using tape. Push buttons in a race and announce which button is 1st, 2nd, etc.", materials: "Tape, buttons" },
            { name: "Cup Tower Order", description: "Stack numbered paper cups and remove one. Ask: 'Which cup is 4th?'", materials: "Paper cups, marker" },
            { name: "Birthday Line Game", description: "Children stand in a line based on their birth month and say 'I am the 5th in line.'", materials: "Month tags" },
            { name: "Ordinal Number Song with Movement", description: "Sing a rhyme (to speaker music) and do actions in order (e.g., '1st, jump once... 2nd, spin...')", materials: "Bluetooth speaker" },
            { name: "Chair Row Guess", description: "Arrange chairs and number them. A child sits on a chair. Ask others to guess their ordinal position.", materials: "Chairs, number tags" },
            { name: "Clay Car Race", description: "Children mold small cars and line them up. Teacher calls positions: 'Which is 2nd?'", materials: "Clay" },
            { name: "Straw Position Sort", description: "Place 10 colored straws in a row. Ask: 'What color is in 6th place?'", materials: "Colored straws" },
            { name: "Paper Plate Stand", description: "Draw 1st to 10th on paper plates. Children place toys on correct plates.", materials: "Paper plates, toys" },
            { name: "Who's in Which House?", description: "Draw 10 houses. Place an animal or doll in each. Ask 'Who lives in the 7th house?'", materials: "Paper, pictures" },
            { name: "Spoon Relay Race", description: "Run a spoon race and award ribbons: 1st, 2nd, 3rd, etc.", materials: "Spoons, ribbons" },
            { name: "Ordinal Number Hop", description: "Make floor cards (1st–10th). Kids jump to the one you call out.", materials: "Number cards, floor tape" },
            { name: "Ladder of Cups", description: "Stack paper cups numbered 1st to 10th like a ladder. Ask children to find and remove the 5th.", materials: "Paper cups, markers" },
            { name: "Fruit Tray Order", description: "Place fruits in a row. Ask: 'Which fruit is 3rd?'", materials: "Real or plastic fruits" },
            { name: "Ordinal March", description: "Children hold placards with 1st to 10th and march around.", materials: "Card paper, sticks" },
            { name: "Bus Seat Game", description: "Draw a bus with 10 seats. Ask: 'Who is sitting in the 1st seat?'", materials: "Chart paper, small dolls/photos" },
            { name: "Playdough Crown Game", description: "Make tiny crowns from playdough and give them to '1st prince,' '2nd queen,' etc.", materials: "Clay, crown images" },
            { name: "Sand Tray Line", description: "Write ordinal numbers in sand and place matching buttons on each.", materials: "Sand tray, buttons" },
            { name: "Vowel Position Word Game", description: "Write 10 CVC words. Ask 'Which vowel is in the 2nd place in this word?'", materials: "Paper, marker" },
            { name: "Number Necklace", description: "Each child makes a necklace with one ordinal tag (e.g., 4th).", materials: "Thread, paper tags" },
            { name: "Race Track Mat", description: "Create a race track. Place clay animals on each spot. Ask about their position.", materials: "Chart paper, clay" },
            { name: "Musical Ordinals", description: "When music stops, teacher says 'Who is 6th?' Kids must quickly form a line and shout positions.", materials: "Bluetooth speaker" },
            { name: "Paper Footprint Path", description: "Footprints labeled 1st–10th lead to a prize. Ask which foot they're standing on.", materials: "Paper cutouts" },
            { name: "Shoe Line Fun", description: "Line up children's shoes and guess which pair is in 5th place.", materials: "Students' shoes" },
            { name: "Birthday Cake Layer Game", description: "Stack paper layers labeled 1st–10th on a drawn cake.", materials: "Paper cutouts" },
            { name: "Ordinal Puzzle Match", description: "Match puzzle pieces with ordinal numbers to their position in a sequence.", materials: "Homemade puzzle" },
            { name: "Colorful Crayon Order", description: "Arrange 10 crayons. Ask, 'What color is in 9th place?'", materials: "Crayons" },
            { name: "Story Time Line-Up", description: "During a story, assign characters positions: 'The cat was 2nd.' Ask questions after.", materials: "Story images" },
            { name: "Toy Block Tower", description: "Stack blocks labeled 1st to 10th. Remove one and say its ordinal number.", materials: "Blocks, stickers" },
            { name: "Birthday Candle Order", description: "Paste paper candles labeled 1st–10th on a cake chart.", materials: "Paper, crayons" },
            { name: "Match Me Memory", description: "Make cards: one with position (1st) and one with object (e.g., 1st - apple). Match the pairs.", materials: "Cards" },
            { name: "Washing Line Ordinals", description: "Hang shirts or socks with ordinal tags. Rearrange and identify the new order.", materials: "String, cutouts, clips" },
            { name: "Cup Stack Race", description: "Children stack cups from 1st to 10th as fast as possible.", materials: "Paper cups" },
            { name: "Match Clothespin Ordinals", description: "Clip pegs onto a number line labeled 1st–10th.", materials: "String, clothespins" },
            { name: "Ordinal Spinner Game", description: "Spin a wheel and land on an ordinal number. Find it on the board.", materials: "Spinner, board" },
            { name: "Animal Parade Poster", description: "Paste animal images in order with ordinal labels.", materials: "Chart paper, pictures" },
            { name: "Number Box Reveal", description: "Boxes labeled 1st to 10th have surprise inside. Pick one and say its position.", materials: "Small boxes" },
            { name: "Ordinal Roleplay", description: "Pretend you're the 1st teacher, 2nd cook, etc. Children act the roles.", materials: "Props (optional)" },
            { name: "Ordinal Paint Pattern", description: "Make a pattern with colored dots. Ask: 'What color is 4th?'", materials: "Paints, paper" },
            { name: "Dollhouse Room Order", description: "Label 10 rooms. Place toy people and ask who is in the 3rd room.", materials: "Dollhouse/paper drawing" },
            { name: "Bubble Pop Line", description: "Number bubbles from 1st to 10th. Pop the number you hear!", materials: "Paper or real bubbles" },
            { name: "Staircase Number Game", description: "Stick ordinal numbers on stairs. Climb and say each.", materials: "Paper, tape" },
            { name: "Tray Order Game", description: "Place 10 objects in a tray. Children close eyes, guess what was in 7th place.", materials: "Tray, small toys" },
            { name: "Vegetable Queue", description: "Line up real/pretend vegetables. Ask 'Which vegetable is in 8th position?'", materials: "Real/foam vegetables" },
            { name: "Toy Sorting Race", description: "Line up 10 mixed toys. Ask: 'Which is 1st in line?'", materials: "Toys" },
            { name: "Socks in a Row", description: "Pin up socks in order and guess which is 2nd, 5th, etc.", materials: "Old socks, string" },
            { name: "Story Train Track", description: "A train story with 10 wagons (each a month, color, or animal). Ask questions: 'What came 6th?'", materials: "Drawing or toy train" },
            { name: "Ordinal Tug-of-War", description: "Kids in line. After a pull, they change position. Ask: 'Who moved to 3rd place?'", materials: "Rope (optional), floor space" },
            { name: "Ordinal Sticker Trail", description: "Children get 10 stickers. Place them on a chart in 1st to 10th order.", materials: "Stickers, chart" }
          ],
          "Number Names (1–10)": [
            { name: "Clay Name Shapes", description: "Children roll clay to form letters of number names like 'one', 'two', etc.", materials: "Clay" },
            { name: "Number Name Hopscotch", description: "Create a hopscotch grid with number names instead of numerals. Children jump while reading aloud.", materials: "Floor tape or chalk" },
            { name: "Paint and Trace", description: "Provide worksheets with number names in dotted font. Children paint or trace using earbuds.", materials: "Worksheets, earbuds, paint" },
            { name: "Sing the Number Name Song", description: "Play a fun number name song (e.g., 'O-N-E one, S-U-N sun…') with body actions.", materials: "Bluetooth speaker" },
            { name: "Sand Tray Spelling", description: "Teacher says a number. Children write the number name in sand.", materials: "Sand tray" },
            { name: "Bead the Word", description: "Children string a bead for each letter in a number name.", materials: "Beads, thread" },
            { name: "Number Name Fishing", description: "Create paper fish with number names. Children 'fish' using a magnetic stick and read aloud.", materials: "Paper, magnets, stick" },
            { name: "Match the Pair", description: "Match numeral (e.g., 4) with the correct number name card ('four').", materials: "Flashcards" },
            { name: "Ball Toss Spelling", description: "Toss a soft ball. Child catches and spells a number name (e.g., 'T-W-O').", materials: "Ball" },
            { name: "Cup Stack Game", description: "Each cup has a number name. Stack them in correct order from one to ten.", materials: "Paper cups, marker" },
            { name: "Color by Number Name", description: "Color sections of a picture using number names (e.g., 'Color all 'three' sections blue').", materials: "Worksheets, crayons" },
            { name: "Walking Word Train", description: "Children wear word cards ('one', 'two', etc.) and stand in sequence like a train.", materials: "Word tags" },
            { name: "Sticker Spell Out", description: "Children use dot stickers to spell out number names.", materials: "Paper, stickers" },
            { name: "Threading Number Name Beads", description: "Use letter beads to thread and spell number names.", materials: "Letter beads, string" },
            { name: "Spoon Name Sort", description: "Write number names on spoons and place them in matching cups with numerals.", materials: "Spoons, cups" },
            { name: "Clap and Spell", description: "Clap once per letter while spelling number names aloud.", materials: "None" },
            { name: "Button Letter Match", description: "Stick buttons on printed letters of number names.", materials: "Button, worksheets" },
            { name: "Draw & Label", description: "Children draw items (e.g., 3 apples) and write 'three' below.", materials: "Paper, crayons" },
            { name: "Musical Word Circle", description: "Children pass around number name cards while music plays. Stop music, read the word!", materials: "Word cards, Bluetooth speaker" },
            { name: "Fold & Reveal", description: "Use foldable flaps hiding number names. Children open to guess and say the word.", materials: "Paper" },
            { name: "Match Me Line Game", description: "Children form a line from 'one' to 'ten' wearing labels.", materials: "Paper tags" },
            { name: "Number Name Hunt", description: "Hide number name cards around the class. Kids hunt, read, and place them in order.", materials: "Cards" },
            { name: "Balloon Pop Spelling", description: "Pop balloons to find a letter. Form a number name with the letters found.", materials: "Balloons, paper letters" },
            { name: "Tactile Tray Tracing", description: "Glue threads on number name outlines. Children trace with fingers.", materials: "Thread, paper" },
            { name: "Clay Stamping", description: "Use alphabet stamps in clay to form number names.", materials: "Clay, letter stamps" },
            { name: "Fruit Matching", description: "Match fruit pictures to number names (e.g., 4 bananas → 'four').", materials: "Picture cards, name cards" },
            { name: "Paint Dab Name Fill", description: "Use paint dabbers to fill in bubble letters of number names.", materials: "Dabbers, worksheets" },
            { name: "Paper Chain Words", description: "Each link of a paper chain holds a letter. Create chains for 'seven', 'eight' etc.", materials: "Colored strips" },
            { name: "Write with Straws", description: "Use cut straws to form number name letters on chart paper.", materials: "Straws, glue" },
            { name: "Echo Repeat Game", description: "Teacher says a number name; children echo it in silly voices (robot, whisper, animal).", materials: "None" },
            { name: "Letter Hunt in Sand", description: "Hide letter cards in sand. Ask children to find and form 'one', 'five', etc.", materials: "Sand tray, cards" },
            { name: "Bead Count & Spell", description: "Count beads (e.g., 7) and then spell 'seven' on paper.", materials: "Beads, paper" },
            { name: "Dot-to-Dot Spelling", description: "Make dot outlines of number names. Children connect the dots to reveal words.", materials: "Worksheets" },
            { name: "Water Brush Writing", description: "Children write number names using wet brushes on chalkboards or slates.", materials: "Water, brushes" },
            { name: "Alphabet Pasta Name Craft", description: "Use alphabet pasta to spell number names on cardboard.", materials: "Pasta, glue" },
            { name: "Rainbow Name Writing", description: "Trace number names in different crayon colors (rainbow tracing).", materials: "Paper, crayons" },
            { name: "Sticker Trail to the Name", description: "Create a maze of stickers that leads to the correct number name.", materials: "Sticker sheet" },
            { name: "Finger Light Spell Game", description: "Turn off lights, use finger torches to trace number names on walls.", materials: "Flashlight/finger lights" },
            { name: "Cup Toss to the Word", description: "Toss a soft ball into paper cups labeled 'one' to 'ten'.", materials: "Cups, ball" },
            { name: "Stick Puzzle Words", description: "Write one number name across popsicle sticks. Mix and let children reassemble.", materials: "Sticks, marker" }
          ]
        }
      }
    ],
    evs: [
      {
        volume: 1,
        topics: {
          "My Family": [
            { name: "My Family Drawing", description: "Children draw pictures of their family members — parents, siblings, grandparents — and name each one.", materials: "Paper, crayons" },
            { name: "Family Photo Frame", description: "Kids paste pictures or paper cutouts of family members on chart paper and decorate it like a photo frame.", materials: "Paper, glue, buttons, beads, sequins" },
            { name: "Clay Family", description: "Children use different colors of clay to make simple figures of family members like mother, father, and siblings.", materials: "Clay" },
            { name: "My Family Song", description: "Teach a fun rhyme like 'This is my father, this is my mother…' with hand gestures for each line.", materials: "Bluetooth speaker (optional)" },
            { name: "Family Tree Art", description: "Draw a tree trunk and branches, then paste photos or drawings of family members on each branch to create a family tree.", materials: "Chart paper, printed photos or drawings" },
            { name: "Finger Family Puppet", description: "Kids make small puppets for daddy, mommy, sister, etc., stick them on fingers and sing 'Daddy finger, daddy finger, where are you?'", materials: "Paper, crayons, tape" },
            { name: "Match the Family Job", description: "Show flashcards of tools like a stethoscope, book, or spoon. Ask: 'Who uses this at home?' and let children guess the family role.", materials: "Flashcards" },
            { name: "My Family Collage", description: "Children tear and paste colored paper to make outfits for different family members — like sarees, shirts, and caps.", materials: "Colored paper, glue" },
            { name: "Who Helps Me?", description: "Show pictures of daily routines like brushing, eating, or dressing. Children say which family member helps them with each.", materials: "Picture cards" },
            { name: "Family Circle Game", description: "Kids stand in a circle and pass a soft toy while music plays. When it stops, the child says 'I love my ____ (e.g., mama).'", materials: "Soft toy, Bluetooth speaker" },
            { name: "Puppet Family Talk", description: "Children use family stick puppets and say things like 'This is my brother. He plays with me.'", materials: "Paper, sticks, crayons" },
            { name: "Count My Family", description: "Ask, 'How many people live in your home?' Kids draw that many smiley faces or stick figures.", materials: "Paper, crayons" },
            { name: "Who Lives in My House?", description: "Children paste drawings or cutouts of family members and pets who live with them.", materials: "Paper cutouts, glue" },
            { name: "Family Sound Guess", description: "Play everyday family-related sounds — mom calling, baby crying, food sizzling — and let kids guess who it is.", materials: "Bluetooth speaker, sound clips" },
            { name: "My Family House Craft", description: "Make a pretend house from a paper plate or cardboard and draw/paste pictures of family members inside.", materials: "Paper plate or box, markers" },
            { name: "Dress My Family", description: "Give kids cloth scraps to paste clothing pieces for each family member — sarees, pants, caps, etc.", materials: "Cloth pieces, glue, paper" },
            { name: "Family Story Time", description: "Teacher tells a short story about a loving family helping each other. Children answer simple comprehension questions afterward.", materials: "Storybook or teacher narration" },
            { name: "My Family Mask", description: "Children make simple masks for each family member and roleplay saying lines like 'I'm Papa. I read the newspaper!'", materials: "Paper, string, crayons" },
            { name: "Thank You Chain", description: "Each child writes or draws one thing they are thankful for about a family member on a paper strip. Link the strips to form a class thank-you chain.", materials: "Paper strips, stapler" },
            { name: "Family Footprints", description: "Children trace their own foot on paper and imagine or draw bigger/smaller footprints to represent other family members.", materials: "Paper, pencil" },
            { name: "Name My Family", description: "Ask fun comparison questions like 'Who is older — your mummy or your dadi?' Children answer and discuss.", materials: "None" },
            { name: "My Family Clay Home", description: "Children make a small house out of clay and place small clay family figures inside.", materials: "Clay" },
            { name: "'Where Are You?' Game", description: "Teacher says, 'Where is baby sister?' and children either point to a flashcard or pretend to be that person.", materials: "Flashcards" },
            { name: "Decorate Family Names", description: "Write words like 'Mummy,' 'Papa,' and 'Didi' on paper. Children decorate the names with stickers, beads, or glitter.", materials: "Paper, stickers, glitter" },
            { name: "I Help My Family Chart", description: "Children draw one way they help at home — like watering plants, folding clothes — and share it with the class.", materials: "Paper, crayons" }
          ],
          "Healthy Food": [
            { name: "Healthy or Not? Sorting", description: "Show children toy foods or food pictures. They sort them into two groups: 'Healthy' and 'Not Healthy.'", materials: "Flashcards or toy food models" },
            { name: "Make a Healthy Plate", description: "Children create a pretend meal by pasting healthy food cutouts on a paper plate.", materials: "Paper plate, food cutouts, glue" },
            { name: "Fruit and Veggie Printing", description: "Dip real fruit or vegetable slices into paint and press them onto paper to make colorful prints.", materials: "Paint, paper, sliced potato, ladyfinger" },
            { name: "Fruit Salad Song & Dance", description: "Play the 'Fruit Salad' song and let kids dance and act like their favorite fruits.", materials: "Bluetooth speaker" },
            { name: "My Favorite Fruit Drawing", description: "Ask kids to draw and color their favorite fruit or veggie and talk about why they love it.", materials: "Crayons, paper" },
            { name: "Make a Food Chart", description: "Children paste healthy food images onto a chart labeled 'My Healthy Food.'", materials: "Chart paper, glue, magazine or printed pictures" },
            { name: "Clay Fruit Basket", description: "Using clay, children roll and shape fruits like apples, bananas, and grapes.", materials: "Colored clay" },
            { name: "Story: The Sick Lion", description: "Tell a story about a lion who falls ill after eating junk food. Ask questions about better food choices.", materials: "Story props or flashcards" },
            { name: "Taste Test", description: "Blindfolded kids taste healthy snacks like apple or cucumber and guess the food.", materials: "Blindfold, cut fruits" },
            { name: "Vegetable Match-Up", description: "Children match real vegetables or pictures with the plant parts they come from (root, leaf, fruit).", materials: "Real veggies or food flashcards" },
            { name: "Cook With Teacher", description: "Teacher prepares a healthy snack (like sprout salad) in front of the class, explaining its benefits.", materials: "Real ingredients (teacher-handled only)" },
            { name: "Food Collage", description: "Tear pictures from old magazines to create a 'Healthy Meal' collage.", materials: "Magazines, glue, paper" },
            { name: "Drink More Water Game", description: "Talk about water's importance. Kids pretend to pour and drink using paper cups.", materials: "Paper cups" },
            { name: "Healthy Food Puppet Talk", description: "Fruit puppets 'talk' to the class: 'Hi! I'm Carrot. I help your eyes!'", materials: "Paper puppets" },
            { name: "Grow a Sprout Jar", description: "Children place moong beans on cotton and watch them sprout over a few days.", materials: "Moong beans, cotton, jar or bowl" },
            { name: "Rainbow Food Hunt", description: "Ask kids to find fruits or veggies of each rainbow color—red, orange, green, etc.", materials: "Real or pretend foods, color chart" },
            { name: "Doctor's Visit Roleplay", description: "Teacher pretends to be a doctor and tells kids to eat fruits and veggies to stay strong.", materials: "Toy stethoscope, doctor's coat" },
            { name: "Sing 'Munch Munch Healthy Food'", description: "Sing a catchy rhyme about eating healthy snacks and act out the food items.", materials: "Bluetooth speaker" },
            { name: "Draw a Water Bottle", description: "Each child draws and decorates their own special water bottle.", materials: "Crayons, paper" },
            { name: "Lunchbox Check Day", description: "Children create a pretend lunchbox using cutouts and explain what they packed and why it's healthy.", materials: "Paper, food cutouts" },
            { name: "Peel the Banana Game", description: "Children practice peeling and eating a banana safely and cleanly. Great for motor skills and hygiene.", materials: "Bananas (real or pretend)" },
            { name: "Say YES or NO", description: "Teacher shows pictures of different foods. Kids shout 'YES!' for healthy ones and 'NO!' for junk.", materials: "Flashcards or toy food items" },
            { name: "Create a Healthy Food Song", description: "Kids help build a simple chant: 'Carrot for my eyes, milk for my bones, I eat healthy food!'", materials: "None" },
            { name: "Food Basket Relay", description: "In a running game, kids carry toy foods and place them into the correct basket (Healthy or Not Healthy).", materials: "Toy foods, two baskets" },
            { name: "Paint with Milk & Haldi", description: "Use milk mixed with turmeric to paint golden art, while discussing how both are good for health.", materials: "Milk, turmeric (haldi), brushes, paper" }
          ],
          "Physical Education": [
            { name: "Jump Like a Frog", description: "Children crouch down and jump like frogs across the room. It builds leg strength and coordination.", materials: "None" },
            { name: "Animal Walks", description: "Kids walk like a bear, hop like a rabbit, or slither like a snake across the space.", materials: "Open space" },
            { name: "Balloon Balance", description: "Children balance a balloon on a spoon and walk carefully without dropping it.", materials: "Balloons, spoons" },
            { name: "Stretch and Count", description: "Do ten simple stretches while counting out loud together. Great for movement and number learning.", materials: "None" },
            { name: "Walk the Line", description: "Place a tape line on the floor. Children walk heel-to-toe along the line to improve balance.", materials: "Tape" },
            { name: "Clap and Jump", description: "Clap once and jump once. Increase or slow the rhythm using background music.", materials: "Bluetooth speaker" },
            { name: "Yoga Baby Poses", description: "Teach children easy yoga poses like butterfly, mountain, and tree in a quiet space.", materials: "Mat or soft floor space" },
            { name: "Straw Blow Race", description: "Each child blows a paper ball using a straw, racing to the finish line. Helps with breath control.", materials: "Straw, paper ball" },
            { name: "Marching Song", description: "Play upbeat marching music and lead children in a line as they march with arms swinging.", materials: "Bluetooth speaker" },
            { name: "Musical Freeze", description: "Play fun music and let kids dance. When the music stops, they must freeze like statues.", materials: "Bluetooth speaker" },
            { name: "Stretching Circle", description: "Children form a big circle and follow stretching movements—arms up, toe touches, side bends.", materials: "None" },
            { name: "Roll and Run", description: "Roll a plastic ball far, and children chase it and bring it back to the start line.", materials: "Plastic ball" },
            { name: "Catch the Clap", description: "Teacher claps in a pattern. Children copy using their hands, feet, or body movements.", materials: "None" },
            { name: "Sit & Stand Game", description: "Call out 'Sit down! Stand up!' Kids quickly follow the command. Builds listening and reflex skills.", materials: "None" },
            { name: "Jump Over the Straw", description: "Lay straws on the ground like mini hurdles. Children jump over them carefully.", materials: "Straws" },
            { name: "Play the Shape Game", description: "Call out a shape name like 'Circle' or 'Triangle' and kids form it by holding hands or using bodies.", materials: "Open space" },
            { name: "Sand Play Movement", description: "Children walk barefoot in a tray filled with dry, clean sand to stimulate their feet and improve balance.", materials: "Tray, clean sand" },
            { name: "Spoon Relay", description: "Children hold a spoon with a cotton ball on it and walk to a finish line without dropping it.", materials: "Spoon, cotton ball" },
            { name: "Skip and Count", description: "Kids skip steps around the space while counting from 1 to 10 together.", materials: "None" },
            { name: "Tunnel Crawl", description: "Create a tunnel using chairs and cloth. Children crawl through one by one.", materials: "Chairs, long cloth" },
            { name: "Balloon Tap Up", description: "Children try to keep a balloon in the air by tapping it upward without letting it fall.", materials: "Balloons" },
            { name: "Jump on the Spot", description: "Jump ten times in place, then jump side to side. A great warm-up for little legs.", materials: "None" },
            { name: "Circle Warm-Up", description: "Kids jog or walk in a big circle, then stop to stretch, and continue moving again.", materials: "Open space" },
            { name: "Hand-Eye Coordination Toss", description: "Children gently toss a soft ball to a partner and try to catch it back. Builds coordination.", materials: "Soft ball" },
            { name: "Crawl Like a Baby", description: "Kids crawl on the floor while holding toy animals, just like babies. Fun and strengthens core muscles.", materials: "Toy animals" }
          ],
          "Emotions": [
            { name: "Emotion Face Plates", description: "Children are given paper plates to create different emotional faces like happy, sad, angry, or surprised. They draw with crayons and glue on yarn or fabric for hair or eyebrows. These are later used to talk about feelings.", materials: "Paper plates, crayons, scrap fabric or yarn, glue" },
            { name: "Mood Color Matching", description: "The teacher shows colored papers (yellow for happy, blue for sad, red for angry, etc.) and children match facial expression cards to the color. This teaches emotion-color associations.", materials: "Colored paper, emotion cards with expressive faces" },
            { name: "Feelings Mirror Circle (No Actual Mirrors)", description: "Children sit in a circle. The teacher says an emotion and models the expression. Children copy it by looking at each other and reacting.", materials: "None (use peer observation)" },
            { name: "Happy and Sad Button Sort", description: "Children sort buttons into 'Happy Jar' or 'Sad Jar' based on colored paper with happy/sad faces underneath.", materials: "Buttons, two jars, paper faces" },
            { name: "Emotion Handprint Art", description: "Children dip hands in different colors and stamp them onto paper. Each handprint represents a feeling and is labeled by the teacher.", materials: "Washable paint, paper" },
            { name: "Emotion Puppet Talk", description: "Puppets made from socks are given faces with different expressions. Children speak through them about how they feel.", materials: "Old socks, buttons, yarn, glue" },
            { name: "Guess the Emotion Song", description: "Play an emotion song. Children act out the emotion mentioned in the lyrics and guess what it is.", materials: "Bluetooth speaker, emotion-themed music" },
            { name: "Feelings Walk", description: "A guided walk where children change movement style depending on emotion cues: 'Walk like you're happy/sad/angry.'", materials: "None" },
            { name: "Emotion Vegetable Faces", description: "Children arrange cut vegetables into faces showing different emotions on plates.", materials: "Slices of vegetables like tomato, carrot, cucumber" },
            { name: "Emotion Stones", description: "Small smooth stones are painted with simple faces (smile, frown, tears, etc.) and used in storytelling.", materials: "Stones, paint, marker" },
            { name: "My Emotion Wheel", description: "Children spin a wheel with faces and express that emotion using their body or voice.", materials: "Paper wheel with divided faces, pin" },
            { name: "Yarn Emotion Faces", description: "Children shape yarn into eyes, mouths, and eyebrows on a mat to form emotion expressions.", materials: "Yarn, felt mat or A4 sheet" },
            { name: "Clay Mood Sculpting", description: "Children sculpt faces using clay, showing how mouths and eyes change with feelings.", materials: "Clay" },
            { name: "'How Would You Feel If...' Story Time", description: "Teacher narrates short situations ('Your toy breaks,' 'You got a gift'), and children hold up emotion face cards.", materials: "Emotion face cards made of paper" },
            { name: "Emotion Sorting with Fabric", description: "Soft fabric circles with faces are sorted into mood bags. Children describe them as they place them.", materials: "Old cloth circles with drawn faces, bags" },
            { name: "Bead Emotion Necklaces", description: "Assign each color bead an emotion. Children create necklaces showing how they feel.", materials: "Thread, color-coded beads" },
            { name: "Clap Your Feeling", description: "Children clap differently based on the emotion word: quick claps for excitement, slow for sadness, etc.", materials: "None" },
            { name: "Balloon Faces", description: "Children decorate balloons with permanent marker faces (happy/sad/etc.) and then toss or hug them depending on the mood.", materials: "Balloons, markers" },
            { name: "Emotion Bingo", description: "Each child has a bingo card with faces. Teacher calls out 'Show me a sad face!' and they mark it.", materials: "Paper cards, buttons for markers" },
            { name: "Emotion Dance Freeze", description: "Play music; when it stops, call out an emotion and children freeze in a matching expression.", materials: "Bluetooth speaker, music" }
          ],
          "Keeping Clean": [
            { name: "Handwashing Song & Steps", description: "Children practice washing hands with pretend soap while singing a short hygiene rhyme.", materials: "Soap and water (or pretend), Bluetooth speaker" },
            { name: "Clean and Dirty Sorting Tray", description: "Provide pictures or real items like a clean spoon vs. a dirty one. Children sort them into 'Clean' and 'Dirty' trays.", materials: "Two trays, objects or pictures" },
            { name: "Glitter Germ Experiment", description: "Glitter is sprinkled on a child's hands, showing how it spreads. Then children wash hands to see how germs go away.", materials: "Glitter, water, soap" },
            { name: "Cloth Wipe Race", description: "Children use small cloth pieces to clean surfaces in class. It becomes a fun clean-up race.", materials: "Old cloth pieces" },
            { name: "Brush the Tooth Model", description: "Children practice brushing using a big paper mouth or clay teeth models.", materials: "A4 paper or clay for teeth, old toothbrush" },
            { name: "Dirty Hands Stamp", description: "Children press unwashed hands in clay or flour, then clean them and try again to see the difference.", materials: "Clay or flour, water, towel" },
            { name: "Sock Swap for Clean Feet", description: "Children bring an old clean sock and decorate it. Teacher explains why clean feet matter.", materials: "Socks, buttons, fabric bits" },
            { name: "Germ Hunt Game", description: "Colored stickers are 'germs' hidden around the class. Children find and remove them during cleanup time.", materials: "Stickers or paper dots" },
            { name: "Nail Check Chart", description: "Create a chart where children place a sticker if their nails are clean. Teachers inspect daily.", materials: "Chart paper, stickers" },
            { name: "Washing Doll Clothes", description: "Children wash small cloth pieces or doll clothes using water tubs. This teaches them the importance of clean clothes.", materials: "Water tub, cloth pieces, soap" },
            { name: "Tidy Up Song Time", description: "Play a 'clean-up' song and children help organize their play area.", materials: "Bluetooth speaker, bins or baskets" },
            { name: "Toothbrush Painting", description: "Children use old toothbrushes dipped in paint to make textured art, reinforcing brushing motion.", materials: "Toothbrush, paint, paper" },
            { name: "Sorting Hygiene Items", description: "Provide images of hygiene tools (soap, comb, etc.) and mix with non-hygiene items (ball, toy). Children sort them.", materials: "Picture cutouts" },
            { name: "Wash the Vegetable", description: "Let children practice washing real vegetables like potatoes or carrots in water tubs.", materials: "Vegetables, water bowls" },
            { name: "Tissue Toss", description: "Children crumple and throw used tissues in a clean basket to understand proper disposal.", materials: "Tissues, basket" },
            { name: "Soap Bubble Play", description: "Children play with soapy water and straws to blow bubbles, associating soap with fun and cleanliness.", materials: "Soapy water, straws" },
            { name: "Comb the Yarn Hair", description: "Stick yarn on a cardboard head. Children use combs to tidy it up.", materials: "Cardboard, yarn, comb" },
            { name: "'Why Clean?' Picture Talk", description: "Show pictures of clean vs. dirty homes, teeth, clothes. Children explain what looks better.", materials: "Pictures, chart" },
            { name: "Bath Time Doll Play", description: "Children pretend to bathe dolls using water bowls and cloth.", materials: "Dolls, water bowls, old cloth" },
            { name: "Clean Habits Badge Craft", description: "Children make a 'Clean Champion' badge after showing good hygiene like washing hands or wiping nose.", materials: "Paper circles, crayons, safety pins or string" }
          ]
        }
      },
      {
        volume: 2,
        topics: {
          "Germination and Plants": [
            { name: "Seed in a Bag", description: "Children place a soaked bean between wet cotton inside a zip-lock bag. They tape it to a sunny window and observe sprouting over the next few days.", materials: "Zip-lock bag, cotton, bean seed, tape" },
            { name: "Clay Plant Model", description: "With teacher guidance, children use green and brown clay to form parts of a plant—roots, stem, leaves, and flower.", materials: "Clay (green and brown)" },
            { name: "Leaf Rubbing Art", description: "Place a leaf under white paper. Children use crayons to rub and reveal the leaf's texture and veins.", materials: "Real leaves, crayons, plain paper" },
            { name: "Grow Me Cup", description: "Children plant moong seeds in a paper cup filled with soil. They water it every day and watch it grow.", materials: "Paper cups, soil, moong seeds, water" },
            { name: "Paper Plant Puzzle", description: "Children assemble paper cutouts of plant parts (roots, stem, leaf, flower) correctly onto chart paper with glue.", materials: "Plant part cutouts, glue, chart paper" },
            { name: "Parts of Plant Song", description: "Play a catchy song like 'Roots, Stem, Leaves, Flower!' Children sing along with actions.", materials: "Bluetooth speaker, plant song audio" },
            { name: "Sprout Tray Sorting", description: "Children are guided to sort sprouted and non-sprouted seeds like moong, chana, and rajma in trays.", materials: "Moong, chana, rajma, 2 trays" },
            { name: "Button Flower Craft", description: "Kids use colorful buttons to create flower petals and green straws for stems. They stick it all onto chart paper.", materials: "Buttons, green straws, glue, chart paper" },
            { name: "Root Hunt Game", description: "'Roots' made of brown paper are hidden around the class. Children search and stick them on a large plant diagram.", materials: "Brown paper roots, large plant diagram" },
            { name: "Seed Sorting Fun", description: "Children sort mixed seeds like corn, moong, and chana into bowls based on type or size.", materials: "Mixed seeds, sorting bowls" },
            { name: "Sun & Water Drama", description: "Role play! One child is the sun, one is water, and one is a seed. Teacher narrates as they act out the growing process.", materials: "None (optional: sun and water tags)" },
            { name: "Painted Flower Garden", description: "Each child paints a garden scene with flowers. The teacher helps label plant parts like stem, leaf, and root.", materials: "Paint, brushes, white paper" },
            { name: "Magic Bean Jar", description: "Transparent jars are filled with wet cotton and soaked kidney beans. Children watch them sprout each day.", materials: "Jars, cotton, soaked kidney beans" },
            { name: "Paper Plate Plant", description: "Children use a paper plate as the base and paste plant parts made from paper or clay to build a full plant.", materials: "Paper plate, glue, paper cutouts or clay" },
            { name: "Straw Stem Relay", description: "Children play a relay game where they pass straws and paste them one by one to form the plant's stem on a chart.", materials: "Green straws, chart paper" },
            { name: "Seed Toss Game", description: "There are two labeled buckets: 'Needs Sunlight' and 'Doesn't Grow.' Kids toss seed name cards into the right bucket.", materials: "2 buckets, seed cards" },
            { name: "Flower Matching Cards", description: "Children are given flower picture cards. They find and match identical flowers and name them.", materials: "Flower picture cards" },
            { name: "Germination Storytime", description: "Teacher reads a story about a sleepy seed growing into a plant. Children act out being the seed growing slowly.", materials: "Picture storybook or flashcards" },
            { name: "Fingerprint Flowers", description: "Children dip their fingers into paint and make flower petals by stamping. Stems and leaves are drawn with crayons.", materials: "Paint, crayons, white paper" },
            { name: "Vegetable Seeds Talk", description: "Teacher shows real vegetables like tomato and ladyfinger, cuts them open, and children observe the seeds inside.", materials: "Real vegetables (teacher handles cutting), trays" },
            { name: "Plant Dance Movement", description: "With soft music, children crouch like seeds and slowly stretch and rise as they 'grow.'", materials: "Bluetooth speaker, soft instrumental music" },
            { name: "Seed Hunt in Newspaper", description: "Teacher hides seeds in folded newspaper sheets. Kids search carefully and collect them in bowls.", materials: "Newspaper, small seeds (chana, moong)" },
            { name: "Seed Collage Art", description: "Children glue different seeds onto a paper to create a plant picture—e.g., rajma for roots, moong for leaves.", materials: "Seeds, glue, paper" },
            { name: "Live Plant Talk", description: "Teacher brings in a real potted plant. Children observe and touch each part as the teacher names it.", materials: "Real potted plant" },
            { name: "Watering Day", description: "Each child gets a turn to water the class plant and learns that plants need water to grow.", materials: "Cup of water, class plant" }
          ],
          "Types of Plants": [
            { name: "Tree Leaf Hunt", description: "Children go outside to collect large leaves fallen from trees. The teacher discusses how tall plants with thick trunks are called trees.", materials: "Paper bags/baskets, collected leaves" },
            { name: "Tree Clay Model", description: "Children use brown clay for the trunk and green clay for the leaves to shape a tree. The teacher labels trunk, leaves, and branches.", materials: "Brown and green clay, flat base" },
            { name: "Herb Garden Tray", description: "Real herbs like mint or coriander are placed in a tray. Children touch and smell the herbs as the teacher introduces the term 'herb.'", materials: "Real mint/coriander leaves, tray" },
            { name: "Shrub Painting", description: "Children paint small round bushes using green paint and a sponge to represent shrubs.", materials: "Green paint, sponge, chart paper" },
            { name: "Plant Size Sorting Cards", description: "Picture cards of various plants are sorted into groups — tree, shrub, and herb — based on their size.", materials: "Plant picture cards, three sorting trays" },
            { name: "Tall and Short Plant Walk", description: "During a garden walk, children observe a tree and a shrub and compare their heights with teacher guidance.", materials: "Garden access, visual charts (optional)" },
            { name: "Creeper Walk Chart", description: "A chart shows vines growing along the ground (like watermelon or pumpkin). Children use fingers to trace their paths.", materials: "Chart with creeper pictures" },
            { name: "Climber String Game", description: "A vertical string taped to a wall represents a climber. Children paste paper leaves going upward.", materials: "String, wall-safe tape, green paper leaves, glue" },
            { name: "Leaf Matching Game", description: "Real or paper leaves are matched with their respective plant types (tree, herb, or shrub).", materials: "Leaf cutouts or real leaves, plant cards" },
            { name: "Tree vs Herb Sorting Basket", description: "A basket of mixed plant parts (herbs and tree leaves) is given. Children sort into 'Tree' or 'Herb' bowls.", materials: "Real herb leaves and tree leaves, two bowls" },
            { name: "Tree Trunk Rubbing", description: "Children hold a sheet of paper against a tree trunk and rub a crayon to see the bark texture.", materials: "Paper, crayons, outdoor tree" },
            { name: "Straw Climber Wall", description: "Children create a climber by sticking straws vertically on paper and adding paper leaves to show how it climbs.", materials: "Straws, glue, chart paper, green cutouts" },
            { name: "Button Shrub Craft", description: "Children paste green buttons in a circular, bushy shape on paper to represent a shrub.", materials: "Green buttons, glue, colored paper" },
            { name: "Plant Song & Movements", description: "Play a catchy song about plant types. Children perform movements — stretch tall for tree, crawl for creeper.", materials: "Bluetooth speaker, plant-type action song" },
            { name: "Seed Planting (Herbs)", description: "Each child plants coriander seeds in a paper cup with soil. They water it daily to watch it grow.", materials: "Paper cup, soil, coriander seeds, water" },
            { name: "Match the Shadow", description: "Plant images are matched to their shadows (e.g., tall tree, round shrub).", materials: "Flashcards with plant pictures and shadow silhouettes" },
            { name: "Plant Type Spinner", description: "A paper spinner shows types of plants. Children spin and act like the plant shown.", materials: "DIY paper spinner with labels, arrow pin" },
            { name: "Creeper Crawl Game", description: "Children crawl like creepers across a mat while the teacher explains how creepers grow on the ground.", materials: "Floor space or soft mat" },
            { name: "Tree Crown Craft", description: "Children create a crown with green paper leaves and pretend to be trees.", materials: "Green chart paper, scissors, tape/stapler" },
            { name: "Touch and Guess Herb", description: "Children are blindfolded and asked to touch and smell herbs to guess the plant (e.g., mint, tulsi).", materials: "Fresh herbs, blindfold" },
            { name: "My Herb Garden Poster", description: "Children paste herb pictures (or small real samples) onto a garden poster layout.", materials: "Poster sheet, glue, herb visuals" },
            { name: "Climber on Fence Activity", description: "Paper vine is attached to classroom railing. Children add leaves or small fruit cutouts to complete the climber.", materials: "Paper vine, tape, paper leaves/fruit" },
            { name: "Paper Plate Shrub", description: "Scrunched green paper is glued onto a paper plate to form a round shrub shape.", materials: "Paper plate, green paper, glue" },
            { name: "Tree Bark Touch", description: "Children touch real tree bark or textured material like sandpaper to feel roughness.", materials: "Outdoor tree or bark texture samples" },
            { name: "Water the Right Plant Game", description: "Show a set of toy or paper plants. Children pretend to water only the climber and herb types.", materials: "Paper plant visuals, toy watering can" },
            { name: "Match Plant to Fruit", description: "Children match different plants to their fruits (e.g., mango to tree, pumpkin to creeper, grapes to climber).", materials: "Picture cards of plants and fruits" },
            { name: "Leaf Printing Activity", description: "Dip real leaves in paint and press them on paper to see patterns. Compare leaf size and shape for trees, shrubs, and herbs.", materials: "Paint, leaves, paper, trays" },
            { name: "Herb Smell Game", description: "Cups contain herbs like mint and basil. Children close eyes, smell each cup, and guess the herb.", materials: "Paper cups, fresh herbs" },
            { name: "Button Tree Art", description: "Children use large buttons for tree tops and brown paper strips for trunks to make creative trees.", materials: "Buttons, glue, brown paper, base sheet" },
            { name: "Fabric Leaf Craft", description: "Use green fabric scraps cut into leaf shapes and glue them onto a tree template for texture.", materials: "Fabric scraps, scissors, glue, template" },
            { name: "Plant Size Walk", description: "Line up plant models or pictures by size. Children walk past each and call out: 'Big Tree,' 'Small Herb,' etc.", materials: "Toy plant models or laminated pictures" },
            { name: "Tree Puzzle Activity", description: "Children complete a puzzle showing tree parts: roots, trunk, branches, leaves. Teacher explains each part.", materials: "DIY plant puzzles or printed templates" },
            { name: "Music Freeze – Plant Pose", description: "Play music and when it stops, children freeze in a pose: tree (arms up), creeper (crawl), shrub (kneel round).", materials: "Bluetooth speaker, music" },
            { name: "Climber Leaf Sticking Game", description: "Teacher draws a vertical line (vine). Kids paste paper leaves going upward like a climber.", materials: "Chart paper, leaf cutouts, glue" },
            { name: "Big and Small Leaf Match", description: "Match large paper leaves (trees) and small ones (herbs). Paste onto labeled boards 'Big Leaf' / 'Small Leaf.'", materials: "Paper leaves, glue, labeled charts" },
            { name: "Creeper Yarn Trail", description: "Yarn is placed in curves on the ground to mimic a creeping vine. Children walk along it slowly like creepers.", materials: "Yarn, floor space" },
            { name: "Tree Shadow Walk", description: "Children observe shadows of trees and small plants outside and compare their lengths.", materials: "Outdoor time, sunny day" },
            { name: "Creeper Fruit Match", description: "Children identify fruits that grow on creepers (pumpkin, cucumber, watermelon) and paste them on creeper charts.", materials: "Fruit picture cutouts, glue, chart" },
            { name: "Tree and Shrub Collage", description: "Use mixed media (paper, buttons, fabric) to create a collage of a tall tree and a small shrub side by side.", materials: "Colored paper, glue, fabric, buttons" },
            { name: "Tree Story Time", description: "Teacher narrates a story where different plant types help animals. Afterward, children draw their favorite plant.", materials: "Story printout, crayons, paper" },
            { name: "Climber Dance", description: "Children dance and slowly stretch upward to soft music, mimicking how climbers grow with support.", materials: "Bluetooth speaker, open space" },
            { name: "Paper Plant Puppets", description: "Make stick puppets of trees, shrubs, climbers, etc. Kids use them during storytelling or pretend to be the plant.", materials: "Craft sticks, plant cutouts, glue" },
            { name: "Tree Size Comparison", description: "Using classroom objects (chair, blackboard), teacher asks which is taller or shorter than a tree.", materials: "Visual aids or classroom items" },
            { name: "Stick the Herb", description: "Children paste real or drawn herbs (mint, coriander) onto an 'Herb Garden' chart.", materials: "Herb pictures or samples, glue, chart" },
            { name: "Match & Paste", description: "Children match each plant type (tree, shrub, herb, creeper, climber) with its image and paste onto the correct label.", materials: "Plant type cutouts, glue, labeled sheets" },
            { name: "Shrub Dance Circle", description: "Children form a small tight circle representing a shrub and gently sway together as soft music plays.", materials: "Bluetooth speaker, open space" },
            { name: "Tree Poem Recitation", description: "Teacher recites a simple poem about a tree. Children repeat and act like trees (stretching up and swaying).", materials: "Poem printout, Bluetooth speaker (optional)" },
            { name: "Tree Finger Painting", description: "Children use fingers to paint the tree's green crown above a brown trunk. Talk about tree parts while painting.", materials: "Paint, chart paper, wipes for cleanup" },
            { name: "Plant Domino Game", description: "A domino-style game with plant pictures. Kids match same-type plants (tree to tree, herb to herb).", materials: "DIY domino cards with plant images" },
            { name: "Build a Garden Corner", description: "In one classroom corner, children help build a model garden with labeled cutouts of all 5 plant types.", materials: "Colored paper, tape, cutouts, labels" }
          ],
          "Parts of Plants": [
            { name: "Real Plant Observation", description: "Teacher brings a small live plant. Children observe it closely as the teacher names its parts: root, stem, leaf, flower, fruit.", materials: "Live plant, magnifying glass (optional)" },
            { name: "Paper Plant Assembly", description: "Children are given cutouts of roots, stem, leaves, flower, and fruit to arrange and paste on a chart.", materials: "Plant part cutouts, glue, chart paper" },
            { name: "Clay Model Plant", description: "Using clay, children create a 3D model of a plant with different colored parts.", materials: "Clay in green, brown, red, yellow" },
            { name: "Leaf Rubbing Art", description: "Children place a real leaf under paper and rub with crayons to see leaf veins and patterns.", materials: "Leaves, crayons, paper" },
            { name: "Stem Straw Stick", description: "Children glue green straws vertically on paper to represent stems and add paper leaves and flowers.", materials: "Straws, glue, paper, cutouts" },
            { name: "Flower Matching Game", description: "Match different flower pictures to their plant. Teacher explains that flowers grow on stems.", materials: "Flower cards, plant images" },
            { name: "Fruit Part Puzzle", description: "Children assemble simple fruit puzzles. Teacher explains that some plants give us fruits.", materials: "DIY fruit puzzles or laminated cutouts" },
            { name: "Touch and Feel Roots", description: "Display real roots (like carrot, beetroot) for children to touch. Teacher explains roots grow under the soil.", materials: "Real root vegetables, tray" },
            { name: "Button Flower Craft", description: "Children create flowers by sticking colorful buttons on top of paper stems.", materials: "Buttons, glue, paper" },
            { name: "Sand Root Digging", description: "Children use spoons to dig and uncover real or artificial roots buried in a sand tray.", materials: "Sand, plastic roots or real carrots, spoons" },
            { name: "Leaf Shape Sorting", description: "Provide leaves of different sizes. Children sort by size or shape and count.", materials: "Real or paper leaves" },
            { name: "Fruit Tasting Day", description: "Children taste pieces of fruits and match them to the plants or pictures shown.", materials: "Small fruit samples, matching chart" },
            { name: "Plant Song & Action", description: "Use a Bluetooth speaker to play a fun plant parts song. Children perform actions for each part (e.g., root = crouch, flower = hands open).", materials: "Bluetooth speaker, song, open space" },
            { name: "Water Transport Game", description: "Pour water on plant root side. Children see how water moves up to the leaves/stem.", materials: "Plant in transparent cup, colored water" },
            { name: "Parts of Plant Poem", description: "Recite a simple poem: 'Root in the soil, stem standing tall, leaves so green, flower to call...'", materials: "Chart with poem, actions" },
            { name: "Scent Hunt – Flowers and Leaves", description: "Blindfold children and let them sniff mint leaves, basil, and flower petals. Let them guess the plant part.", materials: "Mint, tulsi, rose, blindfold" },
            { name: "Root and Fruit Sorting", description: "Show a mix of vegetables/fruits (e.g., carrot, apple). Children sort which part they come from (root or fruit).", materials: "Vegetable models or pictures" },
            { name: "Paper Collage of a Plant", description: "Provide colored paper scraps to assemble a plant with labeled parts.", materials: "Colored paper, glue, chart base" },
            { name: "Leaf Dance", description: "Play music and children wave green paper leaves while dancing.", materials: "Bluetooth speaker, paper leaves" },
            { name: "Paint a Plant", description: "Children paint a plant from root to fruit using bright colors. Teacher helps label each part.", materials: "Paint, brushes, paper, markers" },
            { name: "Spoon Flower Game", description: "Place flower cutouts in a circle. Children use spoons to lift and match the right stem or leaf to each flower.", materials: "Spoons, flower and stem cutouts" },
            { name: "Build with Buttons – Plant", description: "Children create a full plant using buttons: green for leaves, brown for roots, red for flowers.", materials: "Buttons, glue, base paper" },
            { name: "Talk About Parts", description: "Teacher holds a real plant and points to each part, encouraging children to name it aloud.", materials: "Potted plant" },
            { name: "Color and Count Leaves", description: "Children color leaves on a worksheet and count them as a group.", materials: "Worksheets, crayons" },
            { name: "Cotton Flower Activity", description: "Use cotton balls to create fluffy white flowers on stems drawn on paper.", materials: "Cotton balls, glue, markers" },
            { name: "Leaf Fan Making", description: "Children fold green paper to make leaf-shaped fans. Teacher connects with leaf functions.", materials: "Green paper, markers" },
            { name: "Plant Parts Memory Game", description: "Match cards of plant parts (root–stem, flower–fruit). Teacher helps identify parts.", materials: "DIY flashcards" },
            { name: "Fruit Pasting Game", description: "Paste fruits on correct part of the drawn plant — above the stem, not on the root.", materials: "Paper fruits, plant diagram, glue" },
            { name: "Plant Puppet Show", description: "Children use puppets made of plant part cutouts to introduce themselves ('I am a leaf...').", materials: "Plant part cutouts, craft sticks, glue" },
            { name: "Balloon Flower Craft", description: "Use small balloons to make colorful flowers that stick to straw stems on paper.", materials: "Small balloons, straws, glue, paper" }
          ],
          "Flowers, Fruits & Vegetables": [
            { name: "Real Fruit and Veggie Talk", description: "Teacher brings real fruits and vegetables. Children hold, smell, and name them aloud.", materials: "Real fruits and vegetables, tray" },
            { name: "Flower Basket Craft", description: "Children paste paper flowers into a drawn basket on a sheet.", materials: "Paper flower cutouts, glue, chart" },
            { name: "Clay Fruit Plate", description: "Children make tiny fruit models using colored clay and place them on a paper plate.", materials: "Clay, paper plates" },
            { name: "Vegetable Stamp Painting", description: "Dip cut vegetables (ladyfinger, potato) in paint and stamp them on paper.", materials: "Cut vegetables, paint, paper" },
            { name: "Fruit Matching Cards", description: "Match fruit names to their pictures using flashcards.", materials: "Picture and name cards" },
            { name: "Taste & Tell", description: "Blindfolded, kids taste fruit pieces and guess which fruit it is.", materials: "Cut fruits, blindfold, plate" },
            { name: "Colour the Veggie", description: "Children color vegetable drawings (e.g., carrot = orange, brinjal = purple).", materials: "Coloring sheets, crayons" },
            { name: "Touch and Feel Table", description: "Real vegetables and fruits are placed in boxes. Children touch and describe: soft, hard, rough, smooth.", materials: "Real samples, boxes" },
            { name: "Paper Flower Garland", description: "Children link paper flowers together into a chain and wear as a garland.", materials: "Paper flowers, string, glue/tape" },
            { name: "Fruit Puzzle Game", description: "DIY 2-piece puzzles of fruits are cut and children join the halves.", materials: "Printed fruit pictures, scissors" },
            { name: "Veggie Basket Sorting", description: "Mix toy fruits and vegetables. Children pick only vegetables and place in a basket.", materials: "Toy food or cutouts, baskets" },
            { name: "Petal Count", description: "Real or paper flowers are given. Children count petals aloud with the teacher.", materials: "Real/paper flowers" },
            { name: "Spoon the Fruit", description: "Kids use a spoon to pick paper fruits and transfer them to a 'fruit bowl.'", materials: "Paper fruits, spoon, bowls" },
            { name: "Fruit Song with Actions", description: "Use a fruit-themed rhyme and children act like fruits (round like apple, tall like banana).", materials: "Bluetooth speaker, space" },
            { name: "Vegetable Printing Chart", description: "Children use sponge-stamped vegetables to create a veggie market scene.", materials: "Paint, sponge, paper" },
            { name: "Flower Petal Sticking", description: "Paste real or fabric petals to complete a half-drawn flower.", materials: "Real/fabric petals, glue, chart" },
            { name: "Rainbow Fruit Plate", description: "Give cutouts of fruits in different colors. Children paste in rainbow order.", materials: "Fruit cutouts in red, orange, yellow, green, etc., glue, chart" },
            { name: "Vegetable Dance", description: "Children act like different vegetables as music plays (carrot = stand tall, onion = curl up).", materials: "Bluetooth speaker, open space" },
            { name: "Fruit and Veggie Clay Garden", description: "Make a garden using clay – fruits on trees, veggies underground.", materials: "Clay, base tray" },
            { name: "Guess the Smell", description: "Close eyes and smell cut onions, mint leaves, lemon — guess the item.", materials: "Real samples, blindfolds" },
            { name: "My Favorite Fruit Drawing", description: "Each child draws and colors their favorite fruit and says its name aloud.", materials: "Crayons, white sheet" },
            { name: "Paper Cup Flower Pot", description: "Decorate paper cups and insert paper flowers to make pretend flower pots.", materials: "Paper cups, glue, paper flowers" },
            { name: "Fruit Salad Song", description: "Play a song about fruits and encourage kids to pretend to mix a fruit salad.", materials: "Bluetooth speaker, pretend play" },
            { name: "Leafy Vegetable Sorting", description: "Children sort leafy veggies like spinach, coriander, and cabbage into trays.", materials: "Real/printed leafy veggies, trays" },
            { name: "Button Fruit Art", description: "Use buttons to make pictures of fruits like grapes (purple buttons) and apples (red).", materials: "Buttons, glue, paper" },
            { name: "Vegetable Puppet Talk", description: "Stick cutout veggies on craft sticks. Children pretend the vegetable is talking about itself.", materials: "Vegetable cutouts, craft sticks, glue" },
            { name: "Flower Color Match", description: "Match colorful flowers to their names (e.g., red – rose, yellow – sunflower).", materials: "Flower picture cards" },
            { name: "Fruit Peel Fun", description: "Teacher peels banana, orange, etc. Kids observe and touch the fruit inside and outside.", materials: "Real fruits" },
            { name: "Spoon & Seed Drop", description: "Drop seeds (chickpeas, rajma) into labeled cups: 'fruit,' 'vegetable,' 'flower.'", materials: "Dry seeds, cups, spoons" },
            { name: "Build a Fruit Tree", description: "Children draw a tree trunk and paste paper fruits on it to complete the tree.", materials: "Paper trunk and fruit cutouts, glue" },
            { name: "Vegetable Size Sort", description: "Compare and sort vegetables into 'Big' and 'Small' trays.", materials: "Real/toy vegetables, labeled trays" },
            { name: "Paint the Petals", description: "Children paint large flower petals using finger painting.", materials: "Paint, paper, apron" },
            { name: "Dry Fruit Tray", description: "Children explore dry fruits like raisins and dates. Teacher explains some are plant fruits too.", materials: "Dry fruits, paper plates" },
            { name: "Name That Colour (Fruit Version)", description: "Show fruit pictures and ask 'What's the color of this fruit?'", materials: "Fruit picture flashcards" },
            { name: "Vegetable Counting Game", description: "Children count how many vegetables are in each tray (3 carrots, 2 brinjals...).", materials: "Toy vegetables or cutouts, trays" },
            { name: "Fruity Fingerprint Fun", description: "Make fruit shapes (grapes, cherries) using thumb/fingerprints and paint.", materials: "Paint, chart paper, wipes" },
            { name: "Story Time – Fruit World", description: "Tell a simple story where fruits talk, dance, and save the day!", materials: "Story cards or puppets" },
            { name: "Name & Stick Game", description: "Child picks a card (e.g., Apple) and pastes it under correct column: Flower / Fruit / Vegetable.", materials: "Picture cards, glue, sorting chart" },
            { name: "Vegetable Shop Role Play", description: "Kids play shopkeeper and customer using toy vegetables and fruits.", materials: "Toy food, pretend money, basket" },
            { name: "Outdoor Nature Hunt", description: "Go outside and look for flowers, fruits, or vegetables growing nearby. Children name what they find.", materials: "Outdoor space, paper and pencils" }
          ],
          "Land Animals": [
            { name: "Land Animal Puzzle Time", description: "Children complete simple animal puzzles (e.g., lion, tiger). Teacher discusses how these animals live on land.", materials: "Printed puzzles or cutouts of land animals" },
            { name: "Clay Animal Park", description: "Children make land animals like elephants or deer using clay and place them in a toy park layout.", materials: "Clay, paper base with drawn park" },
            { name: "Animal Footprint Match", description: "Children match animal footprint images to animals like dog, tiger, camel.", materials: "Footprint cards, animal pictures" },
            { name: "Land Animal Parade Song", description: "A Bluetooth speaker plays a marching song while children pretend to be land animals moving around the class.", materials: "Bluetooth speaker, animal masks (optional)" },
            { name: "Land Animal Collage", description: "Children paste cutouts or draw their favorite land animals on a 'Land Animal World' chart.", materials: "Animal cutouts, glue, chart paper" },
            { name: "Animal Sorting Tray", description: "Mix animals from all habitats. Children pick only land animals and sort them into a tray.", materials: "Toy animals or cutouts, sorting trays" },
            { name: "Straw Camel Craft", description: "Children use straws and paper to make a camel's hump and legs.", materials: "Straws, glue, brown paper" },
            { name: "Button Elephant Ears", description: "Children make a simple elephant and use grey buttons for its large ears.", materials: "Paper, grey buttons, glue" },
            { name: "Animal Dance", description: "Children mimic land animal movements – jump like a kangaroo, walk like a lion.", materials: "Open space, optional animal headbands" },
            { name: "Storytime – Jungle Talk", description: "Teacher narrates a story about animals in the jungle. Children draw one animal from the story afterward.", materials: "Story sheet, drawing paper, crayons" }
          ],
          "Water Animals": [
            { name: "Paper Plate Aquarium", description: "Children stick paper fish, octopus, and crabs onto a blue-painted plate to create an aquarium.", materials: "Paper plates, fish cutouts, blue paint, glue" },
            { name: "Bubble Fish Song", description: "A song about water animals plays, and children pretend to swim like fish and blow bubbles.", materials: "Bluetooth speaker, open space" },
            { name: "Water Animal Sorting", description: "From mixed animals, children pick only water animals and place them in a 'pond' tray.", materials: "Animal cards, blue tray or cloth" },
            { name: "Sponge Painting – Ocean Scene", description: "Use sponge to dab blue paint and create an ocean background. Children stick water animal cutouts on it.", materials: "Sponge, blue paint, chart, cutouts" },
            { name: "Clay Sea World", description: "Children use clay to make fish, octopus, starfish, and place them on blue paper.", materials: "Clay, blue paper" },
            { name: "Spoon & Fish Game", description: "Use a spoon to pick small fish cutouts from a bowl and transfer to a paper pond.", materials: "Fish cutouts, spoon, bowls" },
            { name: "Ocean Sound Play", description: "Play ocean and bubble sounds. Children guess the habitat and name water animals.", materials: "Bluetooth speaker, sound effects" },
            { name: "Button Jellyfish", description: "Create a jellyfish using paper dome and buttons hanging as tentacles.", materials: "Buttons, thread, paper, glue" },
            { name: "Underwater Story Time", description: "Narrate a story about a fish or whale. Children draw what they liked.", materials: "Story, paper, crayons" },
            { name: "Water Animal Movement", description: "Children pretend to move like sea creatures: wiggle like a fish, float like a jellyfish.", materials: "Open space" }
          ],
          "Farm Animals": [
            { name: "Farm Animal Puzzle", description: "Match animal with its home: Cow–shed, Hen–coop.", materials: "Animal and home picture cards" },
            { name: "Farm Sounds Game", description: "Play farm animal sounds; children guess and mimic the animal.", materials: "Bluetooth speaker, animal sound clips" },
            { name: "Fingerprint Sheep", description: "Children make sheep by using white fingerprint dots on paper and drawing legs.", materials: "Paint, paper, markers" },
            { name: "Paper Cup Hen", description: "Make a hen by turning a paper cup upside down and sticking feathers.", materials: "Paper cups, colored paper, glue" },
            { name: "Old MacDonald Song", description: "Sing the 'Old MacDonald' song and let children act each animal sound in the song.", materials: "Bluetooth speaker, space to move" },
            { name: "Barnyard Sorting Game", description: "From a mix of animals, pick only farm animals and stick on a barn chart.", materials: "Animal cutouts, chart" },
            { name: "Cow Spot Matching", description: "Stick black paper spots on a white cow picture in the correct places.", materials: "Cow drawing, black spots, glue" },
            { name: "Button Pig Nose Craft", description: "Create pig face with paper, using pink buttons as the nose.", materials: "Pink paper, buttons, glue" },
            { name: "Milk Comes from Cow", description: "Show a milk packet and a toy cow. Explain that milk comes from cows.", materials: "Milk packet, toy/model cow" },
            { name: "Vegetable Feeding Activity", description: "Pretend to feed vegetable cutouts to farm animals (e.g., carrots to horse).", materials: "Paper vegetables, animal cutouts" }
          ],
          "Pet Animals": [
            { name: "Pet Care Role Play", description: "Pretend to bathe, feed, and walk a pet using toys or drawings.", materials: "Toy pet or images, props" },
            { name: "Pet Animal Sorting", description: "Pick only pet animals from mixed cutouts and paste onto the 'Pet Wall.'", materials: "Mixed cutouts, glue, chart" },
            { name: "Dog Collar Craft", description: "Make a paper collar and write a name for a pretend pet.", materials: "Paper strip, crayons, stickers" },
            { name: "Story – My Pet Dog", description: "Teacher narrates a story of a child and their pet. Kids draw the pet afterward.", materials: "Story, crayons, paper" },
            { name: "Cat & Dog Song", description: "Play a soft song about pets. Children act like a meowing cat or barking dog.", materials: "Bluetooth speaker" },
            { name: "Spoon & Bowl Game", description: "Use a spoon to transfer 'food' (buttons or paper bits) into pet bowls.", materials: "Spoons, bowls, buttons" },
            { name: "Paper Plate Dog Face", description: "Make a dog face using a paper plate and fabric/paper ears.", materials: "Paper plate, fabric, glue" },
            { name: "Pet Home Matching", description: "Match animals to their homes: Dog–kennel, Fish–bowl, Cat–house.", materials: "Flashcards" },
            { name: "Feed the Pet Activity", description: "Toy animals are kept on a mat. Children pick correct food items and feed them.", materials: "Toy pets, toy food, mat" },
            { name: "Pet Picture Talk", description: "Show a picture of a pet with its owner. Children describe what's happening.", materials: "Pet-themed pictures" }
          ],
          "Animals and Their Babies": [
            { name: "Baby Match Game", description: "Children match pictures of animals with their babies (e.g., Dog–Puppy, Cat–Kitten).", materials: "Picture cards" },
            { name: "Clay Mama & Baby Models", description: "Kids make simple clay models of animal and its baby (e.g., big cat, small kitten).", materials: "Clay, plastic mat" },
            { name: "Baby Animal Song", description: "Play a rhyme that names animal babies. Children act or point to pictures.", materials: "Bluetooth speaker, rhyme track" },
            { name: "Draw and Color Babies", description: "Children color pictures of baby animals like a chick or a calf.", materials: "Coloring sheets, crayons" },
            { name: "Animal Family Puppets", description: "Use paper cutouts or stick puppets of 'animal families' and children identify the baby.", materials: "Paper, glue, craft sticks" },
            { name: "Matching Footprints", description: "Match big and small footprints (e.g., elephant–baby elephant) to discuss animal families.", materials: "Footprint cards" },
            { name: "Baby Animal Sorting", description: "Children sort baby animals into a tray labeled: Land / Water / Farm.", materials: "Cards or figures of baby animals" },
            { name: "Stuffed Toy Talk", description: "Bring a few stuffed animals and ask, 'Who is the baby of this animal?'", materials: "Stuffed toys or pictures" },
            { name: "Animal Babies Story", description: "Narrate a short story about a lost baby animal. Ask questions afterward.", materials: "Story cards or visuals" },
            { name: "My Pet and Its Baby", description: "Children talk or draw their pet and its baby (real or imaginary).", materials: "Drawing paper, crayons" }
          ],
          "Animals and Their Homes": [
            { name: "Match the Home", description: "Match animals to their homes: Dog–Kennel, Bird–Nest, Lion–Den.", materials: "Picture flashcards" },
            { name: "Home Craft – Nest & Kennel", description: "Children make simple animal homes using paper (e.g., nest with string and paper).", materials: "Paper, glue, straw/thread" },
            { name: "House Sorting Tray", description: "Place mixed animal pictures and children place them inside cups or trays labeled as 'Nest', 'Cave', etc.", materials: "Plastic cups, animal cutouts" },
            { name: "Animal Home Song", description: "Play a song about animal homes and act it out.", materials: "Bluetooth speaker" },
            { name: "Draw My Home", description: "Children choose one animal and draw its home (e.g., rabbit–burrow).", materials: "Paper, crayons" },
            { name: "Story Time – Where Do I Live?", description: "Teacher reads a story about animals looking for their homes.", materials: "Picture storybook or flashcards" },
            { name: "Spoon Nest Game", description: "Transfer paper chicks into a cup labeled 'Nest' using a spoon.", materials: "Spoon, paper chicks, cup" },
            { name: "Fabric Den Collage", description: "Children use old fabric scraps to fill in a drawing of a lion's den.", materials: "Scrap cloth, glue, worksheet" },
            { name: "Home Puzzle", description: "Puzzle cards where one side shows an animal and the other shows its home.", materials: "DIY puzzle cards" },
            { name: "Indoor Walk – Find My Home", description: "Place signs of animal homes around the room. Call out an animal, and children go to the right 'home.'", materials: "Printed signs, open space" }
          ],
          "Animals and Their Sounds": [
            { name: "Sound & Match", description: "Play animal sounds on the speaker; children hold up the correct animal card.", materials: "Bluetooth speaker, animal cards" },
            { name: "Make the Sound Game", description: "Teacher shows an animal, and children make its sound together.", materials: "Picture flashcards" },
            { name: "Animal Song Time", description: "Play a fun 'Animal Sound' rhyme and let kids mimic the sounds.", materials: "Bluetooth speaker" },
            { name: "Paper Plate Animal Masks", description: "Children create paper masks and wear them while making the animal's sound.", materials: "Paper plates, crayons, string" },
            { name: "Which Sound Am I?", description: "Teacher makes a sound; kids guess the animal (e.g., 'Meow' – Cat).", materials: "None" },
            { name: "Animal Band", description: "Children form a pretend 'band' making different animal sounds together.", materials: "Open space" },
            { name: "Color and Roar", description: "Color the lion and then roar like one! Same for other animals.", materials: "Coloring sheets, crayons" },
            { name: "Puppet Sound Time", description: "Show animal puppets or paper cutouts. Ask children to give the sound.", materials: "Animal puppets, paper cutouts" },
            { name: "Sound Trail", description: "Set up stations where each has a sound. Kids move from one to another guessing and acting the sound.", materials: "Bluetooth speaker or prerecorded sounds" },
            { name: "Sound Sorting", description: "Give picture cards. Children sort into 'Loud Sounds' (lion, dog) and 'Soft Sounds' (cat, rabbit).", materials: "Picture cards, sorting chart" }
          ],
          "Birds": [
            { name: "Feather Sorting Fun", description: "Children sort different color/size feathers into trays.", materials: "Real/artificial feathers, sorting trays" },
            { name: "Bird Sound Guess", description: "Play bird sounds and children guess which bird it is (sparrow, parrot, owl).", materials: "Bluetooth speaker, sound files" },
            { name: "Clay Nest Making", description: "Children make a bird nest using clay and place beads as 'eggs'.", materials: "Clay, beads, tray" },
            { name: "Paper Plate Bird Craft", description: "Children create birds using paper plates, drawing beaks and sticking feathers.", materials: "Paper plates, crayons, feathers, glue" },
            { name: "Flying Bird Action Song", description: "Play a song like 'Two Little Dicky Birds' and act out flying birds.", materials: "Bluetooth speaker" },
            { name: "Match the Beak", description: "Match pictures of birds with their unique beaks (e.g., duck, eagle, parrot).", materials: "Flashcards of birds and beaks" },
            { name: "Straw Bird Legs", description: "Make birds using paper and stick straws as legs.", materials: "Straws, paper, glue" },
            { name: "Egg and Nest Counting", description: "Children count eggs placed in paper nests.", materials: "Paper cups, paper eggs" },
            { name: "Draw My Bird", description: "Children draw their favorite bird and say its name.", materials: "Paper, crayons" },
            { name: "Bird Puzzle Game", description: "Simple 2-piece bird puzzles children solve and name the bird.", materials: "Bird cutouts, puzzle sheets" },
            { name: "Button Owl Craft", description: "Use brown buttons to make an owl's body on a drawing.", materials: "Paper, brown buttons, glue" },
            { name: "Bird Walk Outdoor", description: "Children go for a walk to observe birds (if possible). Discuss what they saw.", materials: "Outdoor area, teacher support" },
            { name: "Paper Cup Parrot", description: "Turn paper cups into parrots with colored paper and feathers.", materials: "Cups, colored paper, glue" },
            { name: "Bird Homes Sorting", description: "Match birds with their homes (Nest, Tree Hole, etc.).", materials: "Flashcards" },
            { name: "Feather Painting", description: "Use feathers as brushes to paint a colorful background.", materials: "Paints, feathers, paper" },
            { name: "Story Time – The Clever Bird", description: "Narrate a story like 'Thirsty Crow'. Children act out the ending.", materials: "Story props, water pot, paper stones" },
            { name: "Birds and Their Colors", description: "Match bird pictures with their color buttons (green – parrot, white – dove).", materials: "Bird cards, color buttons" },
            { name: "Beak Pick Game", description: "Use tweezers or spoon to pick beads like birds pick food.", materials: "Tweezers/spoons, beads, bowls" },
            { name: "Bird Dance Freeze", description: "Children fly around like birds; freeze when the music stops.", materials: "Bluetooth speaker" },
            { name: "Bird & Egg Hunt", description: "Hide bird and egg pictures around class. Children find and match them.", materials: "Hidden pictures" }
          ],
          "Insects": [
            { name: "Bug Hunt in Class", description: "Children search for pictures of insects hidden around the room.", materials: "Insect flashcards or cutouts" },
            { name: "Insect Action Song", description: "Play songs like 'The Ants Go Marching' and children mimic the movements.", materials: "Bluetooth speaker" },
            { name: "Clay Insects", description: "Children make simple insects like ladybugs or caterpillars from clay.", materials: "Clay, paper plate base" },
            { name: "Color the Insect", description: "Children color insect pictures (e.g., butterfly, ant, bee).", materials: "Crayons, coloring sheets" },
            { name: "Insect Sorting Tray", description: "Mix bugs and other animals – kids sort only insects into a tray.", materials: "Flashcards or cutouts" },
            { name: "Button Ladybug Craft", description: "Make ladybug bodies with red buttons and draw black spots.", materials: "Buttons, paper, markers" },
            { name: "Paper Butterfly Folding", description: "Children make butterflies using fan-folded paper.", materials: "Colored paper, pipe cleaners or straws" },
            { name: "Insect Walk Imitation", description: "Children crawl like ants, buzz like bees, hop like grasshoppers.", materials: "Open space" },
            { name: "Insect Puzzle Game", description: "Two-piece puzzles for insects that children join correctly.", materials: "Picture puzzle cards" },
            { name: "Spoon Caterpillar Game", description: "Move small pom-poms or beads with a spoon like a crawling caterpillar.", materials: "Spoon, small beads" },
            { name: "Insect Sound Play", description: "Play insect sounds like buzzing bees or chirping crickets. Children guess them.", materials: "Bluetooth speaker" },
            { name: "Butterfly Mirror Art", description: "Children decorate one wing of the butterfly, fold it to print on the other side.", materials: "Paints, butterfly paper outline" },
            { name: "Insect & Food Match", description: "Match insects to what they eat – Bee (flower), Ant (sugar).", materials: "Flashcards" },
            { name: "Paper Cup Bee", description: "Turn paper cups into bees using yellow paint and paper wings.", materials: "Cups, paint, paper" },
            { name: "Insect Number Count", description: "Children count how many legs insects have – Ant (6), Spider (8), etc.", materials: "Flashcards" },
            { name: "Insect Parade Role Play", description: "Children pretend to be different insects and walk together.", materials: "Optional headbands, open space" },
            { name: "Insect Dot Painting", description: "Children fill insect outlines with colorful dots (using earbuds).", materials: "Earbuds, paint, insect outline" },
            { name: "Bug in the Cup Game", description: "Children drop a small paper bug into a cup placed at a distance.", materials: "Paper bugs, cups" },
            { name: "Butterfly Button Art", description: "Decorate a butterfly with colored buttons for wings.", materials: "Butterfly drawing, buttons, glue" },
            { name: "Story Time – Busy Insects", description: "Narrate a story involving hardworking ants or buzzing bees.", materials: "Storybook or flashcards" }
          ],
          "Motor Skills Development": [
            { name: "Button Sorting Fingers", description: "Children sort buttons by size or color using only their fingers or tweezers.", materials: "Buttons, trays or bowls, tweezers (optional)" },
            { name: "Clay Pinch & Roll", description: "Students roll small clay balls or pinch shapes to strengthen finger muscles.", materials: "Clay, paper mat" },
            { name: "Spoon and Bead Transfer", description: "Pick beads using a spoon and place them into cups — no fingers allowed!", materials: "Beads, spoon, cups" },
            { name: "Paper Crumple Art", description: "Children crumple scrap paper and stick it onto drawn shapes to decorate.", materials: "Scrap paper, glue, shape outlines" },
            { name: "Straw Threading Necklace", description: "Children thread straw pieces or buttons onto string to make a necklace.", materials: "Straws (cut), thread, buttons" },
            { name: "Animal Walk Parade", description: "Children move like different animals — hop like a frog, crawl like a bear.", materials: "Open space, animal action cards (optional)" },
            { name: "Finger Painting Fun", description: "Paint with fingers, making lines, dots, or letters.", materials: "Paint, paper, aprons" },
            { name: "Pick and Place with Tongs", description: "Children use tongs to move small objects from one bowl to another.", materials: "Tongs, beads/buttons, bowls" },
            { name: "Marching to Music", description: "Children march, jump, and stretch in rhythm with music.", materials: "Bluetooth speaker, upbeat music" },
            { name: "Stick Shape Builder", description: "Use ice cream sticks or straws to form shapes and letters.", materials: "Sticks/straws, glue (optional)" },
            { name: "Balance Walk", description: "Walk on a line made with tape on the floor or a rope.", materials: "Floor tape/rope" },
            { name: "Play Dough Pinch Animals", description: "Make animals by pinching and molding clay.", materials: "Play dough/clay" },
            { name: "Cup Stack Race", description: "Stack paper cups into towers and unstack them quickly.", materials: "Paper cups" },
            { name: "Finger Tracing Patterns", description: "Children trace patterns (zig-zags, spirals) on paper using fingers or crayons.", materials: "Pattern worksheets, crayons" },
            { name: "Thread the Button Game", description: "Insert large buttons through slits in a cardboard 'button board.'", materials: "Cardboard board, buttons, string" },
            { name: "Push the Ball Game", description: "Push small plastic balls across a table using only a straw.", materials: "Straws, plastic balls" },
            { name: "Kneel and Roll", description: "Children roll plastic balls across the floor to hit a target like a cup.", materials: "Balls, cups/targets" },
            { name: "Tearing & Pasting Shapes", description: "Tear paper into bits and paste them onto outlined shapes.", materials: "Paper scraps, glue, shape outlines" },
            { name: "Follow the Music Moves", description: "Bluetooth speaker plays commands like 'Jump!', 'Turn!', 'Freeze!'", materials: "Bluetooth speaker" },
            { name: "Stretch and Count", description: "Children perform stretches while counting aloud (e.g., arm raises, toe touches).", materials: "Open space" }
          ]
        }
      },
      {
        volume: 3,
        topics: {
          "SAFETY AT HOME": [
            { name: "Yes or No Safety Chart", description: "Help children identify safe vs unsafe behavior at home. Prepare a chart with two columns labeled 'Safe' and 'Unsafe.' Show printed cutouts of home-related activities or items. Hand out one picture to each child. The child shows the picture and the class discusses whether the activity is safe or not.", materials: "Chart paper, printed picture cutouts (e.g., knife, fan, soft toy, plug, bed), glue, ✔️/❌ stickers or crayons" },
            { name: "Danger Hunt in the House Drawing", description: "Recognize common household hazards. Provide a printed scene with 6–8 elements: some safe (e.g., a book, bed) and some unsafe (e.g., knife on floor, plug without cover). Ask children to observe the scene carefully. Tell them to circle the unsafe items using a red crayon.", materials: "Worksheet with a room drawing (bedroom, kitchen, or living room), crayons" },
            { name: "Don't Touch Mystery Box", description: "Teach children to identify what not to touch at home. Place the toy items inside a mystery box. Cut a hole so kids can reach in without seeing. Ask each child to reach into the box and pick one item. Without looking, the child guesses what it is by touch and pulls it out.", materials: "A closed cardboard box with holes, toy versions of household items (knife, toy, spoon, wire, comb, toy plug)" },
            { name: "Hot or Not? Game", description: "Help children learn about temperature-based safety. Hold up one card at a time. Ask the class: 'Hot or not?' Students reply together or raise hands. For hot items, say together: 'Hot! Don't touch!' For safe items, say: 'Safe! I can touch.'", materials: "Flashcards of hot items (candle, iron, stove) and not-hot items (pillow, toy, table)" },
            { name: "Electrical Socket Stamping", description: "Reinforce the danger of sockets and wires. Show students real-life pictures or toy sockets. Provide each child with a chart sheet containing different images (both safe and unsafe). Instruct: 'Stamp red only on the items you should not touch.'", materials: "Chart with printed drawings of sockets, fans, plugs, and safe objects. Potato stamp dipped in red paint" },
            { name: "Home Safety Song (Action-Based)", description: "Help children remember important safety rules through music and movement. Play a short, fun song about home safety. Sample lyrics: 'If the socket looks so scary, don't go near (clap clap) If the water's on the floor, don't run here (clap clap)'", materials: "Bluetooth speaker, pre-recorded safety rhyme (or teacher can sing)" },
            { name: "Roleplay – Safe in the Kitchen", description: "Teach why kitchens can be dangerous. Set up a corner or use picture cards showing a kitchen. Explain that the kitchen can be hot and sharp, so children should never enter alone. Teacher acts as 'Parent' and demonstrates safe vs unsafe behavior.", materials: "Toy kitchen setup or flashcards of kitchen items (knife, stove, spoon, fridge)" },
            { name: "Match the Safe Item", description: "Help differentiate between safe and unsafe household objects. Display or distribute cards in pairs. Ask the child to pick which one is safe. Child holds up the safe card and says: 'This is safe.' Class repeats together.", materials: "Picture cards of pairs (e.g., knife vs spoon, remote vs wire)" },
            { name: "Home Safety Puppet Talk", description: "Use puppets to explain do's and don'ts. Teacher uses two puppets – one puppet does unsafe things, and the other puppet corrects. Example: Puppet 1: 'I want to play with scissors!' Puppet 2: 'No, that can hurt you! Let's play with soft toys instead.'", materials: "Sock puppets or hand puppets" },
            { name: "Do Not Open! Game", description: "Teach children not to open harmful containers. Show the flashcards one by one. Ask: 'Can we open this without an adult?' Children raise thumbs up for safe, thumbs down for unsafe. After each, explain why: 'Medicine is for adults.'", materials: "Picture flashcards of household items (medicine bottle, toy box, cleaning spray, food container)" },
            { name: "My Safety Door Poster", description: "Teach children basic door safety rules at home. Draw a big house door on chart paper. Distribute small cutouts (lock, person knocking, family members). Ask: 'Should we open the door for everyone?' Let each child paste safe symbols (e.g., lock, mummy) on the door.", materials: "Chart paper, markers, glue, cutouts (lock, doorbell, stranger, family)" },
            { name: "Clay Safe Zone", description: "Teach kids what is safe to use at home. Ask children: 'What are safe things we use at home?' Help them mold soft items like soap, pillow, towel, or toys. Each child names what they made and says: 'This is safe!'", materials: "Clay or playdough" },
            { name: "Don't Run Inside Game", description: "Demonstrate why running indoors is dangerous. Ask children to run around lightly. Then, play a buzzer or say 'Freeze!' Show why bumping into someone or furniture is unsafe. Now, repeat the game walking only.", materials: "Open classroom space" },
            { name: "Safety Matching Straws", description: "Help children connect dangerous items with the correct action. Place cards with objects (plug, iron, scissors) on one side. On the other side, place matching 'rules' (e.g., Don't touch, Ask adult). Children use straws to connect matching pairs.", materials: "Picture cards, straws, glue" },
            { name: "Candle or Light? Game", description: "Help children recognize what can burn or hurt. Show each card one at a time. Ask: 'Can this burn us?' or 'Is this safe?' Children answer with 'Hot' or 'Safe.' After each answer, explain why.", materials: "Flashcards of candle, torch, lamp, lighter, sun" },
            { name: "Who's Knocking? – Stranger Danger Roleplay", description: "Teach children not to open doors for strangers. Set up a mock door using cardboard or stand-in. Teacher or helper knocks and says different things like: 'I'm your friend, open the door!' 'I'm your mummy!' 'Pizza delivery!'", materials: "Cardboard cutout of a door or pretend doorway" },
            { name: "What's the Safe Way? Maze Game", description: "Help children choose safe behavior paths. Show the maze with safe and unsafe pictures (e.g., toys vs plugs). Children use a crayon to trace the safe path to reach the teddy. As they trace, ask: 'What is this?' 'Is it safe?'", materials: "A4 paper with a drawn maze showing paths — one leading through safe items, one through unsafe" },
            { name: "Household Safety Puzzle", description: "Reinforce recognition of safe vs unsafe items. Provide children with picture pieces (e.g., toy, knife, plug, ball). Children complete the puzzle to form two groups: SAFE and UNSAFE. Once done, they paste it on two columns.", materials: "Puzzle pieces (DIY by cutting paper pictures), glue" },
            { name: "'Can I Use This?' Chart Sorting", description: "Teach children which household items need adult help. Give children cards or draw pictures (scissors, microwave, comb, spoon). Each child picks a card and decides: 'Can I use it myself or do I need an adult?'", materials: "Chart with columns – 'I Can Use' / 'Ask an Adult'" },
            { name: "Fire Is Not a Toy", description: "Make children aware of fire hazards. Show real images or pictures of fire sources. Ask: 'Can we play with this?' (children reply 'No!') Use a chant: 'Fire is hot, don't go near, Stay away, be safe, my dear!'", materials: "Pictures of fire, candle, matchstick, lighter" },
            { name: "My Clean Hands Song (Handwashing Safety)", description: "Reinforce safe hygiene after using toilet or before eating. Teach a short rhyme: 'Tops and bottoms, in between, Wash them well to keep them clean!' Demonstrate steps using hand movements.", materials: "Bluetooth speaker or teacher voice, hand soap (optional demo)" },
            { name: "Play Area Safety Tour", description: "Teach safe use of swings, slides, etc. Take children to the play area. Show each play object (slide, see-saw) and explain rules: 'One at a time.' 'Wait for your turn.' Children follow each rule while trying equipment.", materials: "Actual or pretend play area" },
            { name: "Safety Coloring – What Should I Do?", description: "Identify safe actions in school. Distribute the worksheet. Ask students to color only the pictures showing good behavior. Review each image after coloring: 'Is this child shouting?' (Yes) 'Should we do this?' (No)", materials: "Worksheet with images (e.g., shouting vs raising hand, running vs walking)" },
            { name: "Safety Dice Game", description: "Make safety learning fun through random challenges. Each child rolls the dice. Whatever action shows up, they must act it out. Teacher explains the importance of each behavior. Class repeats the rule after every turn.", materials: "A large dice with actions on each side (e.g., Walk quietly, Say sorry, Don't push)" },
            { name: "Spot the Mistake Wall", description: "Train children to identify what is wrong in a school setting. Stick the chart on the wall. Point to each mistake. Ask: 'What's wrong here?' Children take turns answering and suggesting what should happen instead.", materials: "Chart with illustrations showing small mistakes (e.g., throwing paper on floor, not raising hand, standing on bench)" },
            { name: "'Touch or Tell?' Sorting Circle", description: "Teach children which situations require adult help. Place all picture cards in the center. Draw two circles labeled 'I Can Handle' and 'I Tell an Adult'. Children pick a picture and place it in the correct circle.", materials: "Picture cards showing various scenarios (e.g., broken glass, spilled water, toy on floor, hurt finger)" },
            { name: "Home Safety Collage", description: "Build visual memory of safe vs unsafe items. Teacher pre-cuts pictures of home items. Students choose and paste them on a collage under two headings: 'Safe to Use' and 'Not for Children'.", materials: "Old magazines, glue, scissors (teacher only), chart paper" },
            { name: "Safety Bingo – Home Edition", description: "Reinforce safety vocabulary. Distribute bingo sheets with 6 images each. Teacher calls out images: 'Find the toy box!', 'Find the plug!' Children cover safe items with buttons or paper chips.", materials: "Bingo grids with safe home objects, picture chips" },
            { name: "Follow the Rule Train", description: "Practice home safety through rhythm and roleplay. Children form a train line holding shoulders. Teacher calls out safety instructions: 'Stop near the stairs!' 'No touching wires!' Train halts or acts as per command.", materials: "None or optional Bluetooth speaker" },
            { name: "Don't Climb Game", description: "Teach the danger of climbing unsafe furniture. Set up a space with pretend furniture. Roleplay: Teacher pretends to climb and pretend falls. Ask: 'Should we do that?' (Children: 'No!') Let children repeat safe behavior: sit, walk around, not climb.", materials: "Foam blocks or pillows, toy chairs for pretend play" },
            { name: "Water Spill Simulation", description: "Teach about slipping hazards. Spray light water on mat. Show how it can become slippery. Use toy doll to 'slip' as demo. Children walk slowly and discuss how to avoid spills.", materials: "Laminated floor area or plastic mat, water spray bottle" },
            { name: "Talk to the Toy – Unsafe Feelings", description: "Help children verbalize discomfort. Use a toy and say: 'Teddy feels scared when he sees fire.' Ask: 'What should Teddy do?' Let each child whisper a safe solution to the toy.", materials: "Toy (teddy or puppet)" },
            { name: "Safe or Unsafe Flash Jump", description: "Add movement to reinforce safety. Teacher shows a flashcard. If it's safe, children jump once and clap. If it's unsafe, children freeze and shout 'NO!' Mix fast and slow pacing for fun.", materials: "Flashcards with objects or actions" },
            { name: "Door Safety Sticker Craft", description: "Remind children to stay away from door gaps. Show pictures of finger caught in a door. Hand out paper doors. Children place sad sticker near unsafe zones (hinges) and smiley sticker on safe zones (doorknob).", materials: "Paper doors, smiley and sad face stickers" },
            { name: "Electricity is Not a Toy", description: "Teach about electrical danger. Show real images or toy versions of sockets. Ask: 'Can we touch this?' Paste cutouts of items that should and should not be plugged. Let children color only the safe items.", materials: "Toy sockets, wires, chart" },
            { name: "Toy Sharp vs Soft Sort", description: "Reinforce safe texture understanding. Set all items on a tray. Each child picks one and says: 'Soft' or 'Sharp' Sort into 2 baskets. Explain: 'Soft toys are safe. Sharp things can hurt.'", materials: "Toy knife, soft toys, plastic blocks, balls" },
            { name: "Clean-Up Helpers", description: "Prevent tripping hazards. Drop toys around the classroom floor. Ask: 'Can we walk safely here?' Children help clean up. Afterward, discuss: 'Toys go in the box to stay safe.'", materials: "Toys, boxes, floor mats" },
            { name: "Picture Talk – Unsafe Scene", description: "Build observation and discussion skills. Show the picture. Ask: 'What do you see here?' Encourage children to point out what's unsafe. Teacher lists each item on board. Let them color only the safe parts.", materials: "Printed picture of a messy room with hazards" },
            { name: "Safety Role Call", description: "Build personal responsibility for safety. Each child stands and says a rule aloud (e.g., 'I don't touch the iron'). Teacher helps if needed. After each rule, class says 'Yes! That is safe!'", materials: "None" },
            { name: "Light vs Fire Game", description: "Distinguish between helpful and dangerous lights. Display items one by one. Ask: 'Is this fire or light?' Use flashlight and candle demos (no real flame for kids). Children raise red for danger (fire), green for safe (light).", materials: "Flashlight, candle, fairy lights, pictures" }
          ],
          "SAFETY AT SCHOOL": [
            { name: "My School Safety Chart", description: "Help children learn and remember school safety rules. Draw or paste simple images on a chart: A child walking in line, A child sitting quietly, A child raising their hand, A child using a dustbin. Label each picture with a safety rule: 'Walk, Don't Run,' 'Throw Waste in Bin,' etc.", materials: "Chart paper, sketch pens, cutouts of children following rules, glue" },
            { name: "Walk in Line Game", description: "Teach the importance of walking safely in the school premises. Arrange children in a single line. Teacher walks in front as a leader. Practice walking slowly around class or school corridor. Every time someone runs, the line stops and recites: 'We walk, not run!'", materials: "None" },
            { name: "Classroom Rules Song", description: "Reinforce classroom safety in a fun, musical way. Teach children a short, easy-to-remember song like: 'In the classroom, we don't shout, We sit quiet and move about, Raise your hand to talk or ask, Listen well in every task!'", materials: "Bluetooth speaker or teacher voice, a catchy classroom rule song (e.g., to the tune of 'Twinkle Twinkle')" },
            { name: "First Aid Box Visit", description: "Familiarize students with the school's first aid box and what it's for. Bring a first aid box and show children what's inside. Explain each item: 'This is for small cuts. This is a thermometer for fever.' Emphasize: 'Only teachers or nurse use these items.'", materials: "First aid box, bandages, cotton, thermometer (no real medicines)" },
            { name: "Safe Play vs Unsafe Play Sorting", description: "Identify right and wrong playground behaviors. Mix up the flashcards. Let children sort them into two baskets: 'Safe' and 'Unsafe.' For each card, ask: 'What do you see here? Is it good?' Once sorted, review all safe behaviors aloud.", materials: "Flashcards showing good/bad play (e.g., sliding properly vs pushing on swing)" },
            { name: "Don't Touch! Circle Game", description: "Reinforce awareness of unsafe objects in school. Display all the objects in a circle or on a mat. Call out: 'Find something that is NOT safe to touch without permission.' Children go one by one and point or pick the unsafe item.", materials: "Object cards (e.g., scissors, stapler, pencil, paintbrush)" },
            { name: "Puppet Fight Prevention", description: "Teach emotional control and avoiding fights. Puppet A bumps into Puppet B. Puppet B gets angry. Ask children: 'What should Puppet B do?' Let students take turns suggesting better actions: 'Say sorry.' 'Tell the teacher.' 'Walk away.'", materials: "Puppets" },
            { name: "Safe School Wall Art", description: "Create a visual reminder of classroom safety rules. Draw or stick pictures of classroom safety actions: Sitting properly, Raising hand, Walking in line, Not shouting. Read each picture aloud and discuss.", materials: "Chart paper, crayons, stickers, cutouts" },
            { name: "Clay Safety Items", description: "Reinforce safe behavior by creating clay items. Ask: 'What helps us stay safe in school?' Children make clay shapes like whistle, safety sign, dustbin, or hand. Each child names their item and says why it's safe.", materials: "Clay or playdough" },
            { name: "Roleplay – Toilet Rules", description: "Practice hygiene and privacy in school restrooms. Use props or pretend toilet area setup. Demonstrate proper actions: Ask teacher to go, Flush, Wash hands. Children take turns acting out steps.", materials: "Toy soap, tissue, chart of toilet area" },
            { name: "Shoes On Always", description: "Explain why wearing shoes in school is important. Ask: 'Can we run in school without shoes?' Remove shoes for a moment and ask children to walk. Explain how sharp objects or slippery floors can hurt. Help them wear their shoes back.", materials: "Each child's own shoes" },
            { name: "Spot the Safety Sign", description: "Teach common safety signs used in school. Show one safety sign at a time. Ask: 'What do you think this means?' Help decode each sign with gestures or roleplay. Children draw their favorite sign on paper.", materials: "Flashcards or printouts of school signs (No running, Wash hands, Quiet Zone)" },
            { name: "How to Call Teacher", description: "Teach students polite ways to seek help. Discuss scenarios: 'You feel unwell.' 'You dropped water.' Ask: 'What should you do?' Teach steps: Raise your hand, Say: 'Excuse me, Teacher'", materials: "None" },
            { name: "My Clean Hands Song (Handwashing Safety)", description: "Reinforce safe hygiene after using toilet or before eating. Teach a short rhyme: 'Tops and bottoms, in between, Wash them well to keep them clean!' Demonstrate steps using hand movements.", materials: "Bluetooth speaker or teacher voice, hand soap (optional demo)" },
            { name: "Play Area Safety Tour", description: "Teach safe use of swings, slides, etc. Take children to the play area. Show each play object (slide, see-saw) and explain rules: 'One at a time.' 'Wait for your turn.' Children follow each rule while trying equipment.", materials: "Actual or pretend play area" },
            { name: "Safety Coloring – What Should I Do?", description: "Identify safe actions in school. Distribute the worksheet. Ask students to color only the pictures showing good behavior. Review each image after coloring: 'Is this child shouting?' (Yes) 'Should we do this?' (No)", materials: "Worksheet with images (e.g., shouting vs raising hand, running vs walking)" },
            { name: "Safety Dice Game", description: "Make safety learning fun through random challenges. Each child rolls the dice. Whatever action shows up, they must act it out. Teacher explains the importance of each behavior. Class repeats the rule after every turn.", materials: "A large dice with actions on each side (e.g., Walk quietly, Say sorry, Don't push)" },
            { name: "Spot the Mistake Wall", description: "Train children to identify what is wrong in a school setting. Stick the chart on the wall. Point to each mistake. Ask: 'What's wrong here?' Children take turns answering and suggesting what should happen instead.", materials: "Chart with illustrations showing small mistakes (e.g., throwing paper on floor, not raising hand, standing on bench)" },
            { name: "Classroom Traffic Light Game", description: "Teach control and discipline using color codes. Stick three large paper circles on the wall: red (stop), yellow (slow), green (go). Call out actions like 'Run!' or 'Shout!' If it's safe, children jump in place (green).", materials: "Red, Yellow, Green paper circles" },
            { name: "Raise Hand Song", description: "Encourage polite behavior when needing help. Sing: 'Raise your hand up high, Ask your teacher why. Never shout, never cry, Just raise your hand and try!' Children raise their hand while singing.", materials: "Bluetooth speaker or teacher-led song" },
            { name: "Safe Circle Time Story", description: "Teach a safety rule through storytelling. Read or tell a story about a character who got hurt while running or shouting. Pause and ask children questions: 'What did they do wrong?' 'What should we do instead?'", materials: "Puppet or picture book" },
            { name: "Kind Words Ball Toss", description: "Encourage safe verbal behavior. Sit in a circle. Toss the ball to a child and say a kind word: 'Please.' That child tosses the ball to another saying another word: 'Sorry.' Continue till all children participate.", materials: "Soft ball" },
            { name: "Hallway March", description: "Practice safe walking in school corridors. Line up the children. March slowly while playing a beat or clapping rhythm. Teacher gives instructions: 'Hands to self.' 'No pushing.' 'Eyes forward.'", materials: "Drum sound from Bluetooth speaker or teacher clap" },
            { name: "Safe and Unsafe Booklet", description: "Let children reflect on safety rules visually. Give each child a small booklet of 4 pages. On each page, they draw one rule (e.g., sit on bench, walk in class). Color the pictures. Title: 'My School Safety Book.'", materials: "Folded A4 sheets, crayons, teacher-drawn pictures" },
            { name: "Chair Sitting Practice", description: "Reinforce safe ways to sit. Teacher demonstrates two examples: Sitting with feet down and straight (safe). Leaning and wobbling (unsafe). Ask: 'Which one is correct?' Let children take turns sitting the right way.", materials: "Chairs, class setup" },
            { name: "Magic Safety Words Hat", description: "Encourage using polite phrases. Children take turns picking a word from the hat. Use it in a sentence related to school. Example: 'I say 'Excuse me' when I pass my friend.' Applaud all correct uses.", materials: "Paper hat, word cards ('Please', 'Excuse me', 'Sorry', etc.)" },
            { name: "'Line Up Right' Relay", description: "Teach how to line up safely. Divide children into teams. One by one, they walk calmly and form a straight line. Praise teams that wait, don't push, and follow cues. Clap rhythmically while they move.", materials: "Floor space, cones (optional)" },
            { name: "Follow the Teacher Game", description: "Practice listening and following safety cues. Children form a line behind the teacher. Teacher does safe actions like walking, sitting, tiptoeing. Mix in unsafe actions like running or shouting — children must NOT follow.", materials: "None" },
            { name: "Lunch Safety Check", description: "Teach cleanliness and responsibility during meals. Before lunch, remind children: 'Wash hands.' 'Eat without spilling.' 'Use your napkin.' After lunch, discuss what they remembered. Praise those who followed the rules.", materials: "Lunchboxes, wipes, mat" },
            { name: "Backpack Safety Sort", description: "Prevent carrying unsafe items to school. Show children two boxes: one with safe items (books, crayons) and one with unsafe (fork, matches). Ask: 'Should this go in your school bag?' Sort all items correctly.", materials: "Toy versions of school and non-school items" },
            { name: "Safety Detective Day", description: "Make children identify real safety problems. Pretend some items are out of place. Children walk around as 'detectives' looking for problems. Each time they find one, they say: 'This is unsafe!' Fix it together and clap.", materials: "Classroom props, flashcards with mini hazards (pencils on floor, bags in walkways)" },
            { name: "'My School Rules' Mural", description: "Create a visual group reminder. Let children each contribute a rule using a drawing. Examples: 'Don't push', 'Use kind words', 'Keep hands clean.' Decorate with handprints and stickers. Read the mural aloud daily.", materials: "Large chart, paint or crayons" },
            { name: "My Promise Badge", description: "Personal safety commitment. Each child gets a paper circle as a badge. They draw or write (with help) one safety rule they'll follow. Teacher helps string it into a necklace or clip. Children wear it and say: 'I promise to stay safe!'", materials: "Paper circles, string, markers" }
          ],
          "SAFETY RULES & TRAFFIC SIGNS": [
            { name: "Red Stop – Green Go Walk", description: "Teach traffic light behavior using colored circles. Teacher holds up green – children walk. Yellow – they walk slowly. Red – they freeze. Add music and rhythm to make it playful.", materials: "Red, yellow, green paper circles, Bluetooth speaker" },
            { name: "Make Your Own Traffic Light", description: "Craft-based activity to understand signal lights. Teacher helps students paste colored circles on black paper to make traffic light. Explain each color's meaning as they craft. Children display and talk about their signal.", materials: "A4 paper, red/yellow/green paper, glue" },
            { name: "Traffic Sign Matching Game", description: "Recognize signs by shape and color. Spread out sign flashcards. Call out a rule or meaning. Children pick and match it with the correct board.", materials: "Flashcards of traffic signs, matching picture boards" },
            { name: "Zebra Crossing Walk", description: "Practice crossing at pedestrian lines. Create a zebra crossing on the classroom floor. Children line up and walk across only when teacher shows green. Add toy car props for roleplay.", materials: "White tape or paper stripes" },
            { name: "Road Safety Song", description: "Learn rules through music. Play a traffic safety rhyme. Children clap and act on lyrics (e.g., 'Stop, Look, Go!'). Use hand gestures for each line.", materials: "Bluetooth speaker" },
            { name: "Traffic Sign Flash Freeze", description: "Movement + rule learning. Children move in a circle. Teacher shows a flashcard. Children act: STOP – freeze, Turn – spin, etc.", materials: "Flashcards of STOP, U-Turn, Speed Limit, etc." },
            { name: "Traffic Signs Coloring Sheet", description: "Reinforce visual identification. Children color common signs like Stop, School Zone. Teacher explains meanings as they color.", materials: "Printable traffic sign sheet, crayons" },
            { name: "Toy Car Road Rules Game", description: "Movement on drawn road. Each child drives a toy car. Teacher gives verbal commands: 'Stop!', 'Turn left!', etc. Children follow rules while 'driving'.", materials: "Chart paper road, toy cars, small cones" },
            { name: "'What Should We Do?' Talk Circle", description: "Decision-making and safety awareness. Show a picture (e.g., child running on road). Ask: 'Is this safe?' 'What should we do instead?' Children respond and take turns explaining.", materials: "Story flashcards" },
            { name: "Sign Shape Sort", description: "Match signs by shapes. Children sort traffic signs based on shape. Match circle to speed signs, triangle to warning signs, etc.", materials: "Paper shapes (circle, triangle, rectangle), sign stickers" },
            { name: "Stop & Go Cone Race", description: "Outdoor energy + safety signs. Line up children for a race. Teacher shows red – freeze; green – run. Repeat multiple rounds for fun and memory.", materials: "Cones, red/green paddles" },
            { name: "Lollipop Sign Holder Craft", description: "Craft the stick sign used by traffic guards. Draw 'STOP' on a paper plate. Tape it to a straw or stick. Use it during pretend play to stop 'traffic.'", materials: "Paper plate, stick/straw, red crayon" },
            { name: "Who Breaks the Rule? Puppet Show", description: "Spot unsafe behavior using roleplay. Teacher shows puppet running on road, skipping zebra lines. Ask: 'Is that safe?' Children correct the puppet.", materials: "Puppets or toy figures" },
            { name: "Build a Town Floor Map", description: "Collaborative setup of a safe town. Children draw or paste roads, signs, crossings. Use it to practice movement and correct paths.", materials: "Chart paper, tape, toy vehicles, crayons" },
            { name: "Left or Right Steering Game", description: "Understand left/right traffic movement. Call out: 'Turn left!' or 'Turn right!' Children turn their paper wheels accordingly. Use music to make it exciting.", materials: "Paper plates as steering wheels" },
            { name: "Make a Safety Rules Poster", description: "Visual reinforcement through group artwork. Children draw rules like 'Walk on Footpath' or 'Wear Helmet'. Display poster in class.", materials: "Chart paper, crayons, cutouts" },
            { name: "Balloon Stop-Go Game", description: "Mix movement and instruction. Toss green balloon – children dance or jump. Toss red – children freeze. Reinforce the stop/go association.", materials: "Red and green balloons" },
            { name: "Circle Time – Road Safety Stories", description: "Storytelling about rule-following children. Narrate a story where the child follows traffic rules. Discuss key learning after each story.", materials: "Picture books or short story cards" },
            { name: "Whistle & Walk Game", description: "Practice stopping at the right signal. Blow whistle once – walk. Two whistles – stop. Make it a follow-the-rhythm game.", materials: "Toy whistle" },
            { name: "Draw Your Neighborhood Road", description: "Observe and replicate familiar road elements. Children draw roads near their homes – include traffic lights, people walking, etc. Present and explain their drawings.", materials: "A4 paper, color pencils" },
            { name: "Safety Sign Hat", description: "Wearable sign reminder. Children paste one traffic sign onto a paper strip. Wrap around their head as a crown. Say the rule aloud while wearing it.", materials: "Paper strips, traffic sign cutouts" },
            { name: "Road vs Playground Sorting", description: "Understand where it's safe to play. Show pictures (child playing with ball on road vs park). Sort into 'Safe to play' and 'Not safe' columns.", materials: "Picture cards" },
            { name: "Learn the Horn Rule", description: "Teach noise awareness near schools. Talk about why horns are not used near schools. Children act out 'Quiet zone' behavior.", materials: "Toy horn or whistle" },
            { name: "Design Your Own Sign", description: "Encourage creativity with purpose. Children design a sign for the class (e.g., 'Walk Slowly', 'No Shouting'). Present their sign and explain its use.", materials: "A4 sheet, markers" },
            { name: "Bumper-to-Bumper Toy Car Game", description: "Teach spacing and waiting. Children 'drive' toy cars but stop when they're too close. Practice proper car spacing and turn-taking.", materials: "Toy cars, floor lines" },
            { name: "Flashcard Quiz", description: "Quick memory game. Show one and ask, 'What does this mean?' Children raise hands or give thumbs-up/down.", materials: "Flashcards with common signs" },
            { name: "Sign and Sound Match", description: "Match signs to typical road sounds. Play a sound (horn, engine, crossing bell). Children match it to the correct sign card.", materials: "Flashcards, Bluetooth speaker" },
            { name: "My Safety Promise", description: "Personal responsibility activity. Children draw themselves crossing the road safely. Underneath, teacher writes 'I promise to cross safely.'", materials: "Paper, crayons" },
            { name: "Balloon Signal Craft", description: "Understand signals and shapes. Paste traffic signs onto balloons. Use balloons for action prompts during PE or music time.", materials: "Red/yellow/green balloons, paper cutouts" },
            { name: "Road Safety Day Roleplay", description: "Simulate real-world situations. Assign roles: driver, pedestrian, traffic police. Enact a busy road scenario. Children follow rules and practice interactions.", materials: "Cardboard steering wheels, signs, hats" }
          ],
          "Yoga": [
            { name: "Rainbow Stretch", description: "Children sit cross-legged. Raise both arms and arch them to one side like a rainbow. Hold for 5 seconds, then to the other side. Repeat 3–4 times. Helps with: Flexibility, side balance.", materials: "None" },
            { name: "Butterfly Flap", description: "Sit with feet together, knees bent sideways. Hold feet with hands. Gently flap knees like butterfly wings. Add a butterfly rhyme using the Bluetooth speaker. Helps with: Hip flexibility, calmness.", materials: "Bluetooth speaker" },
            { name: "Mountain Pose", description: "Stand tall, arms by the sides. Take a deep breath and raise arms up. Reach up high like a tall mountain. Hold for a few seconds. Helps with: Posture, grounding.", materials: "None" },
            { name: "Tree Pose", description: "Stand on one foot, place the other foot on the ankle or calf. Bring hands together above the head. Hold balance for a few seconds. Helps with: Focus, body balance.", materials: "None" },
            { name: "Cat-Cow Stretch", description: "Come to hands and knees. Inhale: Lift head and curve back (cow). Exhale: Drop head, round back (cat). Repeat gently with music. Helps with: Spine flexibility, breath control.", materials: "Bluetooth speaker" },
            { name: "Balloon Belly Breathing", description: "Lie on the back. Place a small paper ball or soft toy on the belly. Breathe in to raise it, breathe out to lower it. Helps with: Calmness, deep breathing.", materials: "Small paper ball or soft toy" },
            { name: "Downward Dog Pup", description: "On hands and feet, make an upside-down 'V' shape. Wiggle like a puppy. Hold for 5 seconds. Helps with: Arm and leg strength.", materials: "None" },
            { name: "Flower Pose", description: "Sit with legs lifted, feet touching, arms under knees. Balance gently while holding knees. Pretend to bloom like a flower. Helps with: Core control.", materials: "None" },
            { name: "Snake Slide (Cobra Pose)", description: "Lie on stomach, hands under shoulders. Push up the chest, look up like a snake. Hiss gently. Helps with: Spine strength, chest opening.", materials: "None" },
            { name: "Candle Pose (Half Shoulder Stand)", description: "Lie on back, legs straight up. Place hands under hips. Keep legs vertical like a candle. Helps with: Leg control, blood circulation.", materials: "None" },
            { name: "Rock-a-Baby", description: "Sit and hug knees. Gently rock side to side like a baby. Helps with: Core muscles, calmness.", materials: "None" },
            { name: "Lion Roar Pose", description: "Sit on knees, hands on thighs. Inhale deeply, stick out tongue, roar like a lion. Repeat with fun! Helps with: Expression, vocal strength.", materials: "None" },
            { name: "Happy Baby", description: "Lie on back, hold feet with hands. Pull knees toward armpits. Rock side to side. Helps with: Lower back and hips.", materials: "None" },
            { name: "Windmill Arms", description: "Stand tall. Rotate arms like windmill blades. One arm forward, one backward. Helps with: Shoulder mobility.", materials: "None" },
            { name: "Balloon Blow Breath", description: "Sit cross-legged. Pretend to blow up a big balloon slowly. Make a loud 'pop!' sound. Helps with: Lung capacity, fun breathing.", materials: "None" },
            { name: "Table Pose", description: "On hands and knees, lift belly to make a flat 'table.' Place a small toy on the back to test stability. Helps with: Core stability, posture.", materials: "Small toy" },
            { name: "Peek-a-Boo Child's Pose", description: "Kneel, bend forward, arms stretched out. Head rests on the floor. Quiet time for 10 seconds. Helps with: Relaxation, calmness.", materials: "None" },
            { name: "Sun Salute Stretch", description: "Standing: Raise arms like the sun rising. Say: 'Good morning, sun!' Touch toes, reach again. Helps with: Full-body stretch.", materials: "None" },
            { name: "Giraffe Neck Stretch", description: "Sit or stand. Stretch neck up and look side to side. Pretend to munch on leaves like a giraffe. Helps with: Neck mobility.", materials: "None" },
            { name: "Cloud Floating Relaxation", description: "Lie down quietly with eyes closed. Teacher plays soft music. Children imagine floating on clouds. Helps with: Deep relaxation.", materials: "Bluetooth speaker, soft music" },
            { name: "Elephant Trunk Swing", description: "Stand, bend slightly forward. Join hands in front like trunk. Swing trunk side to side. Helps with: Waist and spine movement.", materials: "None" },
            { name: "Balloon Twist Pose", description: "Sit cross-legged. Place one hand behind, twist gently to the side. Inhale and exhale slowly. Helps with: Spine and digestion.", materials: "None" },
            { name: "Star Pose", description: "Stand with arms and legs stretched wide. Say: 'I am a shining star!' Hold the position while breathing. Helps with: Confidence and balance.", materials: "None" },
            { name: "Straw Breathing", description: "Use a clean straw. Inhale deeply through nose, exhale slowly through the straw. Teacher counts to 3–5 for rhythm. Helps with: Focused breathing.", materials: "Clean straw" },
            { name: "Yoga Freeze Dance", description: "Play calm music (via Bluetooth speaker). Children dance slowly. Pause music – they freeze in any yoga pose. Helps with: Balance, attention, memory.", materials: "Bluetooth speaker, calm music" }
          ]
        }
      }
    ]
  },
  "sr. kg": {
    english: [
      { 
        volume: 1, 
        topics: { 
          "Missing Letters & A–Z Revision": [
            { name: "Button Trail Missing Letters", description: "Draw a winding letter path A to Z on paper, leaving out random letters. Children place buttons where the letters are missing and say the letter aloud as they fill it in.", materials: "Scrap paper, buttons" },
            { name: "Clothespin Letter Line", description: "Hang a string with some letters missing in the A–Z sequence. Children clip the correct missing letter cards in place using clothespins.", materials: "String, clothespins, letter cards" },
            { name: "Clay Alphabet Fill-In", description: "Provide a worksheet with missing letters. Children use clay to shape and press the correct letters into each blank.", materials: "Clay, printed worksheet" },
            { name: "Alphabet Pebble Drop", description: "Label paper cups with partial sequences like 'B _ D.' Kids drop a small ball into the cup after shouting the correct missing letter.", materials: "Cups, plastic balls, marker" },
            { name: "Hand Hop Letters", description: "Chalk-draw letter steps on the ground with some blanks. Children hop from letter to letter, shouting the missing ones at each gap.", materials: "Chalk, floor space" },
            { name: "Spoon Spin Missing Letter", description: "Arrange letter cards in a circle. Children spin a spoon in the center. When it stops, they pick a card and place it in a missing letter sequence on a chart.", materials: "Spoon, letter cards, chart" },
            { name: "Bead String Alphabet Fix", description: "Create an alphabet necklace but leave out a few beads. Children add the missing beads in the right order.", materials: "Thread, alphabet beads or paper cutouts" },
            { name: "Alphabet Flag Match", description: "Give children small flags (some missing a letter). They complete the flags by writing or sticking on the missing letter.", materials: "Scrap paper, straws, markers" },
            { name: "Picture Clue Missing Letters", description: "Show children a picture (e.g., apple) with part of the word missing ('_pple'). They guess and write the missing letter.", materials: "A4 sheet, sketch pens" },
            { name: "Balloon Tap Missing Letter", description: "Stick letter labels on balloons (some missing). Play music. When music stops, children tap a blank balloon and shout the missing letter.", materials: "Balloons, paper letters, Bluetooth speaker" },
            { name: "Alphabet Ladder Jump", description: "Draw a tall ladder with letters, skipping some. Kids jump to each rung and say the missing letter aloud.", materials: "Floor space or chart, chalk or marker" },
            { name: "Paint the Missing Letter", description: "Give children a letter sequence worksheet. They finger-paint only the missing letters.", materials: "Paint, worksheets, brushes" },
            { name: "Missing Letter Sound Hunt", description: "Teacher says a word and asks children to guess the missing alphabet from the sequence.", materials: "Letter cards" },
            { name: "Alphabet Pebble Trail", description: "Children place pebbles or clay balls on a letter trail with missing spots, saying letters aloud as they fill gaps.", materials: "Paper, marker, pebbles or clay" },
            { name: "Match & Stick Missing Letters", description: "Give a worksheet with images and missing-letter words (e.g., _at). Kids match and glue the correct letter in place.", materials: "Worksheet, glue, letter cutouts" },
            { name: "Mystery Bag of Letters", description: "Letter cards go into a small bag. Teacher shows a missing-letter sequence. Kids draw a card and insert it if it fits.", materials: "Letter cards, bag" },
            { name: "Handprint Letter Trail", description: "Painted handprints form a trail with some letters missing. Children walk the trail and fill the blanks.", materials: "Paint, cloth, marker" },
            { name: "Letter Button Match Board", description: "Children place buttons on missing-letter blanks on a large chart.", materials: "Chart paper, buttons" },
            { name: "Twister Alphabet Version", description: "A mat with scattered letters A–Z (some missing). Teacher calls a missing letter; child places hand or foot on the right one.", materials: "Cloth, marker" },
            { name: "Alphabet Puzzle Clay Press", description: "Clay is used to shape missing letters on a puzzle-style worksheet.", materials: "Clay, worksheet" },
            { name: "Alphabet Train Gaps", description: "Draw a train with letter wagons from A to Z, leaving some empty. Children place letter cards to fill the wagons.", materials: "Chart or floor space, letter cards" },
            { name: "Clay Stamping Letters", description: "Children use clay stamps (from bottle caps or buttons) to stamp missing letters onto a sequence worksheet.", materials: "Clay stamps, stamp pad, worksheet" },
            { name: "Step-on-the-Letter Maze", description: "Create a stepping maze with some missing letters. Call out the sequence; children step only on the missing ones.", materials: "Paper plates, marker" },
            { name: "Ice Cream Cone Fill-Up", description: "Make paper cones with missing sequences. Children add the correct paper 'ice cream scoop' letter to complete it.", materials: "Paper cutouts, glue" },
            { name: "Thread-the-Letter Garland", description: "Make a letter garland with some flags missing. Children stop and add missing letters while threading.", materials: "Thread, paper flags, hole punch" },
            { name: "Paint Dab Missing Letters", description: "Children use earbuds dipped in paint to dab only the missing letters on an A–Z worksheet.", materials: "Worksheet, earbuds, paint" },
            { name: "Sound Clue Alphabet Fix", description: "Show an image (e.g., lion) and ask what letter comes before or after in the alphabet.", materials: "Picture cards, letter cards" },
            { name: "Rolling Letter Match", description: "Roll a letter dice. Use that letter to complete a nearby sequence if it's a missing one.", materials: "Dice, letter puzzle sheets" },
            { name: "Newspaper Strip Letters", description: "Make A–Z strips from newspaper and hide letters under flaps. Children use clay or buttons to mark missing ones.", materials: "Newspaper, marker, buttons" },
            { name: "Match the Letter Chain", description: "Give chain cards like '_ B C D _' and loose letter cards. Kids insert correct missing letters.", materials: "Chain cards, letter cards" }
          ],
          "Vowels and Vowel Story Revision": [
            { name: "Vowel Sound Sorting Bowls", description: "Set up 5 bowls labeled A, E, I, O, U. Give children picture cards (apple, egg, ink, etc.). They sort the card into the correct vowel sound bowl.", materials: "Paper picture cards, 5 bowls or cups" },
            { name: "Vowel Story Stick Puppets", description: "Teacher tells a short story like 'Andy the Apple' or 'Eddy the Elephant.' Children hold up the correct puppet whenever they hear the vowel sound.", materials: "Paper sticks, printed vowel puppets" },
            { name: "Fill the Vowel Train", description: "Prepare trains with CVC words like C_T, H_T, D_G. Children use vowel tiles to fill in the missing vowels and make real words.", materials: "Paper trains, vowel letter tiles" },
            { name: "Vowel Catch & Clap", description: "Teacher plays a song or story and pauses at vowel sounds. Children clap or catch a soft ball if they hear a vowel in a word.", materials: "Bluetooth speaker, soft ball" },
            { name: "Clay Vowel Garden", description: "Draw a garden on a sheet and label flowers with vowel letters. Children make clay fruits or bugs whose names begin with that vowel.", materials: "A4 sheet, marker, clay" },
            { name: "Vowel Spin & Say", description: "Spin a wheel with 5 vowels. When it stops, the child says a word starting with that vowel and acts it out.", materials: "Paper spinner, marker" },
            { name: "Vowel Voice Maze", description: "Create a path maze of pictures with mixed vowels (ant, egg, igloo, ox, umbrella). Children follow only the pictures starting with a vowel sound.", materials: "Picture cards, string, chart" },
            { name: "Match the Vowel Hat", description: "Draw 5 hats with vowel letters. Children get picture buttons and 'dress' the right hat with pictures beginning with that vowel sound.", materials: "Paper hats, picture buttons" },
            { name: "Vowel Bowl Toss", description: "Set up 5 labeled containers (A–U). Children toss a soft ball or button into the right bowl after identifying the vowel sound of a word shown.", materials: "5 containers, buttons or soft ball, word/picture cards" },
            { name: "Vowel Song Parade", description: "March with music while singing a vowel chant (A is for apple...). Pause and ask children to freeze and say a word starting with the last vowel heard.", materials: "Bluetooth speaker, open space" },
            { name: "Vowel Umbrella Match", description: "Draw umbrellas labeled with each vowel. Children place raindrop cutouts (with pictures/words) under the matching vowel umbrella.", materials: "Chart/A4 sheet, raindrop cutouts, markers" },
            { name: "Vowel Sound Jump", description: "Place vowel cards (A, E, I, O, U) on the floor. Teacher says a word, and the child jumps on the vowel it starts with or contains.", materials: "Floor space, paper vowel cards" },
            { name: "Vowel Tunnel Walk", description: "Create a tunnel or hallway display with vowel-themed posters and story pictures. Walk through and recall key vowel stories aloud.", materials: "Chart paper, story visuals" },
            { name: "Vowel Picture Bag", description: "Fill a bag with objects or picture cards. Children pull one out, say its name, and identify the vowel sound.", materials: "Small bag, picture/object cards" },
            { name: "Clay Vowel Pots", description: "Make 5 flower pots labeled A–U. Children shape clay flowers and place them in the correct vowel pot based on the word spoken.", materials: "Paper pots, clay, marker" },
            { name: "Story Vowel Freeze", description: "Teacher narrates a vowel-based story. Every time a vowel is said, children freeze and echo the sound.", materials: "Bluetooth speaker or teacher voice, story" },
            { name: "Match the Vowel Pet", description: "Draw five pets with vowel names (e.g., ant, elephant, iguana). Children 'feed' each pet using food cards labeled with vowel sounds.", materials: "Picture cards, small bowls, pet drawings" },
            { name: "Paint the Vowel Tree", description: "Draw a tree with empty circles on it. Say words aloud; children paint the correct vowel leaf onto the tree for that word.", materials: "A4 sheet, paint, earbuds or brush" },
            { name: "Button Vowel Slide", description: "Make a track labeled with CVC words missing the vowel. Children slide buttons along the track and drop the correct vowel into place.", materials: "Chart with tracks, buttons, vowel letter labels" },
            { name: "Vowel Balloon Squeeze", description: "Blow up 5 balloons, each labeled with a vowel. Say a word. Kids gently squeeze or tap the balloon with the correct vowel sound.", materials: "Balloons, marker" }
          ],
          "TWO-LETTER WORDS": [
            { name: "Word Pebble Toss", description: "Children toss pebbles with two-letter words written on them into matching vowel-labeled baskets. This builds word-vowel recognition and motor coordination.", materials: "Pebbles, baskets labeled with vowels (a, e, i, o, u), marker" },
            { name: "Clay Word Forming", description: "The teacher says a two-letter word aloud (like 'it'). Children use clay to shape and form each letter of the word.", materials: "Clay" },
            { name: "Button Word Train", description: "Draw a long train with empty boxes. Children form two-letter words by placing lettered buttons (e.g., 'i' + 't') inside the train boxes.", materials: "Paper, colored buttons with alphabet letters" },
            { name: "Spoon Sound Match", description: "Place word halves in paper bowls (like 'i', 'o'). Children pick a spoon labeled with the second letter and match it with a bowl to complete a word.", materials: "Spoons, bowls, paper slips with letters" },
            { name: "Word Rainbow Trace", description: "Children trace brightly colored rainbow patterns that spell out simple two-letter words in correct letter order.", materials: "A4 sheet with rainbow arcs, crayons" },
            { name: "Picture-to-Word Match", description: "Match simple picture cards with corresponding two-letter words (e.g., a picture of 'sun' with the word 'us', a 'light' with 'on').", materials: "Picture flashcards, word flashcards" },
            { name: "Shout-the-Word Circle", description: "Children pass a ball in a circle while music plays. When it stops, the child holding the ball shouts any two-letter word they remember.", materials: "Bluetooth speaker, soft ball" },
            { name: "Word-on-Back Game", description: "The teacher or a classmate writes a two-letter word using their finger on another child's back. The child guesses and says it aloud.", materials: "None" },
            { name: "Word Tap Tower", description: "Children stack paper boxes or blocks to form two-letter words (one letter per block), then tap the tower and read each word aloud.", materials: "Paper blocks or boxes with letters" },
            { name: "Letter Pair Jump", description: "Place letter cards on the floor. The teacher calls a word like 'am' and the child jumps on the two correct letters in order.", materials: "Alphabet cards, open space" },
            { name: "Matching Cloth Line", description: "Hang one part of a two-letter word (like 'o', 'a') on a string. Children use clothespins to clip the second part to make a full word.", materials: "String, clothespins, paper letter cards" },
            { name: "Word Stamping Fun", description: "Children use alphabet stamps to complete two-letter words missing a letter. Great for sound identification and letter recall.", materials: "Letter stamps, ink pads, printed word worksheets" },
            { name: "Dot & Read Game", description: "Children use earbuds or dot markers dipped in paint to dot each two-letter word and say them aloud while marking.", materials: "A4 word sheet, earbuds or dot markers, paint" },
            { name: "Word Hide & Find", description: "The teacher hides word cards around the classroom. Children search, find, and read each two-letter word aloud.", materials: "Word cards, tape (optional)" },
            { name: "Spin & Say", description: "Create a spinner with different two-letter words. Children take turns spinning and saying the word where it stops.", materials: "Paper spinner, pointer or pencil" },
            { name: "Clay Cup Pairs", description: "Label clay cups with first letters (e.g., 'a', 'i'). Kids drop paper buttons with second letters inside to complete words.", materials: "Clay cups, small paper buttons with letters" },
            { name: "Egg Tray Words", description: "Place letters inside egg tray slots. Children pair letters by placing a second letter next to the first to form simple words.", materials: "Egg tray, letter slips or stickers" },
            { name: "Word Path Maze", description: "Create a winding path filled with two-letter words. Children walk on it, stopping to read each word aloud.", materials: "Chart paper or masking tape on floor, markers" },
            { name: "Paint-a-Word Leaf", description: "Leaf-shaped cutouts each contain one letter. Children use paint to match and complete two-letter words.", materials: "Paper leaves, paint, brushes" },
            { name: "Word Dance Freeze", description: "Children dance while music plays. When it stops, they freeze and say a two-letter word out loud.", materials: "Bluetooth speaker" },
            { name: "Pocket Word Pull", description: "Create wall pockets labeled with one letter (like 'i', 'a'). Kids pull out slips with second letters to complete words.", materials: "Paper pockets, letter slips" },
            { name: "Word Flag Parade", description: "Each child holds a paper flag with a two-letter word. They march in a circle and say their word as they pass the teacher.", materials: "Paper flags with words, sticks or straws" },
            { name: "Water Brush Word Writing", description: "Children dip a brush in water and write two-letter words on the ground or a board. Then, say the word aloud.", materials: "Brush, water, flat surface" },
            { name: "Word Cup Drop", description: "Drop buttons with letters into paper cups labeled with a matching letter to form a word. Say the word after each drop.", materials: "Paper cups, buttons with letters" },
            { name: "Story Chain Words", description: "The teacher tells a fun mini story filled with two-letter words. Children raise their hands and repeat each word when they hear one.", materials: "None or printed short story with highlighted two-letter words" }
          ],
          "Three-Letter Words (CVC Words)": [
            { name: "Clay Word Moulding", description: "Teacher says a simple word like 'map.' Children shape each letter using clay and read the full word.", materials: "Clay" },
            { name: "Word Ladder Climb", description: "Draw a ladder with one letter per step (e.g., C → A → T). Children walk up the steps while sounding out the word.", materials: "Chalk or chart paper, marker" },
            { name: "Button Sound Match", description: "Give buttons labeled with letters. Kids match 3 correct letters to build a word like 'sun'.", materials: "Buttons with letters" },
            { name: "Tap-the-Word Path", description: "Create a walking path with three-letter words. Kids walk and tap each word while reading it aloud.", materials: "Chart paper or floor tape, marker" },
            { name: "Picture & Word Puzzle", description: "Cut simple pictures in half. Children match picture halves to the correct CVC word.", materials: "Picture cards, word cards" },
            { name: "Chalk Sound Slide", description: "Children write three-letter words on the floor using chalk and slide their fingers below each letter as they say the sounds.", materials: "Chalk" },
            { name: "Bottle Cap Word Maker", description: "Write letters on bottle caps. Children select 3 to form a word and say it aloud.", materials: "Bottle caps, marker" },
            { name: "Spin & Make Word", description: "Use a paper spinner with beginning, middle, and end letters. Spin and blend to form real or silly words.", materials: "Paper spinner, pointer" },
            { name: "Balloon Pop Reading", description: "Insert paper strips with three-letter words into balloons. Pop, read, and shout the word!", materials: "Balloons, small paper slips" },
            { name: "Word Hopscotch", description: "Draw hopscotch boxes with three-letter words inside. Kids hop and say each word they land on.", materials: "Chalk (outdoor) or tape and paper (indoor)" },
            { name: "Paint the Word Leaf", description: "Give leaf cutouts. Kids paint letters on them to form three-letter words and then read them aloud.", materials: "Leaf cutouts, paint, brush" },
            { name: "Pebble Word Forming", description: "Kids use pebbles labeled with letters to create simple words and sound them out.", materials: "Pebbles, marker" },
            { name: "Word Train with Buttons", description: "Draw a train on paper. Kids place buttons with letters in the train compartments to form CVC words.", materials: "Paper, buttons with letters" },
            { name: "Paper Strip Puzzles", description: "Cut paper into 3-part puzzles (C-V-C). Kids arrange pieces in order to form correct words.", materials: "Paper strips with letters, scissors" },
            { name: "Stick-and-Read Game", description: "Children combine three ice-cream sticks with one letter each to make and read a word.", materials: "Ice-cream sticks, marker" },
            { name: "Circle the Word", description: "Provide a worksheet with several three-letter words. Teacher says a word. Kids find and circle it.", materials: "A4 sheet, crayon or marker" },
            { name: "Clap-the-Word", description: "Say a word like 'cat.' Kids clap once for each sound (c-a-t). Then repeat the word together.", materials: "None" },
            { name: "Word Flag Parade", description: "Give each child a paper flag with a three-letter word. They walk in a parade and read it aloud.", materials: "Paper flags, straws or sticks" },
            { name: "Matching Cloth Line", description: "Hang words on a string. Children match image cards with the correct word using clothespins.", materials: "String, picture cards, word cards, clothespins" },
            { name: "Magic Water Writing", description: "Let kids dip brushes in water and write three-letter words on the floor or wall, then read them aloud.", materials: "Paintbrushes, water, flat surface" },
            { name: "Dot Marker Words", description: "Provide CVC word sheets. Kids use earbuds or dot markers to trace and read each word.", materials: "Word sheet, earbuds or dot markers, paint" },
            { name: "Word Pass Ball", description: "Sit in a circle. Pass a ball while saying a CVC word on each pass. Stop the game and ask last child to read one word.", materials: "Ball" },
            { name: "Sound Jump", description: "Place letters on floor. Teacher says a word like 'pig'. Child jumps on 'p', 'i', 'g'.", materials: "Letter cards" },
            { name: "Word Cup Drop", description: "Drop lettered paper slips into paper cups to complete words. Read word aloud before dropping.", materials: "Paper cups, paper letters" },
            { name: "Story Word Hunt", description: "Read a story full of CVC words. Kids clap or raise their hand each time they hear one.", materials: "Short story (printed or oral)" },
            { name: "Word Puzzle Match", description: "Cut up CVC word cards into three parts (C-V-C). Mix and let kids match them to form real words.", materials: "Word cards, scissors" },
            { name: "Box-and-Read", description: "Create paper boxes labeled with letters. Kids place them in order (C-V-C) and read the word aloud.", materials: "Paper boxes, letter slips" },
            { name: "Clothespin Spelling", description: "Clip lettered clothespins to a string to form three-letter words.", materials: "Clothespins, string, paper letters" },
            { name: "Word Trace & Color", description: "Provide worksheets with CVC words. Kids trace and color each word with crayons.", materials: "Worksheets, crayons" },
            { name: "Say-and-Stick", description: "Teacher says a CVC word. Kids find correct letter stickers and stick them on paper in correct order.", materials: "Letter stickers, paper" }
          ]
        } 
      },
      { 
        volume: 2, 
        topics: { 
          "Phonics Revision Activities (Beginning, Middle & Ending Sounds)": [
            { name: "Button Sound Sorting", description: "Lay out mats labeled with beginning sounds like /b/, /m/, /t/. Children sort colored buttons onto each mat by listening to the first sound of spoken words.", materials: "Buttons, sound mats" },
            { name: "Mystery Middle Sound Box", description: "Teacher says CVC words aloud (e.g., 'c-a-t'), and children guess the middle vowel sound. Use visual cues if needed.", materials: "Picture cards, sound cards" },
            { name: "Clap the Sound Out", description: "Say simple CVC words and have children clap once for each sound they hear. For example, 'm-a-t' = 3 claps.", materials: "No materials" },
            { name: "Clay Word Builder", description: "Children build 3-letter words using clay (e.g., 'pig'). Focus on identifying the middle vowel sound while forming the word.", materials: "Clay" },
            { name: "Spoon & Sound Match", description: "Stick letter sounds on spoons. Place picture cards on a table. Children pick a spoon and match it to a picture that starts or ends with that sound.", materials: "Spoons, picture cards" },
            { name: "Sound Hop Game", description: "Create floor mats with letters. Call out a word, and kids hop to the correct beginning, middle, or ending sound mat.", materials: "Floor mats or cards" },
            { name: "I Spy Sounds", description: "Play 'I Spy' by saying, 'I spy something that begins with /s/.' Children find an object in the room that starts with that sound.", materials: "Classroom items" },
            { name: "Bead the Sound", description: "Children string 3 beads for each sound in a given word (e.g., 'b-a-g'). Use different colors for beginning, middle, and end.", materials: "Beads, string" },
            { name: "Draw the Missing Sound", description: "Provide picture-word cards with one sound missing. Children fill in the correct beginning, middle, or ending letter.", materials: "Worksheets, crayons" },
            { name: "Ending Sound Toss", description: "Children sit in a circle. Toss a ball to a child, say a word, and they must say the ending sound.", materials: "Soft ball" },
            { name: "What's in the Middle?", description: "Show cards with blanks (e.g., 's_ _ k'). Children guess the missing vowel and say the full word.", materials: "Sound cards" },
            { name: "Sound Path Maze", description: "Provide a simple maze where children trace a path by following the correct beginning or ending sound of pictured objects.", materials: "Maze worksheet" },
            { name: "Sound-Picture Dominoes", description: "Use domino-style cards with a picture on one side and a sound on the other. Children match picture to its sound.", materials: "Domino cards" },
            { name: "Story Sound Hunt", description: "Read a short story. Whenever kids hear a target sound (e.g., /a/ or /t/), they raise their hand or jump.", materials: "Story text" },
            { name: "Roll & Build Word", description: "Roll a dice labeled with beginning sounds. Kids must build a word using that sound and say it aloud.", materials: "Dice, letter cards" },
            { name: "Color the Correct Sound", description: "Provide worksheets with multiple letters per word. Children color the correct beginning, middle, or ending letter.", materials: "Worksheet, crayons" },
            { name: "Button Blending Line", description: "Children place one button for each sound they hear in a CVC word, then blend the word aloud by touching each button.", materials: "Buttons, blending mat" },
            { name: "Circle the Ending", description: "Two pictures are shown next to a word. One matches the ending sound. Children circle the correct one.", materials: "Picture worksheet" },
            { name: "Clay Sound Smash", description: "Place small clay balls on the table. Teacher says 3 words. If a child hears a target sound (e.g., /p/), they smash one clay ball.", materials: "Clay" },
            { name: "Picture Peg Match", description: "Hang string across the class. Attach sound cards to pegs. Children clip the correct picture card under each sound.", materials: "String, pegs, cards" },
            { name: "Say It – Stretch It – Snap It", description: "Say the word slowly, stretch out each sound with hand motions, and 'snap' fingers on the middle vowel sound.", materials: "No materials" },
            { name: "Which Sound is Wrong?", description: "Show three pictures; one begins (or ends) with a different sound. Children identify the odd one out.", materials: "Picture cards" },
            { name: "Clay Sound Family Trays", description: "Provide children with trays labeled with vowel sounds. They make clay word families like -at, -et, -in, and sort them.", materials: "Clay, trays or paper" },
            { name: "Sound Spoon Relay", description: "Children run to pick a spoon with a sound on it, then match it to a picture on the board with the same sound.", materials: "Spoons, pictures" },
            { name: "Ear Drawing Game", description: "Teacher says a sound. Children draw a picture that begins or ends with that sound (e.g., draw sun for /s/).", materials: "Paper, crayons" },
            { name: "Sound Circle Time", description: "Sit in a circle. Pass an object around (e.g., a ball). Each child says a word that shares the starting sound with the object.", materials: "Ball or object" },
            { name: "Phonics Fishing", description: "Create a DIY fishing game. Children 'fish' for a sound and name a word that starts or ends with it.", materials: "Paper fish, magnet stick" },
            { name: "Sound Song Dance", description: "Play songs that emphasize sounds (e.g., 'A says /æ/'). Children act out each letter as it plays.", materials: "Bluetooth speaker" },
            { name: "Match the Clay Word Ending", description: "Make word endings like -at or -op with clay. Kids add beginning sounds using flashcards to form real words.", materials: "Clay, letter cards" },
            { name: "Word Family Sorting Bags", description: "Have bags labeled -at, -et, -in, etc. Children place picture cards in the right bag based on ending sound.", materials: "Paper bags, picture cards" }
          ],
          "This / That / These / Those": [
            { name: "Point & Say Walk", description: "Children walk around the classroom. When they see an object close by (e.g., on a table), they say 'This is a __.' For something far across the room, they say 'That is a __.' Repeat with new objects.", materials: "No materials" },
            { name: "Near & Far Tray Sort", description: "Place two trays – one near the children, one at a distance. Give them a few objects (e.g., spoon, button). They sort objects into trays and say: 'This is a spoon' for near ones and 'That is a button' for far ones.", materials: "Trays, small objects" },
            { name: "Button Basket Talk", description: "Put a handful of buttons in a nearby basket and another far away. Children say 'These are buttons' (near) and 'Those are buttons' (far), understanding plural and position.", materials: "Buttons, baskets" },
            { name: "Puppet Show Fun", description: "Hold one puppet close and another far. Children use sentences like 'This puppet is funny' or 'That puppet is far.' Helps understand position with visuals.", materials: "Hand puppets" },
            { name: "Match the Picture Phrase", description: "Provide cards with pictures (e.g., an apple, some marbles) and phrase cards: 'This is an…', 'Those are…', etc. Kids match correct phrases with images.", materials: "Picture and phrase cards" },
            { name: "Pick and Place Race", description: "Children pick objects and place them near or far from themselves. Then, one by one, they describe them aloud using 'this/that/these/those.'", materials: "Spoons, balls, other objects" },
            { name: "Hand Puppet Drama", description: "Using just their hands, children point to a close item and say 'This is…' or to a far one and say 'That is…'. Then switch roles with a partner.", materials: "No materials" },
            { name: "Flashcard Sorting Wall", description: "Label four areas of a wall with 'This / That / These / Those.' Give children flashcards of objects to place under the correct heading based on number and distance.", materials: "Chart paper, flashcards" },
            { name: "Spoon Toss Talk", description: "Toss a spoon lightly near or far. The catcher says 'This is a spoon' or 'That is a spoon' depending on where it lands.", materials: "Spoon" },
            { name: "String Distance Game", description: "Place a long string on the floor. Items inside the circle made by the string = 'this/these.' Outside = 'that/those.' Children place and say the sentence.", materials: "String, small items" },
            { name: "Object Circle Time", description: "Place one item near and another far from the circle. Each child gets a turn to describe them using 'this/that' or 'these/those.'", materials: "Classroom objects" },
            { name: "'Look Over There!' Game", description: "Teacher points to far objects dramatically and says, 'That is a…' Children copy and point far. Then reverse with 'This is a…' for near items.", materials: "No materials" },
            { name: "Clay Model Talk", description: "Children make clay items like fruits or animals, place them close or far on the table, then describe them using the correct demonstrative word.", materials: "Clay" },
            { name: "Ball and Basket Game", description: "Put 2 balls near (say 'These are balls') and 2 far away (say 'Those are balls'). Children take turns placing and describing.", materials: "Balls, baskets" },
            { name: "'Who Has This?' Game", description: "One child holds an item. Others ask, 'Who has this?' or 'Who has that?' depending on where the object is placed. Builds sentence formation.", materials: "Items like spoon, pen" },
            { name: "This–That Hat Game", description: "Make two paper hats labeled 'This' and 'That.' The child wearing 'This' describes nearby items, and the 'That' hat child describes far ones.", materials: "Paper hats" },
            { name: "Partner Speak Task", description: "In pairs, one child places an object. The other must say 'This is a ___' or 'Those are ___,' depending on position and number.", materials: "Objects like crayons, buttons" },
            { name: "Object Story Time", description: "Teacher uses real classroom objects and tells a mini-story, e.g., 'This is my pen. That is your toy near the door…' Children listen and repeat.", materials: "Real items" },
            { name: "Match Me Mats", description: "Four mats labeled 'This / That / These / Those.' Kids are given objects or images to place on the correct mat and speak the matching sentence.", materials: "Mats, cutouts or pictures" },
            { name: "Beads and Threads", description: "Children thread beads close to them and say 'These are beads.' Then place other beads far and say 'Those are beads.'", materials: "Thread, beads" },
            { name: "'This or That' Chair Game", description: "Keep two chairs labeled 'This' and 'That.' Say a sentence. Child moves to the correct chair. Repeat with 'These' and 'Those.'", materials: "Chairs, labels" },
            { name: "A4 Sheet Fold Card", description: "Fold an A4 sheet into four parts. In each section, draw one item near (this), one far (that), two near (these), and two far (those). Child describes each.", materials: "A4 sheet, crayons" },
            { name: "Clay Stamp Distance", description: "Stamp or mold clay shapes. Put one close, say 'This is a shape.' Put two far, say 'Those are shapes.' Repeat with different items.", materials: "Clay, stamps" },
            { name: "Button Tray Naming", description: "One button placed near = 'This is a button.' Two buttons placed far = 'Those are buttons.' Change positions and repeat.", materials: "Tray, buttons" },
            { name: "Spoons & Talk Show", description: "Arrange spoons: 1 close ('This is a spoon'), 1 far ('That is a spoon'), 2 close ('These are spoons'), 2 far ('Those are spoons'). Children come up and host a 'talk show.'", materials: "Spoons" },
            { name: "Tracing and Writing", description: "Provide worksheets with the words 'this / that / these / those' to trace. Then draw objects next to each word.", materials: "Worksheets, pencils, crayons" },
            { name: "Jump on the Word Mat", description: "Place four mats on the floor, each labeled 'this / that / these / those.' Teacher calls out a sentence; child jumps on the matching mat.", materials: "Mats or paper labels" },
            { name: "Song: This and That", description: "Play or sing a rhyme like: 'This is near, that is far, these are close, those are stars…' Children point as they sing.", materials: "Bluetooth speaker" },
            { name: "These–Those Toss", description: "Toss two toys near = 'These are toys.' Toss two toys far = 'Those are toys.' Repeat with new objects.", materials: "Toys, balls" },
            { name: "Show Me the Word", description: "Teacher says a sentence like '_____ is a flower.' Children hold up the correct word card: 'this,' 'that,' etc.", materials: "Flashcards with the four words" }
          ],
          "Rhyming Words": [
            { name: "Rhyme Time Clap", description: "Teacher says two words aloud. If they rhyme (e.g., 'hat–cat'), children clap. If not (e.g., 'hat–dog'), they stay silent. Builds auditory rhyme recognition.", materials: "No materials" },
            { name: "Rhyming Basket Match", description: "Children pull two picture/object cards from a basket. If they rhyme (e.g., 'pen–hen'), they keep them as a pair. If not, return and try again.", materials: "Basket, rhyming picture/object cards" },
            { name: "Rhyming Train", description: "Children add new rhyming words to a paper train (e.g., cat–bat–rat–mat). Each coach has one rhyming word, encouraging word family building.", materials: "Train cutouts, markers" },
            { name: "Rhyming Song Time", description: "Teacher plays rhyming songs like Down by the Bay or Rhyming Dust Bunnies. Pause after each rhyming phrase so children can predict the rhyme.", materials: "Bluetooth speaker" },
            { name: "Rhyming Word Jump", description: "Spread picture cards on the floor. Say a word (e.g., 'log'). Children jump to the picture that rhymes (e.g., 'frog'). Repeat with new words.", materials: "Floor-safe picture cards" },
            { name: "Rhyming Ball Toss", description: "Toss a soft ball to a child and say a word (e.g., 'pan'). The child must respond with a rhyming word (e.g., 'fan') before tossing the ball back.", materials: "Soft ball" },
            { name: "Picture Rhyme Puzzle", description: "Provide cards that form puzzle pairs of rhyming words (e.g., moon–spoon, bug–mug). Kids match and complete puzzles.", materials: "Rhyming picture puzzle cards" },
            { name: "Rhyming Wall Chart", description: "Create a chart with columns for common word families (e.g., -at, -og, -in). Children paste or draw rhyming pictures under the correct column.", materials: "Chart paper, rhyming cards" },
            { name: "Sock Puppet Rhymes", description: "Use two sock puppets. One says a word (e.g., 'bed'), and the other says a rhyme (e.g., 'red'). Children join in or perform the same with a partner.", materials: "Sock puppets" },
            { name: "Rhyming Dominoes", description: "Make domino cards with rhyming picture pairs. Children match the ends of dominoes based on rhymes.", materials: "Domino-style rhyming cards" },
            { name: "Clay Rhyme Makers", description: "Call out a word like 'sun.' Children mold something with clay that rhymes with it (e.g., 'bun,' 'fun'). Encourages creative expression.", materials: "Clay" },
            { name: "Spoon Rhyme Match", description: "Write rhyming words on plastic spoons (e.g., 'top–mop,' 'pen–hen'). Mix them up. Kids find and match rhyming spoon pairs.", materials: "Spoons, stickers" },
            { name: "Button Rhyme Sort", description: "Stick rhyming words or pictures onto buttons. Children sort them into rhyme groups (e.g., all -at words together).", materials: "Buttons, word/picture stickers" },
            { name: "Rhyming Bingo", description: "Each child gets a bingo sheet with rhyming words. Teacher calls out a word (e.g., 'jug') and children cover 'mug' if it appears.", materials: "Bingo sheets, buttons" },
            { name: "Rhyme & Color", description: "Worksheets show 3–4 pictures. Kids color only the ones that rhyme with a given word (e.g., color only those that rhyme with 'bed').", materials: "Worksheet, crayons" },
            { name: "Rhyming Puppet Show", description: "Children use puppets to create mini-rhyming dialogues: Puppet 1 says 'frog,' Puppet 2 replies 'log.' Builds vocabulary and creativity.", materials: "Puppets" },
            { name: "Rhyme Bag Surprise", description: "Teacher pulls a toy or object from a bag and says its name. Children take turns saying a rhyming word for it.", materials: "Cloth bag, small classroom objects" },
            { name: "Match Me Mats", description: "Mats are labeled by rhyme family (e.g., -an, -ig, -et). Children match word or picture cards onto the correct mat.", materials: "Mats, picture/word cards" },
            { name: "Rhyming Relay Race", description: "In teams, kids run one at a time to find a card that rhymes with the one at their station and return. Encourages movement and fast thinking.", materials: "Picture cards" },
            { name: "Rhyme and Freeze", description: "Play music. When it stops, teacher says a word (e.g., 'fox'). Children freeze and shout a rhyming word ('box!').", materials: "Bluetooth speaker" },
            { name: "Word Family Spinner", description: "Make a paper spinner with rhyme families. Spin to land on -at, -in, etc. Child says 2–3 rhyming words (e.g., 'cat, bat, sat').", materials: "Paper spinner" },
            { name: "Rhyming Craft Garland", description: "Children make a paper chain by linking strips with rhyming word pictures (e.g., dog–frog–log). Display as classroom garland.", materials: "Paper strips, glue" },
            { name: "Make a Rhyme Book", description: "Children create their own mini book with 3–4 rhyme families. Draw or paste pictures and write matching words.", materials: "A4 sheets, crayons" },
            { name: "Sound and Rhyme Walk", description: "During a walk around class or corridor, teacher points to items (e.g., wall). Children say a rhyme ('ball!').", materials: "No materials" },
            { name: "Sticky Word Wall", description: "Provide sticky notes with pictures or words. Children stick them under the correct rhyme family on a display chart.", materials: "Sticky notes, wall chart" },
            { name: "Rhyming Dice Roll", description: "Create a dice with rhyming pictures. Child rolls and says a matching rhyming word.", materials: "DIY picture dice" },
            { name: "My Rhyme Crown", description: "Children decorate a paper crown with 3–4 pictures that rhyme (e.g., 'bug, jug, rug'). Wear and say them aloud.", materials: "Crown cutouts, stickers" },
            { name: "Match the Sound String", description: "Use thread or string to hang rhyming word pairs in a line. Children walk along and read each pair aloud.", materials: "Thread, paper cards" },
            { name: "Rhyming Word Hunt", description: "Hide rhyming picture cards around the room. Children hunt and match them to create rhyming pairs.", materials: "Rhyming cards" },
            { name: "Rhyme Bubble Pop", description: "Teacher says a word (e.g., 'can'). Kids 'pop' an imaginary bubble each time they say a rhyming word (e.g., 'fan,' 'man,' 'pan'). Great as a quick revision game!", materials: "No materials" }
          ],
          "Animal Homes": [
            { name: "Clay Home Making", description: "Children use clay to make simple animal homes like nests, burrows, and kennels.", materials: "Clay" },
            { name: "Match the Home", description: "Picture cards of animals and their homes are matched (e.g., dog–kennel, bird–nest).", materials: "Picture cards" },
            { name: "Animal Home Puzzle", description: "Cut pictures in two: animal + home. Children match the halves correctly.", materials: "Puzzle cards" },
            { name: "Spoon Puppets Talk", description: "Make animal puppets on spoons. Kids use them to say where each lives.", materials: "Spoons, paper, glue" },
            { name: "Clay & Button Scene", description: "Make a clay scene of a forest. Use buttons and other materials to show animals and their homes.", materials: "Clay, buttons, paper" },
            { name: "Sorting Game", description: "Sort pictures: land homes (kennel, burrow), water homes (pond, sea), and tree homes (nest, hive).", materials: "Chart, pictures" },
            { name: "Where Do I Live? Chant", description: "Teacher chants 'Where do I live?' Children respond in chorus: 'A dog lives in a kennel!'", materials: "No materials" },
            { name: "Animal Home Collage", description: "Children make a collage of animals and their homes using old newspapers and scrap paper.", materials: "Newspaper, glue" },
            { name: "Thread Web for Spider", description: "Make spider webs using thread on paper and draw a spider in its home.", materials: "Thread, paper" },
            { name: "Home Drawing Day", description: "Each child draws an animal and its home and talks about it.", materials: "Paper, crayons" },
            { name: "Stick the Animal In", description: "Draw homes like caves, nests. Children paste or place animals in the correct one.", materials: "Worksheets or A4 sheets" },
            { name: "Guess the Home", description: "Teacher describes the home: 'I am warm and round, made of twigs.' Kids guess: 'A nest!'", materials: "No materials" },
            { name: "Build a Nest Activity", description: "Use dry grass, paper bits, and thread to make a nest model.", materials: "Paper bits, thread" },
            { name: "Hide & Seek Game", description: "Animal toys or pictures are hidden inside matching home cutouts. Children search and match.", materials: "Cutouts, toys" },
            { name: "Button House Game", description: "Draw simple houses on paper. Children place the right buttons to represent animals inside.", materials: "Paper, buttons" },
            { name: "Matching Line Activity", description: "Worksheet where kids draw lines between animal and home (e.g., ant–anthill).", materials: "Worksheet" },
            { name: "Fabric Cave Craft", description: "Use cloth pieces to make simple cave homes for animals like bears or lions.", materials: "Scrap cloth" },
            { name: "Stick Home on Chart", description: "Group activity where kids stick animal home cutouts onto a large jungle chart.", materials: "Chart, cutouts" },
            { name: "Animal Home Song", description: "Simple song: 'A dog lives in a kennel, a bird lives in a nest…'", materials: "Bluetooth speaker" },
            { name: "Home Charades", description: "Children act as animals going to their homes; classmates guess.", materials: "No materials" },
            { name: "Paint the Burrow", description: "Finger paint a tunnel or burrow for rabbits, ants, or foxes.", materials: "Paints, paper" },
            { name: "Twigs & Clay Nest", description: "Build a bird nest using real twigs and clay balls to act as eggs.", materials: "Twigs, clay" },
            { name: "Story Time: Lost Animal", description: "Read or tell a story about an animal finding its home. Discuss at end.", materials: "No materials" },
            { name: "Big & Small Homes", description: "Show homes of big vs. small animals. Children group them accordingly.", materials: "Picture cards" },
            { name: "Home Walk Talk", description: "Show animal homes via classroom visuals and ask children to describe them aloud.", materials: "Visual aids" }
          ]
        } 
      },
      { 
        volume: 3, 
        topics: { 
          "Opposites": [
            { name: "Opposite Song Dance", description: "Play an opposites song through a Bluetooth speaker. Children perform opposite actions like sit/stand, up/down. Reinforces auditory learning and physical engagement.", materials: "Bluetooth speaker" },
            { name: "Flip Card Opposites", description: "Children flip one card with a word or image and say the opposite. They can play in pairs to encourage peer interaction.", materials: "Word/image flashcards" },
            { name: "Opposite Ball Toss", description: "A teacher says a word while tossing a ball to a student. The student catches it and says the opposite.", materials: "Soft plastic ball" },
            { name: "Opposite Circle Time", description: "During circle time, the teacher says a word and children take turns giving the opposite word.", materials: "None" },
            { name: "Sorting Trays", description: "Students sort items into two trays labeled with opposite categories like big/small or hard/soft.", materials: "Trays, assorted small objects" },
            { name: "Opposite Walk", description: "Teacher gives movement cues like 'walk fast' or 'walk slow' and children follow. Great for kinesthetic learners.", materials: "Open classroom space" },
            { name: "Draw the Opposite", description: "Teacher says a word (e.g., happy), and students draw its opposite (e.g., sad). Builds comprehension through art.", materials: "Paper, crayons" },
            { name: "Opposite Pairs Hunt", description: "Opposite word pairs are hidden around the room. Students find and match them.", materials: "Opposite word cards" },
            { name: "Yarn Matching Line", description: "Use string on a wall or board where kids clip matching opposites with clothespins.", materials: "String, clothespins, opposite cards" },
            { name: "Act Out the Opposite", description: "Teacher says a word like 'sleep,' and children act out its opposite ('wake up').", materials: "None" },
            { name: "Opposite Story Time", description: "Read a story with many opposites, pausing to ask students for the opposite word.", materials: "Storybook with opposites" },
            { name: "Clay Opposites", description: "Children use clay to mold shapes representing opposites (e.g., tall/short towers).", materials: "Clay" },
            { name: "Opposite Puzzle Assembly", description: "Use paper puzzles with pictures or words. Children connect opposites together.", materials: "Handmade paper puzzle sets" },
            { name: "Clap for the Opposite", description: "Teacher says a word. If students know the opposite, they clap and say it.", materials: "None" },
            { name: "Matching Opposites on Cloth", description: "Draw opposite images on cloth patches. Kids match them by tying the patches with string.", materials: "Cloth scraps, thread" },
            { name: "Button Sorting Opposites", description: "Sort buttons by opposite attributes like big/small, smooth/rough.", materials: "Assorted buttons" },
            { name: "Newspaper Opposites Collage", description: "Children cut or tear images from newspapers to represent opposite words and paste them on opposite sides of a chart.", materials: "Newspaper, glue, chart paper" },
            { name: "Spoon Toss for Opposites", description: "Call out a word while tossing a spoon gently to a child who must say the opposite.", materials: "Plastic spoon" },
            { name: "Emotion Opposites Game", description: "Show a happy face and ask for the opposite. Children mimic both expressions.", materials: "Emotion flashcards" },
            { name: "Picture Opposite Match", description: "Children are given cards with opposite images (e.g., sun and snowflake). They must match the pairs and say both words aloud to build vocabulary.", materials: "Picture cards of opposite pairs" }
          ],
          "Blends": [
            { name: "Blend Sound Hopscotch", description: "Draw boxes with blends like 'bl', 'cl', 'fl', 'gr' using chalk outside or on paper indoors. Children hop on each blend as they say the sound and a word (e.g., 'bl – blue').", materials: "Chalk or masking tape, paper (if indoors)" },
            { name: "Blend Sorting Basket", description: "Prepare word/picture cards of blend words. Children sort them into baskets labeled with blends (e.g., 'tr', 'cr', 'sl').", materials: "Baskets or bowls, paper blend cards" },
            { name: "Build-a-Blend Clay Words", description: "Children use clay to shape blend letters and simple words like 'flag', 'clap', 'grab'. Helps reinforce spelling through tactile play.", materials: "Clay or homemade dough" },
            { name: "Blend Train Craft", description: "Each train wagon has a blend (e.g., 'gl', 'st'), and children stick words or pictures that match onto the wagons.", materials: "Old paper, glue, scissors (teacher handles), crayons" },
            { name: "Spin-a-Blend Wheel", description: "Create a spinner with different blends. Children spin and name a word starting with the blend.", materials: "Cardboard/paper plate, spinner arrow, marker" },
            { name: "Blend Bingo", description: "Make a bingo board with blend words. As the teacher calls out a blend word, kids cover it if it's on their board.", materials: "Handmade boards, small buttons as markers" },
            { name: "Clap the Blend", description: "Say a word and ask kids to clap the number of sounds, then identify the blend (e.g., 'cl-ap' → blend is 'cl').", materials: "Word list" },
            { name: "Stick and Match Blends", description: "Write blends on one side of a folded A4 sheet and draw or paste images on the other side. Children match them with string or paper strips.", materials: "A4 sheet, crayons, pictures, string" },
            { name: "Blends Hop & Match", description: "Place blend word cards and picture cards around the room. Kids hop to the matching pair when a blend is called.", materials: "Blend word cards, pictures" },
            { name: "Blends Sound Bag", description: "Put small objects (e.g., spoon, glue, block) in a bag. Children pull one out, say its name, and identify the blend.", materials: "Cloth bag, small objects with blend sounds" },
            { name: "Blend Match Puzzle", description: "Create homemade puzzles with blend beginnings and ending parts (e.g., 'bl' + 'ock'). Children join them.", materials: "Cardstock paper or cut-up charts" },
            { name: "Blendy Song Time", description: "Sing songs emphasizing blends (e.g., 'Bl-bl-blue is the sky…'). Children join in the blend sounds with actions.", materials: "Bluetooth speaker (optional), lyrics" },
            { name: "Chalk Blends Path", description: "Draw a walking path with blends written in each step. As kids walk, they say each blend and a matching word.", materials: "Chalk" },
            { name: "Scoop & Say", description: "Fill a bowl with blend word cards. Children pick using a spoon and say the blend and a word with it.", materials: "Cards, spoon, bowl" },
            { name: "Color by Blend", description: "Give children a blend worksheet (e.g., 'color all 'gr' blend words blue, 'cl' green').", materials: "Crayons, printed or handmade sheets" },
            { name: "String a Blend Word", description: "Children string together paper beads with one letter or blend on each, forming blend words like 'flag' or 'clap.'", materials: "Paper circles with holes, thread" },
            { name: "Act Out a Blend Word", description: "Teacher calls a blend word like 'clap' or 'grin' and kids act it out. Helps with comprehension.", materials: "Word list" },
            { name: "Ball Toss Blend Match", description: "Children toss a soft ball onto picture cards. They say the blend that matches the picture.", materials: "Soft ball, blend pictures" },
            { name: "Paint the Blend", description: "Children use finger painting to write blend letters and blend words.", materials: "Paint, paper, aprons (optional)" },
            { name: "Blend Word Relay", description: "In teams, children run to a table, pick a word card, and say the blend. Builds speed and phonics recall.", materials: "Word cards, space to move" }
          ],
          "CVC Words (Consonant-Vowel-Consonant)": [
            { name: "CVC Word Hop", description: "Write CVC words on sheets or newspaper squares. Spread them out. Children hop from one to the next, reading the word aloud.", materials: "Newspaper or paper squares with CVC words" },
            { name: "Sound It Out Sticks", description: "Write individual sounds (c–a–t) on 3 sticks. Kids arrange sticks to form CVC words and read them.", materials: "Ice cream sticks, markers" },
            { name: "CVC Bead Spelling", description: "Give children beads with letters. They string together CVC words (like 'dog').", materials: "Letter beads or paper-beads, thread" },
            { name: "Word Family Match-Up", description: "Provide word family cards (e.g., –at, –et). Kids match beginning sounds (like 'c', 'b') to form CVC words.", materials: "Word family cards, letter cards" },
            { name: "Clay CVC Builder", description: "Children use clay to roll and shape letters to build CVC words.", materials: "Clay" },
            { name: "CVC Cloth Clip Cards", description: "Write CVC words and pictures on cards. Children clip the correct picture to the matching word using clothespins.", materials: "Cards, clothespins" },
            { name: "Picture-to-Word Match", description: "Place pictures (like a pot, pen, cat) on the table. Children match written CVC words to the pictures.", materials: "Picture cards, word cards" },
            { name: "CVC Spin & Say", description: "Make a spinner with vowel sounds. Children spin, pick consonants from a pile, and try making a real CVC word.", materials: "Paper spinner, letter cards" },
            { name: "Spoon CVC Builder", description: "Write consonants on spoons and vowels on cups. Children insert spoons into the cup to form real CVC words.", materials: "Plastic spoons, paper cups" },
            { name: "CVC Sound Steps", description: "Label floor spots with 'C', 'V', 'C'. Child steps on each and says the corresponding letter to form a word (e.g., C: 'b', V: 'a', C: 't').", materials: "Floor markers or paper letters" },
            { name: "CVC Fishing Game", description: "Attach paper clips to CVC word cards and use a stick with a magnet to 'fish.' Children read the caught word.", materials: "Word cards, magnet stick, paper clips" },
            { name: "Read & Toss", description: "Toss a soft ball to a child. The teacher says a CVC word, and the child must repeat and toss back.", materials: "Soft ball" },
            { name: "CVC Bingo", description: "Use simple bingo sheets with CVC words. Teacher says a word; kids cover it if they have it.", materials: "Bingo boards with CVC words, buttons or beads to cover" },
            { name: "CVC Word Songs", description: "Sing simple tunes like 'C-A-T says cat!' to familiar melodies. Children clap to each letter.", materials: "Bluetooth speaker (optional), song lyrics" },
            { name: "CVC Coloring Code", description: "Give a sheet with mixed CVC words and a color code (e.g., color all '-at' words red).", materials: "Printed sheet, crayons" },
            { name: "Make a Word Train", description: "Children arrange word cards in train formation by changing the initial or final sound (e.g., cat → cap → can).", materials: "Word cards with train engine print" },
            { name: "Sound Boxes Drawing", description: "Draw 3 boxes. Children write or draw one letter sound per box to make a CVC word.", materials: "Paper, pencils or crayons" },
            { name: "CVC Puppet Talk", description: "Create puppets. Children use them to 'talk' only in CVC words like 'I see a dog. I got a pen.'", materials: "Paper bag puppets" },
            { name: "CVC Basket Sort", description: "Label baskets with 'a', 'e', 'i', 'o', 'u'. Children sort CVC word cards by vowel sound.", materials: "Small baskets, word cards" },
            { name: "CVC Maze Walk", description: "Draw a path on the ground with CVC words. Children follow a correct sequence to reach the end (e.g., bed → bad → bat).", materials: "Chalk or large word cards" }
          ],
          "Digraphs": [
            { name: "Digraph Sound Hunt", description: "Hide objects or picture cards around the room (e.g., chair, shell, thumb). Children hunt and identify the digraph sound in each word.", materials: "Picture cards or small objects with digraph sounds" },
            { name: "Digraph Clap & Say", description: "Teacher says a word (e.g., 'shark'), and children clap once for each sound and then call out the digraph ('sh').", materials: "Word list" },
            { name: "Digraph Paint Dab", description: "Write digraphs (ch, sh, th, wh, ph) on paper. Children dab them with finger paint as the teacher says the sound or a word.", materials: "Paper, paints" },
            { name: "Phonics Spoon Match", description: "Write digraphs on spoons and matching words on cards. Children insert the right spoon into a paper cup with the word.", materials: "Plastic spoons, paper cups, cards" },
            { name: "Digraph Puppet Talk", description: "Children decorate paper bag puppets and make them 'talk' using words with one digraph (e.g., 'ship', 'shoes').", materials: "Paper bags, buttons, wool, crayons" },
            { name: "Sound Sorting Bowls", description: "Label bowls with digraphs. Children sort small pictures or word cards into the correct bowl.", materials: "Bowls, picture/word cards" },
            { name: "Digraph Rainbow Writing", description: "Children trace or write digraph words using different crayon colors.", materials: "Crayons, paper with digraph words" },
            { name: "Digraph Ball Roll", description: "Write digraphs on a ball. Children roll it to a friend who says a word starting with the digraph under their hand.", materials: "Plastic ball, marker" },
            { name: "Digraph Flash & Act", description: "Flash a digraph (e.g., 'ch'), and children act out or show a word (e.g., pretend to chew).", materials: "Flashcards" },
            { name: "Digraph Bead Stringing", description: "Each bead has a letter. Children string together a digraph word like 'ch-i-p'.", materials: "Paper beads, thread, marker" },
            { name: "Digraph Path Walk", description: "Create a floor path with digraph words (e.g., fish, chip). Children walk on it and say each word.", materials: "Paper strips or chalk, word cards" },
            { name: "Digraph Puzzle Making", description: "Cut pictures into two halves. One side has a digraph, the other the rest of the word. Kids join the right parts.", materials: "Printed pictures cut in half" },
            { name: "Digraph Clay Press", description: "Children form digraph letters using clay and press them into soft dough as stamps.", materials: "Clay, rolling dough" },
            { name: "Digraph Sound Bag", description: "Put items like shell, photo, whistle inside. Kids pull one out, name it, and say the digraph.", materials: "Cloth bag, small items" },
            { name: "Chalk & Chat Digraphs", description: "Write digraphs on the ground. As kids walk or jump over them, they say the sound and one word.", materials: "Chalk" },
            { name: "Digraph Match Wheel", description: "A paper wheel with digraphs. Children spin and pick a word or picture with that digraph.", materials: "Paper wheel, pointer, word/picture cards" },
            { name: "Paint & Paste Digraph Collage", description: "Children create a collage for one digraph using paint and cutouts (e.g., all things starting with 'sh').", materials: "Scrap paper, crayons, glue, paint" },
            { name: "Digraph Spoon Toss", description: "Write digraphs on the floor. Kids toss a spoon to land on one, then say a word with that sound.", materials: "Spoon, paper digraph cards" },
            { name: "Digraph Song Time", description: "Play short phonics songs for digraphs like 'sh, sh, ship sails away…' Children sing and mime.", materials: "Bluetooth speaker, songs (or live singing)" },
            { name: "Digraph Maze Trail", description: "Create a path of digraphs and children must follow only a specific digraph sound to reach the end.", materials: "Paper, arrows, word clues" }
          ],
          "Long Vowel Sounds": [
            { name: "Magic 'e' Wand Show", description: "Children hold a stick with a star (the 'magic e') and wave it over CVC cards (like cap → cape) to change the short vowel to a long vowel.", materials: "Paper cards, stick, star cutout" },
            { name: "Vowel Sound Train", description: "Create a train with coaches labeled with words like 'cake,' 'bike,' 'rope,' and 'cube.' Children form a line and read the words aloud as they pretend to ride the train.", materials: "A4 paper, string, word cards" },
            { name: "Long Vowel Sound Hopscotch", description: "Draw boxes on the ground. Write long vowel words (e.g., leaf, bike, boat) inside. Children hop and say the vowel sound in each word.", materials: "Chalk/tape, word cards" },
            { name: "Vowel Sorting Box", description: "Children sort picture cards into five boxes marked A-E-I-O-U (representing long sounds like 'cake', 'beet', 'kite', 'goat', 'mule').", materials: "5 labeled boxes, picture-word cards" },
            { name: "Sing the Vowel Song", description: "Play a simple long vowel sound song on the speaker. Pause after each sound and let children repeat it with a matching action.", materials: "Bluetooth speaker" },
            { name: "Pin the Vowel", description: "Use clothespins to clip the correct long vowel letter to the end of word beginnings (e.g., 'c _ k e' → 'a').", materials: "Paper strips, clothespins, markers" },
            { name: "Bead the Word", description: "Children string beads to spell out long vowel words. One color bead for consonants, another for vowels.", materials: "Beads, thread, vowel word list" },
            { name: "Clay Word Formation", description: "Students shape clay into long vowel word letters like 'goat,' 'seed,' 'ride.'", materials: "Clay, word picture cards" },
            { name: "Match & Clip Cards", description: "Provide cards with a picture and two word options (e.g., 'cake' or 'cack'). Children clip the correct long vowel word.", materials: "Printed cards, clothespins" },
            { name: "Story Time with Long Vowels", description: "Read a short picture story containing long vowel sounds. Emphasize sounds like /aː/ in 'cake' or /iː/ in 'tree.' Children echo each sound.", materials: "Simple printed story or flashcards" },
            { name: "Treasure Box Hunt", description: "Hide long vowel word cards in a box. Children take turns picking and reading aloud their word (e.g., 'cube,' 'rail,' 'goat').", materials: "Small box, picture-word cards" },
            { name: "Vowel Sound Bingo", description: "Use a bingo sheet with pictures of long vowel words. As you say a sound or word, children cover the matching picture.", materials: "Bingo sheets, buttons" },
            { name: "Stick the Missing Sound", description: "Give students word strips with missing vowels (e.g., c _ k e). They stick the correct vowel sticker or write it in.", materials: "A4 strips, vowel stickers or marker pens" },
            { name: "Draw What You Hear", description: "Say a long vowel word (like 'leaf'). Children listen, identify the vowel, and draw the object.", materials: "Paper, crayons" },
            { name: "Vowel Ladder Game", description: "Create a ladder with steps showing long vowel sounds. Children climb it (drawn on floor or on wall chart) while saying the sound on each step.", materials: "Chart or floor tape, vowel cards" },
            { name: "Bottle Cap Match", description: "Use bottle caps with long vowel letters written on them. Match to pictures (e.g., a cap with 'o' to match 'boat').", materials: "Bottle caps, picture cards" },
            { name: "Word Chain Circle", description: "Children sit in a circle. First child says a long vowel word, next child says a new one starting with the ending sound.", materials: "None or word cue cards" },
            { name: "Button Sorting Mat", description: "Use mats with vowel sounds written. Children place buttons on the mat corresponding to the long vowel in a spoken word.", materials: "Button sets, sound mats" },
            { name: "Vowel Relay Race", description: "Children pick a word from a pile, run and match it to the correct vowel sound basket.", materials: "Word cards, 5 baskets labeled A-E-I-O-U" },
            { name: "Paint the Vowel Word", description: "Children paint or color a long vowel word using big bubble letters (e.g., 'tree,' 'bike') and decorate with related objects.", materials: "Paper, crayons, paintbrushes" }
          ],
          "Action Words": [
            { name: "Action Song Time", description: "Children sing along to an 'action song' (e.g., 'If You're Happy and You Know It') while doing each action (clap, stomp, jump).", materials: "Bluetooth speaker or mobile phone" },
            { name: "Verb Hopscotch", description: "Draw hopscotch on the ground. Each square has an action word (run, sit, eat). When children hop on a square, they do the action.", materials: "Chalk or tape" },
            { name: "Action Dice", description: "Create a large cube with a different action (jump, spin, hop, clap, crawl, sit) on each side. Children roll the dice and perform the action.", materials: "Reused cardboard, marker" },
            { name: "Simon Says Verbs", description: "Play 'Simon Says' using only action words (e.g., 'Simon says jump!'). Great for listening and comprehension.", materials: "None" },
            { name: "Action Matching Cards", description: "One set has pictures (boy running), another set has words (run). Children match word to picture.", materials: "Handmade picture cards and word cards" },
            { name: "Walk & Say", description: "Children walk around the classroom and say an action word with every step: 'walk, walk,' 'clap, clap,' etc.", materials: "None" },
            { name: "Verb Collage", description: "Children cut and paste pictures of people doing different actions (from old newspapers/magazines) and label them.", materials: "Newspaper, glue, paper" },
            { name: "Clay Action Models", description: "Children use clay to make simple models of actions (like someone running or jumping). Then say the verb aloud.", materials: "Clay" },
            { name: "Action Flashcards Circle", description: "Children sit in a circle. Teacher shows an action flashcard; the child in turn acts it out.", materials: "Flashcards" },
            { name: "Charades: Action Words", description: "Child acts out a verb without speaking. Others guess.", materials: "Action word cards (optional)" },
            { name: "Thread-the-Verb Necklace", description: "Each bead represents an action word learned. After saying the word and acting it out, the child threads one bead.", materials: "Thread, beads or buttons" },
            { name: "Action Train", description: "Children form a train and do the same action together as they move (e.g., 'jumping train,' 'walking train').", materials: "None" },
            { name: "Verb Spin Wheel", description: "Spin a handmade paper wheel with actions written on it. Whatever it lands on, all children perform.", materials: "Paper, spinner (or use bottle)" },
            { name: "Action Art", description: "Children draw themselves doing an action (e.g., eating, skipping) and write the word under the drawing.", materials: "A4 sheets, crayons" },
            { name: "Verb Sorting Game", description: "Give children picture cards. They sort them into groups: running actions, sitting actions, eating actions.", materials: "Paper picture cards" },
            { name: "Action Song Freeze", description: "Play music, children dance. Pause the music and shout a verb – they freeze in that action pose.", materials: "Music player" },
            { name: "Verb Clue Game", description: "Give a simple clue: 'I do this when I'm tired' – child guesses and acts 'sleep.'", materials: "None" },
            { name: "Verb Puppet Show", description: "Children use hand puppets or sock puppets to demonstrate an action (e.g., puppet jumps).", materials: "Old socks, buttons for puppets" },
            { name: "Action Poster Wall", description: "Create a class poster showing common action words with children's drawings.", materials: "Chart paper, crayons" },
            { name: "My Day Action Chart", description: "Each child makes a chart showing actions from their daily routine (wake, brush, eat, play).", materials: "Paper, sketch pens" }
          ],
          "Sentences from Vowels (a, e, i, o, u)": [
            { name: "Sentence Building Cards", description: "Word cards are shuffled (e.g., 'The', 'cat', 'ran'). Children rearrange them to form correct sentences.", materials: "Small cards with CVC words and sight words" },
            { name: "Vowel Sentence Train", description: "Each sentence part (subject–verb–object) is written on a paper train compartment. Children match and read aloud.", materials: "Paper train cutouts" },
            { name: "Clay Sentence Maker", description: "Teacher says a sentence (e.g., 'The bug is big') and children use clay to model objects in the sentence.", materials: "Clay" },
            { name: "Stick & Match Sentence Puzzle", description: "Split sentences written on strips (e.g., 'The sun / is hot'). Children match both parts to form a full sentence.", materials: "A4 cut strips" },
            { name: "Vowel Sound Sentence Hunt", description: "Sentences are hidden around the classroom. Each group hunts and reads aloud a sentence with a vowel focus.", materials: "Paper strips, tape" },
            { name: "Picture to Sentence Talk", description: "Show a picture (e.g., a cat on a mat). Children form a sentence using the vowel sound: 'A cat is on the mat.'", materials: "Hand-drawn or printed pictures" },
            { name: "Color the Sentence", description: "Children get a worksheet of short sentences. They color only the ones with vowel /e/, /a/, etc.", materials: "A4 sheet, crayons" },
            { name: "Read & Act Sentences", description: "Read aloud a short sentence like 'Sit on the rug' or 'Hop on the log.' Children do the action.", materials: "None" },
            { name: "Vowel Sound Basket Toss", description: "Basket is labeled 'a', 'e', 'i', etc. Teacher reads a sentence, and child tosses a ball into the matching vowel basket.", materials: "Baskets, balls" },
            { name: "CVC Sentence Garden", description: "Draw a flower garden on a chart. Each flower has a vowel. Children stick short sentences (e.g., 'A bug is red') to correct flowers.", materials: "Chart paper, glue, word strips" },
            { name: "I Spy a Sentence", description: "Teacher says, 'I spy a sentence with the word 'bat'.' Children find the sentence from a group.", materials: "Prewritten sentence cards" },
            { name: "Vowel Spinner Sentences", description: "Children spin to land on a vowel (e.g., 'e'), then form a sentence like 'The net is wet.'", materials: "Paper spinner" },
            { name: "Draw & Write Vowel Sentence", description: "Children draw a picture (e.g., a pin) and then write a sentence: 'It is a pin.'", materials: "A4 sheets, crayons" },
            { name: "Match Picture with Sentence", description: "Children match sentence cards to correct pictures (e.g., 'The pig is big' to a pig picture).", materials: "Sentence strips and simple images" },
            { name: "Musical Sentence Circle", description: "Children sit in a circle passing a box. When music stops, the child picks a sentence strip and reads aloud.", materials: "Bluetooth speaker, sentence cards" },
            { name: "Sentence Ladder Race", description: "Place vowel sentence steps on a floor path. Children read and walk on each one to reach the top.", materials: "Floor space, sentence cards" },
            { name: "Sound-and-Say Relay", description: "Split into two teams. One child reads a sentence aloud and runs to tag the next child.", materials: "Vowel sentence strips" },
            { name: "My Vowel Sentence Poster", description: "Children choose their favorite vowel and write 1–2 simple sentences about it.", materials: "Chart paper, crayons" },
            { name: "Stamp & Stick Sentence Fun", description: "Children form sentences using stamp letters or stickers with words (e.g., 'The dog is hot.')", materials: "Alphabet stamps or word stickers" },
            { name: "Vowel Sound Flip Book", description: "Children flip through handmade mini-books for each vowel. Each page has a sentence with a picture, e.g., 'The cat sat.'", materials: "Scrap paper, stapler, crayons" }
          ],
          "I am / You are": [
            { name: "I Am Mirror Craft (No Real Mirror)", description: "Children make a paper face using scrap and say: 'I am [child's name]' or 'I am happy.'", materials: "Scrap paper, crayons, buttons" },
            { name: "You Are My Friend Badge", description: "Children make a badge for a classmate with 'You are my friend' and give it to them.", materials: "Old paper, string/thread, crayons" },
            { name: "I Am… Circle Game", description: "Children stand in a circle. One says 'I am [name],' and points to another saying 'You are [name].'", materials: "None" },
            { name: "Clay Emotions Faces", description: "Children make happy/sad faces with clay and say 'I am happy' or 'You are sad.'", materials: "Clay" },
            { name: "Role Card Match", description: "Cards with 'I am a teacher' or 'You are a student' are matched to simple stick-figure drawings.", materials: "Scrap cards, crayons" },
            { name: "I Am Action Charades", description: "Child acts like a cat/dancer/etc. and says 'I am a dancer.' Others respond, 'You are a dancer.'", materials: "None" },
            { name: "Name Chain Chant", description: "Children chant in a chain: 'I am Anaya, you are Rohan,' and it continues around.", materials: "None or use a small ball for passing" },
            { name: "I Am Special Crown", description: "Make a simple paper crown. Each child decorates it and says 'I am special!'", materials: "Old paper, glue, crayons" },
            { name: "You Are Kind Stickers", description: "Teacher gives each child a kindness sticker that says 'You are kind.'", materials: "Paper stickers, crayons" },
            { name: "Button Sorting Labels", description: "Children sort buttons and say 'I am sorting buttons.' Partner says 'You are sorting buttons.'", materials: "Buttons" },
            { name: "My Picture, My Sentence", description: "Child draws a self-portrait and writes 'I am [name].'", materials: "A4 sheet, crayons" },
            { name: "Compliment Chain", description: "Children form a line. Each child says something like 'You are helpful' to the next.", materials: "None" },
            { name: "I Am Sound Clap", description: "Clap and say phrases: 'I am tall,' 'You are short,' etc. Children repeat with gestures.", materials: "None" },
            { name: "I Am/You Are Puzzle Match", description: "Sentences are cut into two pieces (e.g., 'I am / your friend'). Children match and read.", materials: "Cut paper strips" },
            { name: "Emotion Spoon Labels", description: "Draw faces on spoons and say 'I am sleepy,' 'You are excited.'", materials: "Plastic spoons, markers" },
            { name: "You Are Welcome Circle", description: "One child says 'I am sorry.' The next says 'You are welcome.' Continue with polite phrases.", materials: "None" },
            { name: "I Am Star Display", description: "Children decorate a star and write 'I am a star!' on it. Stars go on a display chart.", materials: "Chart paper, scrap paper stars, glue" },
            { name: "You Are Good Helper Badge", description: "After clean-up, teacher gives badge saying 'You are a good helper!'", materials: "Paper, string/thread, crayons" },
            { name: "I Am Picture Card Talk", description: "Show a picture (e.g., a child reading). Ask: 'What is she doing?' Student says: 'I am reading.'", materials: "Picture cards" },
            { name: "Pass the Compliment", description: "Pass a paper ball. Whoever catches it gives a compliment using 'You are...'", materials: "Paper ball" }
          ],
          "This is / That is": [
            { name: "Object Point & Speak", description: "Place an object close and one far. Child says: 'This is a pen' (near), 'That is a bag' (far).", materials: "Classroom objects (pencil, bag, ball, etc.)" },
            { name: "Clay Model Talk", description: "Make small clay models. Hold one near: 'This is a dog.' Point to far model: 'That is a cat.'", materials: "Clay" },
            { name: "Picture Stick Show", description: "Attach pictures to stick. Hold near and say 'This is a hat.' Hold far: 'That is a car.'", materials: "Picture cards, spoons/sticks" },
            { name: "Object Hunt Game", description: "Find things nearby and far in class. Say 'This is a table,' 'That is a door.'", materials: "Classroom surroundings" },
            { name: "Flashlight Pointing", description: "Use a flashlight to point at near and far objects in a darkened room. Say: 'This is a chair,' 'That is a fan.'", materials: "Torchlight" },
            { name: "This/That Sorting Mat", description: "Have two mats labeled 'This' and 'That.' Place real objects or cut-outs accordingly.", materials: "Old paper mats, objects, markers" },
            { name: "This is My Button", description: "Each child brings a button and says: 'This is my button.' Teacher points to distant one: 'That is your button.'", materials: "Buttons" },
            { name: "Chalk Circle Show", description: "Make two chalk circles: one near, one far. Place objects and describe them using 'this' and 'that.'", materials: "Chalk, small objects" },
            { name: "Paper Ball Toss & Say", description: "Toss a paper ball close: 'This is a ball.' Toss it far: 'That is a ball.'", materials: "Paper balls" },
            { name: "Drawing Distance Fun", description: "Draw objects close and far on paper. Label: 'This is a tree.' 'That is a house.'", materials: "A4 paper, crayons" },
            { name: "Finger Puppet Talk", description: "Use finger puppets: Hold near and say 'This is a bear.' Place one far and say 'That is a lion.'", materials: "Paper puppets" },
            { name: "My Spoon / That Spoon", description: "Child holds a spoon: 'This is my spoon.' Teacher points to another: 'That is your spoon.'", materials: "Spoons" },
            { name: "Paper Cup Guess", description: "Place small object in cup. Show near: 'This is a shell.' Point far: 'That is a shell.'", materials: "Paper cups, small objects" },
            { name: "Vegetable Talk", description: "Show a real or plastic vegetable near: 'This is a carrot.' Point to far: 'That is a tomato.'", materials: "Real/plastic vegetables" },
            { name: "Near-Far Show and Tell", description: "Each child brings one object and places one near, one far. Says both sentences.", materials: "Reusable toys or materials" },
            { name: "This/That Drawing Race", description: "Children draw two items – one near, one far – and write or say 'This is...' and 'That is...'", materials: "Paper, crayons" },
            { name: "Music Freeze Point", description: "Play music. When it stops, point to something near: say 'This is a chair.' Next stop: 'That is a window.'", materials: "Bluetooth speaker" },
            { name: "Chair/Table Game", description: "Sit on chair, say 'This is a chair.' Point to far chair: 'That is a chair.' Repeat with tables.", materials: "Classroom furniture" },
            { name: "Button Trail Activity", description: "Create a line of buttons. Near one: 'This is a red button.' Far one: 'That is a green button.'", materials: "Buttons" },
            { name: "Toy Show Sentence Walk", description: "Place toys at two ends of the classroom. Children walk to near toy and say 'This is a duck.' Point to far: 'That is a horse.'", materials: "Toy animals or printed images" }
          ],
          "Is / Are": [
            { name: "Button Talk", description: "Child picks one button and says: 'This is a button.' Then picks 2 or more and says: 'These are buttons.'", materials: "Buttons of various colors and sizes" },
            { name: "Clay Shape Count", description: "Children make one clay ball: 'This is a ball.' Then 3 balls: 'These are balls.'", materials: "Clay" },
            { name: "Fruit Picture Match", description: "Show a single fruit pic: 'This is an apple.' Show a bunch: 'These are apples.'", materials: "Printed fruit pictures" },
            { name: "Name Tag Board", description: "Display one name: 'This is Riya.' Display 3 name tags: 'These are students.'", materials: "Old paper, name cards, board" },
            { name: "Handprint Chart", description: "One child prints hand on chart: 'This is a hand.' Group prints: 'These are hands.'", materials: "A4 sheets, paint" },
            { name: "Cup Collection Fun", description: "Put 1 cup: 'This is a cup.' Add 3 more: 'These are cups.' Let kids arrange and say aloud.", materials: "Plastic/paper cups" },
            { name: "Button Trail Sentence Walk", description: "Put a trail of 1 button: 'This is a button.' Add more: 'These are buttons.' Let kids walk beside trail while saying it.", materials: "Buttons" },
            { name: "Paper Ball Toss & Speak", description: "Throw one paper ball: 'This is a ball.' Then toss many: 'These are balls.'", materials: "Scrap paper" },
            { name: "Vegetable Bowl Talk", description: "Place one real/plastic vegetable in bowl: 'This is a tomato.' Add more: 'These are tomatoes.'", materials: "Real/plastic vegetables, bowls" },
            { name: "'Who is / Who are' Song", description: "Use a Bluetooth speaker to play a short chant or rhyme: 'Who is this? This is my friend!' / 'Who are they? They are my friends!'", materials: "Speaker, teacher voice or recorded rhyme" },
            { name: "Drawing Time Sentences", description: "Child draws one sun: 'This is a sun.' Draws 2 clouds: 'These are clouds.'", materials: "A4 paper, crayons" },
            { name: "Spoon & Pebble Count", description: "Place 1 spoon: 'This is a spoon.' Place 4 pebbles: 'These are pebbles.'", materials: "Spoons, pebbles" },
            { name: "'Is/Are' Puppet Parade", description: "Use one puppet: 'This is a boy.' Use two puppets: 'These are children.'", materials: "Paper puppets on spoons" },
            { name: "Thread Bead Sentence", description: "Thread one bead: 'This is a bead.' Thread more: 'These are beads.'", materials: "Beads, string" },
            { name: "Chalk Circle Walk", description: "Draw one chalk circle: child steps in and says: 'This is a circle.' Draw many: 'These are circles.'", materials: "Chalk" },
            { name: "Newspaper Picture Talk", description: "Cut one car from newspaper: 'This is a car.' Cut 3 cars: 'These are cars.'", materials: "Newspaper clippings" },
            { name: "Cloth Fold & Count", description: "Use one cloth: 'This is a napkin.' Use 2-3: 'These are napkins.' Kids fold and say.", materials: "Old reusable cloth pieces" },
            { name: "Finger Pointing Rhyme", description: "Sing: 'One finger is pointing high, two fingers are in the sky!' (Act out with fingers.)", materials: "None; only hands" },
            { name: "Toy Group Talk", description: "Place one toy animal: 'This is a lion.' Add more: 'These are lions.'", materials: "Toy animals or printed images" },
            { name: "Spin & Speak Game", description: "Spin a bottle. Whomever it points to picks one or many objects and forms sentence: 'This is...' or 'These are...'", materials: "Bottle, classroom items" }
          ],
          "Reduce, Reuse, Recycle": [
            { name: "Recycle Sorting Game", description: "Children are given a pile of items (paper, plastic lids, bottle caps, cloth, etc.) and asked to sort them into three labeled bins: 'Recycle', 'Reuse', and 'Trash'.", materials: "Scrap items, 3 cardboard boxes or bins, paper labels" },
            { name: "Recycled Instruments Parade", description: "Children create fun musical instruments like shakers from plastic bottles or drums from empty tins and perform a rhythm parade.", materials: "Plastic bottles, buttons, rubber bands, tins, old paper" },
            { name: "Paper Roll Characters", description: "Children reuse empty toilet paper rolls to make animals or cartoon characters using color and fabric scraps.", materials: "Paper rolls, paints/crayons, fabric scraps, glue" },
            { name: "T-shirt Bag Making (with Teacher Help)", description: "Teachers show how to convert old t-shirts into carry bags (no sewing). Kids decorate them with paint or stickers.", materials: "Old t-shirts, scissors (used by teacher), paint, stickers" },
            { name: "Bottle Cap Picture Frame", description: "Children use bottle caps to decorate a cardboard frame for photos or art.", materials: "Bottle caps, cardboard, glue, optional yarn" },
            { name: "Plastic Spoon Art", description: "Children paint old plastic spoons to make flowers, animals, or sun decorations.", materials: "Old spoons, paints, glue, paper for background" },
            { name: "Scrap Paper Collage", description: "Kids collect and tear scrap paper to create a large collage about nature or Earth Day.", materials: "Old magazines/newspaper, glue, chart paper" },
            { name: "Fabric Scrap Bookmarks", description: "Children reuse leftover cloth to create bookmarks and decorate them with buttons or thread.", materials: "Old fabric, buttons, glue, string/thread" },
            { name: "Recycled Bowling", description: "Children use used plastic bottles as bowling pins and roll a ball to knock them down.", materials: "6–10 empty bottles, a plastic ball" },
            { name: "Sock Puppet Story Time", description: "Kids make sock puppets using old socks and then use them to act out short skits about recycling.", materials: "Old socks, buttons, fabric bits, glue" },
            { name: "Newspaper Mats", description: "Children fold and glue newspaper strips to make simple paper mats.", materials: "Old newspaper, glue, teacher's guidance" },
            { name: "Reuse Relay", description: "A fun relay where children collect scattered reusable items and drop them in labeled baskets (reuse, recycle).", materials: "Mixed scrap items, baskets, labels" },
            { name: "Box City", description: "Children use small boxes and cartons to build a miniature city.", materials: "Empty boxes (toothpaste, cereal), tape, crayons" },
            { name: "Trash to Treasure Hunt", description: "Children find 'waste' items in the class and bring them to the teacher who tells them if they can be reused or recycled.", materials: "Pre-scattered waste items, labels" },
            { name: "Eco Hat Parade", description: "Children create fun hats using reused materials (newspaper, cardboard, fabric) and walk in a 'green parade.'", materials: "Newspaper, yarn, paper, decorations" },
            { name: "Bottle Planters", description: "Teachers help cut plastic bottles; children decorate and plant seeds in them.", materials: "Plastic bottles, soil, seeds, paint" },
            { name: "Recycle Sorting Song", description: "Children sing and dance to a simple song about what goes in recycle/reuse/trash while pointing to bins or flashcards.", materials: "Flashcards, Bluetooth speaker (optional)" },
            { name: "Reuse Fashion Show", description: "Children wear simple outfits made from reused materials and walk on a pretend ramp.", materials: "Fabric scraps, paper hats, reused costume bits" },
            { name: "Recycling Puppet Skit", description: "Children use handmade puppets to perform a small roleplay about saving the Earth through recycling.", materials: "Puppets from socks/paper, simple props" },
            { name: "Earth Promise Circle", description: "Children sit in a circle and make 'green promises' like 'I will reuse paper' or 'I won't waste water.'", materials: "Paper leaf shapes for each child to hold and take home" }
          ]
        }
      }
    ],
    maths: [
      { 
        volume: 1, 
        topics: { 
          "Numbers Revision": [
            { name: "Number Button Train", description: "Children stick buttons in a line on a paper train from 1 to 50, saying numbers aloud as they go.", materials: "A4 sheet, buttons, glue" },
            { name: "Clay Number Garden", description: "Children roll clay to form numbers 1–50 and place them in a drawn garden path.", materials: "Clay, A4 sheet" },
            { name: "Hop and Count Trail", description: "Numbers 1–50 are placed on floor cards. Children hop along while counting.", materials: "Number cards, open space" },
            { name: "Number Bead Necklace", description: "String beads in groups of 10s, counting aloud till 50.", materials: "Thread, 50 beads per child" },
            { name: "Paper Strip Counting", description: "Paste 1–50 number strips in order. Some numbers are missing for kids to fill in.", materials: "Scrap strips, markers" },
            { name: "Spoon Count Race", description: "Place spoons numbered 1–50 in a bucket. Children pick a spoon and place it in order.", materials: "50 spoons with stickers, bucket" },
            { name: "Count & Clap", description: "Teacher calls a number. Children clap that many times. Repeat in sets up to 50.", materials: "None" },
            { name: "Number Circle Pass", description: "Sit in a circle and pass a ball. Each child says the next number till 50.", materials: "Ball" },
            { name: "Newspaper Number Smash", description: "Write numbers on newspaper sheets. Kids roll clay balls and smash them onto called numbers.", materials: "Newspaper, clay" },
            { name: "Paint & Dot Numbers", description: "Dot-paint numbers from 1 to 50 using earbuds.", materials: "Earbuds, paint, A4 sheet" },
            { name: "Number Ball Toss", description: "Toss a soft ball at number cards on floor. Say the number you hit.", materials: "Soft ball, number cards" },
            { name: "Stick the Missing Number", description: "Display a line from 1–50 with gaps. Children paste missing numbers in correct spots.", materials: "Chart, number cutouts" },
            { name: "Clay Number Tower", description: "Stack clay balls and insert a toothpick flag with each number from 1 to 50.", materials: "Clay, paper flags" },
            { name: "Pebble Number Tray", description: "Place numbered pebbles in a tray from 1 to 50 in order.", materials: "Pebbles, tray, marker" },
            { name: "Number Hunt", description: "Hide number cards around the class. Children hunt and place them in sequence.", materials: "Number cards" },
            { name: "Bead Jump Count", description: "Each child picks beads from a bowl and says the number as they count up to 50.", materials: "Beads, bowl" },
            { name: "Match the Twin Numbers", description: "Mix pairs of cards (e.g., two 23s). Children match identical numbers.", materials: "Number cards (2 sets)" },
            { name: "Button Count Bunches", description: "Match number cards with sets of that many buttons (e.g., 15 buttons for 15).", materials: "Number cards, buttons" },
            { name: "Number Garland Hanging", description: "Hang 1–50 number flags on a thread. Kids identify & read aloud in order.", materials: "Thread, paper flags" },
            { name: "Number Puzzle Strips", description: "Cut a chart from 1 to 50 into strips. Kids put them back in order.", materials: "Chart paper, scissors (by teacher)" },
            { name: "Step Count Challenge", description: "Children walk 1 step per number till 50, counting aloud.", materials: "Open space" },
            { name: "Match Number to Picture Count", description: "Show pictures of objects. Children match them to correct number card (e.g., 25 apples → 25).", materials: "Picture cards, number cards" },
            { name: "Sticker Count Ladder", description: "Create a sticker ladder — one sticker per number up to 50.", materials: "Chart, stickers" },
            { name: "Paint the Number Path", description: "Kids paint a path with stepping stones labeled 1–50.", materials: "A4 sheet, paint, earbuds" },
            { name: "Straw Number Fence", description: "Make a paper 'fence' and paste numbered straws from 1–50.", materials: "Straws, glue, paper" }
          ],
          "Number Names 1–50": [
            { name: "Number Name Beads", description: "Children string beads labeled with number names in order from one to ten, then up to fifty in groups.", materials: "Beads or paper circles, thread" },
            { name: "Clay Name Modeling", description: "Teacher calls out a number name (e.g., twelve). Kids roll clay to form its spelling.", materials: "Clay" },
            { name: "Word Card Hunt", description: "Hide number name cards around the classroom. Kids hunt and match them to numeral cards.", materials: "Word cards, numeral cards" },
            { name: "Paint the Number Word", description: "Children use earbuds to paint-dot each letter of number names written lightly in pencil.", materials: "A4 sheet, earbuds, paint" },
            { name: "Spoon Match It!", description: "Write number names on spoons and matching numbers on paper cups. Kids match spoon to correct cup.", materials: "Plastic spoons, paper cups" },
            { name: "Number Name Garland", description: "Make hanging garlands with number names grouped by 10s (one–ten, eleven–twenty, etc.).", materials: "Thread, paper name strips" },
            { name: "Word Hopscotch", description: "Lay out tiles of number names on the floor. Kids hop from one to ten, and so on.", materials: "Floor cards" },
            { name: "Clay Stamp & Say", description: "Teacher stamps a number name in clay using printed letter tiles. Child reads it aloud.", materials: "Clay, letter stamps" },
            { name: "Match the Pair", description: "Match numeral cards (e.g., 21) with the word card (twenty-one).", materials: "Number and name flashcards" },
            { name: "Rainbow Name Writing", description: "Trace and color number names using rainbow colors for each letter.", materials: "Crayons, A4 sheet" },
            { name: "Number Name Cups Tower", description: "Stack cups with number names in sequence to build a tower.", materials: "Paper cups, marker" },
            { name: "Story Count & Write", description: "Teacher tells a story involving numbers (e.g., four ducks, thirty stars) and children write the names.", materials: "Story sheet, writing sheet" },
            { name: "Name Flag Parade", description: "Give each child a flag with a number name. Parade and chant the names in order.", materials: "Paper flags, sticks" },
            { name: "Fill the Blank Strip", description: "Show number sequences like 'forty, ___, forty-two'. Children fill the missing name.", materials: "Paper strips" },
            { name: "Spoon Tap Count", description: "Tap a spoon for each letter in a number name and then say it aloud.", materials: "Spoon, word cards" },
            { name: "Button Word Puzzle", description: "Arrange buttons over letters in number names to complete word outlines.", materials: "A4 sheet, buttons" },
            { name: "Draw & Label", description: "Draw pictures for numbers (e.g., 12 balloons) and write the name (twelve).", materials: "Drawing sheet, crayons" },
            { name: "Word Fishing Game", description: "Paper fish have number names. Kids use a stick to 'fish' and read aloud.", materials: "Paper fish, stick, thread" },
            { name: "Write with Thread", description: "Shape thread over large letters to form number names.", materials: "Thread, glue, chart sheet" },
            { name: "Picture-Name Matching", description: "Match a picture of items (e.g., 8 stars) with its number name (eight).", materials: "Picture cards, name cards" },
            { name: "Chalk Name Trace", description: "Outside or on blackboard, trace number names with chalk and say them aloud.", materials: "Chalk, board" },
            { name: "Touch & Tell Bag", description: "Pull a number card from a bag and tell its name (or vice versa).", materials: "Cloth bag, number/name cards" },
            { name: "Fold-a-Name Book", description: "Make a mini book. Each page shows a number name with a drawing.", materials: "A4 sheets folded, crayons" },
            { name: "Word Building Tiles", description: "Build number names using letter tiles.", materials: "Paper letter tiles" },
            { name: "Stick & Build Ladder", description: "Paste number names on a paper ladder in the correct sequence.", materials: "Chart, glue" },
            { name: "Ice Cream Stack", description: "Make an ice cream cone with scoops labeled thirty-one, thirty-two, etc.", materials: "Ice cream cutouts" },
            { name: "Play-Dough Number Name Smash", description: "Say a number name. Kids smash a play-dough ball onto the matching card.", materials: "Play-dough, flashcards" },
            { name: "Balloon Number Name Pop", description: "Balloons labeled with number names. Kids pop and shout the name.", materials: "Balloons, marker" },
            { name: "Stamp-the-Name Trail", description: "Stamp out a trail of number names from 1 to 50 using alphabet stamps.", materials: "Alphabet stamps, ink pad" },
            { name: "Number Name Dominoes", description: "One side has the numeral, the other the name. Children match and build a chain.", materials: "Domino cards" }
          ]
        } 
      },
      { 
        volume: 2, 
        topics: { 
          "Missing Numbers (1 to 50)": [
            { name: "Number Train with Gaps", description: "Create a train of numbers from 1–50 with some missing. Children fill the missing numbers using number cards.", materials: "Number strip, number cards" },
            { name: "Clay Number Fill", description: "Roll clay into small balls. Use a worksheet with number gaps. Children shape missing numbers with clay and place them correctly.", materials: "Clay, worksheet" },
            { name: "Bead Line Gap Fill", description: "Thread beads for a number line (1–10, 11–20, etc.). Skip beads for missing numbers. Kids identify and say them.", materials: "Thread, beads" },
            { name: "Hop & Say Numbers", description: "Write a number line on the floor with chalk or tape. Leave gaps. Kids hop and shout the missing numbers.", materials: "Floor tape or chalk" },
            { name: "Clothespin Match", description: "Hang numbers with clothespins, but leave some gaps. Children find missing number cards and clip them on.", materials: "String, clothespins, number cards" },
            { name: "Button Ladder Climb", description: "Create a number ladder with missing steps. Kids use buttons as placeholders for missing numbers.", materials: "Paper ladder chart, buttons" },
            { name: "Spoon Number Hunt", description: "Write numbers on spoons and hide some. Children arrange spoons in order and fill in the missing ones.", materials: "Spoons, number stickers" },
            { name: "Puzzle Piece Numbers", description: "Cut number puzzles with one piece missing. Kids complete the puzzles by finding and placing the missing number.", materials: "Puzzle cards" },
            { name: "Draw the Number", description: "Children are given sheets with missing numbers in a number line. They write the correct numbers using crayons.", materials: "Worksheets, crayons" },
            { name: "Fill the Balloons", description: "Balloon shapes with numbers like 21, __, 23. Kids draw the missing number inside.", materials: "Worksheets or drawing sheets" },
            { name: "Number Step Race", description: "Place numbers on stairs (real or cardboard steps), skipping some. Kids place the missing numbers while stepping.", materials: "Steps, number cards" },
            { name: "Paper Strip Race", description: "Number strips with gaps. Children are timed to fill in missing numbers using number cutouts.", materials: "Paper strips, number cutouts" },
            { name: "Missing Number Necklace", description: "String together number beads or number cutouts, leaving blanks. Kids add correct beads to complete.", materials: "Thread, number beads" },
            { name: "Stick & Say", description: "Children receive a worksheet with missing numbers and stick pre-cut numbers in the correct blanks.", materials: "Stickers or cutouts" },
            { name: "Button Path Count", description: "Create a path of 1–50 numbers with a few gaps. Children walk on the path and say the missing numbers aloud.", materials: "Number path, buttons" },
            { name: "Paint the Number", description: "Give worksheets where missing numbers must be painted with fingertips or brush.", materials: "Paints, worksheet" },
            { name: "Number Toss Fill", description: "Toss a soft ball at a board showing a sequence with a missing number. Child gives the missing number aloud.", materials: "Soft ball, number board" },
            { name: "Number Basket Match", description: "Three baskets show sequences like 10, __, 12. Children pick the correct number card and place it in the basket.", materials: "Baskets, number cards" },
            { name: "Chalkboard Fill-In", description: "Teacher writes number lines on the board with blanks. Children come one by one to fill in the missing numbers.", materials: "Chalkboard" },
            { name: "Number Pinwheel", description: "A rotating pinwheel with numbers and blanks. Kids spin and say the number that's missing in that section.", materials: "DIY paper pinwheel" },
            { name: "Paper Chain Skip Fix", description: "Make paper chains of numbers with some numbers missing. Children complete the chain.", materials: "Paper strips, glue" },
            { name: "Button Bridge Builder", description: "Lay number strips like a bridge. Leave blanks. Kids use buttons with numbers written to fill in missing pieces.", materials: "Buttons, number strips" },
            { name: "Group Count & Call", description: "In circle time, children count aloud from 1–50. Teacher skips a number. Children spot and say the missing number together.", materials: "No materials" },
            { name: "Match Me Chart", description: "Use a 1–50 number chart with missing numbers. Children match and stick missing numbers on it.", materials: "Number chart, stickers" },
            { name: "Trace & Fill", description: "Give tracing worksheets where some numbers are missing from the number line. Children trace and fill in the missing ones.", materials: "Worksheets, pencils" },
            { name: "Playdough Number Pokes", description: "Press number dots into playdough strips (e.g., 31, __, 33). Children poke holes to mark and say the missing number.", materials: "Playdough" },
            { name: "Flashcard Ladder", description: "Arrange 1–50 number cards like a ladder on the wall or floor. Remove random numbers and ask children to complete the sequence.", materials: "Flashcards" },
            { name: "Missing Number Song", description: "Sing a number song from 1–50, skipping a few numbers. Children shout the missing number aloud when you stop.", materials: "Bluetooth speaker" },
            { name: "Fix the Number Rope", description: "Attach number cards on a rope with clothespins. Leave out 2–3. Kids find and pin the missing numbers.", materials: "Rope, number cards, clothespins" },
            { name: "Number Puzzle Tray", description: "Provide trays with missing number templates. Children place wooden or paper numbers to complete the sequence.", materials: "Trays, number pieces" }
          ],
          "Before and After Numbers (1–50)": [
            { name: "Clay Number Neighbours", description: "Roll clay balls and write a number on each. Children place two new clay balls to show the numbers before and after the center number.", materials: "Clay, number slips" },
            { name: "Missing Middle Game", description: "Show numbers like '4, __, 6'. Children fill in the number that comes before or after. Reverse the sequence too.", materials: "Worksheet or cards" },
            { name: "Button Line Fill", description: "Create a button number line on a string with a missing button. Kids find what number should go before or after.", materials: "Buttons, thread, number tags" },
            { name: "Spoon Number Circle", description: "Arrange spoons in a circle with numbers. Leave one spoon blank. Children find and fill in the before or after number.", materials: "Spoons, number stickers" },
            { name: "Clothespin Number Fix", description: "Hang numbers in a line on a rope. Leave one space blank for either before or after. Children pin the correct number.", materials: "Rope, clothespins, number cards" },
            { name: "Crayon Slide Activity", description: "Children slide crayons into numbered pockets with missing before or after numbers.", materials: "Paper pockets, crayons" },
            { name: "Before and After Puzzle", description: "Cut puzzles with one number and blanks before and after. Children complete the puzzles by inserting missing numbers.", materials: "Puzzle templates" },
            { name: "Step & Say", description: "Number steps are placed on the floor. Call out a number. Child steps on the correct number, then says what comes before and after.", materials: "Number floor markers" },
            { name: "My Number Family", description: "Children draw a number in the center and then write/draw the number before and after like a 'number family.'", materials: "Paper, crayons" },
            { name: "Spoon Riddle Time", description: "Teacher says, 'I come after 14. Who am I?' or 'Who comes before 12?' Kids answer by holding up the correct spoon.", materials: "Spoons with numbers" },
            { name: "Bead Sequence Race", description: "Beads numbered 1–50 are placed randomly. Children race to find a number and place the beads showing what comes before and after.", materials: "Numbered beads" },
            { name: "Chalk the Number", description: "Teacher writes a number on the board. Children come and write what comes before and after on either side.", materials: "Chalkboard" },
            { name: "Paper Ladder Fix", description: "Create a paper ladder missing the middle or edge number. Children complete each ladder with the correct before/after number.", materials: "Paper ladders, number cutouts" },
            { name: "Draw the Neighbours", description: "Children draw any number and then draw pictures representing before and after (e.g., number 5, draw 4 apples before and 6 apples after).", materials: "Drawing paper" },
            { name: "Match & Stick", description: "Matching worksheet with numbers and blanks. Kids find matching 'before' or 'after' numbers and stick them in place.", materials: "Worksheet, stickers" },
            { name: "Flashcard Fill-In", description: "Show number flashcards with missing 'before' or 'after' numbers. Kids shout the answer or write it on slates.", materials: "Flashcards" },
            { name: "Musical Numbers", description: "Play number songs. Stop the music and show a number. Kids must say the number before or after.", materials: "Bluetooth speaker" },
            { name: "Button Chain Build", description: "Make a button chain by placing numbers in sequence. Remove one in the middle. Kids identify which one is missing before/after.", materials: "Buttons with numbers" },
            { name: "Clap & Say", description: "Say a number aloud. Kids clap once for before, twice for after. They say the correct number after each clap.", materials: "No materials" },
            { name: "Ice Cream Stick Order", description: "Write numbers on ice cream sticks. Mix them up and ask children to arrange them with correct before/after relationships.", materials: "Ice cream sticks" },
            { name: "Ribbon Number Train", description: "Attach numbers with clothespins on a ribbon. Leave one missing. Kids complete the train with the correct number.", materials: "Ribbon, number tags" },
            { name: "What Comes Next Race", description: "Create teams. Call out a number. First child to give both before and after correctly wins a point for the team.", materials: "No materials" },
            { name: "Matching Mittens", description: "Make mittens with numbers. One mitten shows a number; others show before or after. Kids match the correct pairs.", materials: "Paper mittens" },
            { name: "Stick the Number", description: "Provide a worksheet with boxes. Center box has a number. Kids stick the numbers before and after in the side boxes.", materials: "Worksheet, number stickers" },
            { name: "Paint the Missing Number", description: "Paint activity where kids paint in the missing number in a sequence (e.g., 17, __, 19).", materials: "Paints, worksheets" },
            { name: "Tap the Number", description: "Teacher says 'What comes before 30?' Children tap the correct number card placed on the floor.", materials: "Number cards" },
            { name: "Match Me Cards", description: "Cards show numbers like 25 with two empty circles—children draw or match number 24 and 26 beside it.", materials: "Number cards" },
            { name: "Dice & Say", description: "Roll a dice to get a number. Say what comes before and after it. Use two dice for higher numbers.", materials: "Dice" },
            { name: "Before–After Spin Wheel", description: "Spin a wheel showing numbers. The child must say what comes before and after the number it lands on.", materials: "DIY spin wheel" },
            { name: "Guess Who Comes", description: "Teacher describes a number: 'I come just before 41,' and child answers '40.' Reverse for after.", materials: "No materials" }
          ],
          "Between Numbers (1–50)": [
            { name: "Clay Sandwich Numbers", description: "Children use clay to make three number blocks—two given (e.g., 11 and 13) and shape the number that comes between (12) as the 'filling.'", materials: "Clay, number flashcards" },
            { name: "Spoon Number Sandwich", description: "Place two spoons with numbers (like 17 and 19). Ask children to place the correct number spoon (18) in between.", materials: "Spoons, number stickers" },
            { name: "Missing Middle Number", description: "Worksheets show sets like 31–__–33. Children fill in the missing middle number.", materials: "Worksheets, crayons" },
            { name: "Button Number Match", description: "Children match three buttons with correct order (e.g., 40, 41, 42) and identify the middle number.", materials: "Numbered buttons" },
            { name: "Walk the Line", description: "Lay out number flashcards from 1–50 in a long line. Teacher removes one middle card. Children identify the number that was in between.", materials: "Floor number cards" },
            { name: "Paper Strip Puzzle", description: "Prepare paper strips showing three-number patterns with the middle number missing. Kids paste the correct number.", materials: "Strips, number cutouts" },
            { name: "Number Necklace Fix", description: "Create a number necklace with three slots: first, missing middle, and last. Children thread the correct number bead in the middle.", materials: "Thread, beads" },
            { name: "Between Number Bingo", description: "Teacher calls out two numbers. Children find and mark the number that comes between them on their bingo sheets.", materials: "Bingo sheets, buttons" },
            { name: "Rainbow Number Bridge", description: "Children draw a rainbow with 3 clouds labeled with numbers. Fill in the cloud in the middle.", materials: "Drawing sheets, crayons" },
            { name: "Puppet Show Count", description: "Puppet says two numbers and asks: 'Who is between us?' Kids shout the answer (e.g., 'Puppet 6 and Puppet 8 — child says 7').", materials: "Puppets" },
            { name: "Between Number Ladder", description: "Use a ladder drawing with three number steps. Kids fill the middle rung.", materials: "Ladder chart, number cutouts" },
            { name: "Count and Clap", description: "Teacher says a number series aloud with a pause in the middle (e.g., '12... ___...14'). Children clap and say the missing number.", materials: "No materials" },
            { name: "Sticky Number Board", description: "Stick two number flashcards on a board. Kids place sticky note with correct between number.", materials: "Sticky notes, flashcards" },
            { name: "Balloon Number Fill", description: "Draw 3 balloons in a row, label the first and last with numbers. Kids write the number between in the middle balloon.", materials: "Worksheets" },
            { name: "Dice Between Game", description: "Roll two dice to make two numbers. Children say what number comes between them (if possible).", materials: "Dice" },
            { name: "Step Jump Between", description: "Teacher places two number cards on the floor. Kids jump and land between them, calling out the correct number.", materials: "Number cards" },
            { name: "Number Sandwich Craft", description: "Craft a paper sandwich with top and bottom slices labeled with numbers. Middle layer is filled with the number between.", materials: "Paper cutouts, crayons" },
            { name: "Paint the Middle", description: "Children get 3-box worksheets with two side boxes filled (e.g., 5 and 7). They paint the number between in the center.", materials: "Paints, worksheets" },
            { name: "Number Chain Build", description: "Create number chains with three rings—first and last numbers given. Kids make and add the middle number ring.", materials: "Paper strips" },
            { name: "Between Number Hunt", description: "Hide 3-card sets with one card missing the middle number. Children find the correct card and complete the set.", materials: "Number cards" },
            { name: "Chalk & Fill", description: "Draw 3-number patterns on the floor with chalk. Leave the middle number blank. Kids fill it in with chalk.", materials: "Chalk, floor" },
            { name: "Thread the Middle", description: "Use thread and straws with numbers written. Leave out the middle number. Kids identify and thread the correct straw.", materials: "Thread, straws" },
            { name: "Number Family Picture", description: "Children draw a 'number family' where the child is the number between two parent numbers.", materials: "Paper, crayons" },
            { name: "Sound Out Series", description: "Teacher chants number series like '36… ___…38,' children complete the chant aloud.", materials: "No materials" },
            { name: "Paint Dot Number Fill", description: "Children use dot painting to color the missing middle number between two numbers.", materials: "Dot paint pens, paper" },
            { name: "Chart Board Challenge", description: "Use a number chart 1–50. Teacher points to 21 and 23. Kids come up and point to 22.", materials: "Number chart" },
            { name: "Magic Number Cloze", description: "Tell a short story: 'I saw number 10 walking with number 12. Who was between them?' Kids respond with '11.'", materials: "No materials" },
            { name: "Button Sandwich Table", description: "Place buttons on a 3-column mat. Kids place the correct button in the center column.", materials: "Buttons, mats" },
            { name: "Musical Numbers", description: "Play music. When paused, teacher shows two numbers. Children rush to say the number in between.", materials: "Music player" },
            { name: "Show Me the Middle!", description: "Teacher holds two number cards high. Kids hold up their own card with the correct in-between number (made earlier from paper).", materials: "Number cards" }
          ],
          "Counting Forward & Backward (1–50)": [
            { name: "Clay Steps Count", description: "Make stepping stones from clay with numbers. Child steps on each and counts forward or backward aloud.", materials: "Clay, number tags" },
            { name: "Number Spoon Trail", description: "Arrange numbered spoons in order. Remove a few. Children reorder the spoons forward or backward.", materials: "Spoons, number stickers" },
            { name: "Button Snake Count", description: "Thread buttons labeled 1 to 10 (or more). Children slide their fingers along the buttons, counting forward or backward.", materials: "Thread, numbered buttons" },
            { name: "Clapping Count Game", description: "Teacher claps a rhythm and calls out a starting number. Children count forward or backward from that number in chorus.", materials: "No materials" },
            { name: "Paper Strip Count Race", description: "Use paper strips with numbers forward/backward. Leave blanks in between. Kids race to fill in missing numbers.", materials: "Strips, number cutouts" },
            { name: "Spoon Jump Game", description: "Place spoons on the floor with numbers. Children jump from one to the next, counting forward or backward as they land.", materials: "Spoons" },
            { name: "Musical Count Walk", description: "Play music. Children walk in a circle while counting forward. When music stops, reverse direction and count backward.", materials: "Bluetooth speaker" },
            { name: "Ladder of Numbers", description: "Create a floor or wall ladder of numbers. Children climb up while counting forward and climb down counting backward.", materials: "Paper ladder or stairs" },
            { name: "Forward & Backward Wheel", description: "Spin a wheel that says 'forward' or 'backward.' Children count 10 numbers in that direction from a given number.", materials: "DIY spin wheel" },
            { name: "Number Bead Train", description: "Beads are numbered and arranged on a string. Child counts them aloud forward and backward.", materials: "Beads, string" },
            { name: "Paper Cup Stack Count", description: "Stack paper cups labeled with numbers. Children count up as they stack and count backward as they unstack.", materials: "Paper cups" },
            { name: "Count & Stick Chart", description: "Give a blank number chart. Kids stick number stickers or cutouts in forward or backward order.", materials: "Chart, stickers" },
            { name: "Backward Balloon Pop", description: "Teacher says a number. Children pop (pretend) balloons backward from that number (e.g., 10–1).", materials: "No materials" },
            { name: "Paint the Path", description: "Children use paint or crayons to fill in a path of numbers in order, either forward or backward.", materials: "Paints, number path sheets" },
            { name: "Button Countdown Tray", description: "10 buttons on a tray. Remove one by one and count backward. Can be done for higher numbers too.", materials: "Tray, buttons" },
            { name: "Pocket Chart Race", description: "Number pockets are arranged randomly. Kids come and insert numbers forward or backward in the correct sequence.", materials: "Pocket chart, number cards" },
            { name: "Spoon Flash Count", description: "Flash two spoon numbers and ask kids to count from one to the other – forward or backward.", materials: "Spoons with numbers" },
            { name: "Finger Count Chain", description: "Children sit in a circle. One starts counting forward or backward and passes it to the next child.", materials: "No materials" },
            { name: "Count the Steps", description: "Kids count steps while going up (forward) or down (backward) classroom stairs or paper steps.", materials: "Real or paper steps" },
            { name: "Count & Drop Game", description: "Drop pebbles or beads into a jar while counting forward. Then remove and count backward.", materials: "Beads, jar" },
            { name: "Paint Dot Numbers", description: "Use dot paint to count numbers on a sheet in order. Children do it forward or backward depending on instructions.", materials: "Dot paint, worksheet" },
            { name: "Sock Puppet Countdown", description: "Sock puppet counts aloud with the children from 10–1 (or any given number). Great for transitions.", materials: "Sock puppet" },
            { name: "Count and Clap Relay", description: "Teams race to clap numbers forward or backward one by one in sequence.", materials: "No materials" },
            { name: "Number Puzzle Path", description: "Puzzle path with missing numbers. Kids fill in forward or backward to complete the number road.", materials: "Puzzle strips" },
            { name: "Shape & Count Game", description: "Draw shapes with number points. Kids follow and count forward or backward as they connect the dots.", materials: "Worksheets, crayons" },
            { name: "Backward Button Ladder", description: "Buttons on a ladder from 10–1. Kids place buttons in reverse order while saying numbers aloud.", materials: "Paper ladder, buttons" },
            { name: "Forward & Backward Song", description: "Use number songs: e.g., 'Let's count to 20…', '10 little monkeys jumping on the bed…' (backward).", materials: "Bluetooth speaker" },
            { name: "Number Story Time", description: "Teacher tells a story: 'Birds flew from 1 to 10' or 'Apples fell from 10 to 1.' Kids act and count with story.", materials: "No materials" },
            { name: "Count to Clap Board", description: "Teacher writes a number. Children clap as they count from that number forward or backward to a target number.", materials: "Whiteboard" },
            { name: "Number Rocket Blastoff", description: "Children crouch down and count backward from 10 to 1 — then jump like a rocket. Use for transitions or PE warm-up.", materials: "No materials" }
          ],
          "Addition Activities": [
            { name: "Clay Number Balls", description: "Children make clay balls to show two numbers (e.g., 3 and 2). They then combine and count the total clay balls.", materials: "Clay" },
            { name: "Spoon Addition Game", description: "Write numbers on spoons. A child picks any two and adds the numbers together using fingers or by counting objects.", materials: "Spoons, number stickers" },
            { name: "Button Bowl Add", description: "Children are given 2 bowls with buttons (e.g., 4 in one and 3 in another). They count and add buttons together.", materials: "Buttons, bowls" },
            { name: "Handprint Addition", description: "Children dip their fingers in paint to represent numbers (e.g., 2 red fingers + 3 blue fingers). They count all colored fingers.", materials: "Paint, paper" },
            { name: "Dot Card Addition", description: "Show dot cards (like dice faces) with two groups. Children count total dots and say the sum.", materials: "Dot flashcards" },
            { name: "Ladder of Addition", description: "A paper or wall ladder with a simple sum on each step (e.g., Step 1: 1+1, Step 2: 2+1). Children climb by solving each.", materials: "Chart paper ladder" },
            { name: "Match & Stick Sum", description: "Children match number cards with the correct sum and stick them on a board/chart.", materials: "Number cards, board/chart, glue" },
            { name: "Pebble Add Game", description: "Use pebbles to form two groups and ask children to count all pebbles to get the total.", materials: "Pebbles" },
            { name: "Paper Strip Add & Color", description: "Paper strips with simple addition problems; children solve and color them using crayons.", materials: "Strips, crayons" },
            { name: "Button Flower Petals", description: "Draw flowers on paper. Place different numbers of buttons on each petal, then add total buttons per flower.", materials: "Paper, buttons, crayons" },
            { name: "Add & Hop", description: "Number cards are placed on the floor. A child jumps from one number to another and says the sum. E.g., jumps on 2 and 3, then says '2 + 3 = 5'.", materials: "Floor number cards" },
            { name: "Bowl Toss Add", description: "Children toss buttons into two separate bowls. They count how many landed in each bowl and add the numbers together.", materials: "Buttons, bowls" },
            { name: "Spoon Puppet Add Story", description: "Using spoons as puppets, the teacher narrates addition stories (e.g., Puppet A has 2 apples, Puppet B gives 3 more). Kids solve.", materials: "Spoons, paper faces" },
            { name: "Dot Sticker Add", description: "Children use dot stickers to form two groups (e.g., 4 red dots and 2 blue dots). They count all stickers and write the total.", materials: "Dot stickers, worksheet" },
            { name: "Paint to Add", description: "Children make paint stamp prints in two different colors (e.g., 3 red and 2 yellow). Then count the total prints and write the sum.", materials: "Paints, paper" },
            { name: "Number Line Jump", description: "Teacher creates a number line (1–20). Children jump forward the number of steps shown by 2 flashcards (e.g., start at 0, jump 3, then 2 more).", materials: "Number line mat or chart" },
            { name: "Balloon Pop Add", description: "Draw balloons on a chart with numbers inside (e.g., 4 and 5). Children pretend to pop them and shout the sum.", materials: "Balloon chart" },
            { name: "Stick Addition Chart", description: "Children use craft sticks to represent numbers, group them, and then count the total. For example: 3 sticks + 2 sticks = 5 sticks.", materials: "Craft sticks" },
            { name: "Fruit Add Game", description: "Use cutouts of paper fruits (e.g., apples, bananas). Create two groups and have children count total fruits.", materials: "Paper fruit cutouts" },
            { name: "Bead Slide Add", description: "Beads of two colors are threaded onto a string (e.g., 3 red + 2 green). Children slide and count the total.", materials: "Thread, beads" },
            { name: "Crayon Add Train", description: "Draw a train with 3–5 cars on paper. Put numbers in two cars and ask children to write the sum in the third car.", materials: "Paper, crayons" },
            { name: "Puzzle Addition", description: "Provide puzzle pieces where one side shows a sum (e.g., 2 + 4) and another side shows the total. Children match correctly.", materials: "Puzzle cards" },
            { name: "Ice Cream Scoop Add", description: "Children stack paper scoops labeled with numbers onto a cone. They add the numbers and write the sum.", materials: "Paper cones, scoop cutouts" },
            { name: "Add with Stickers", description: "Children stick 2 groups of stickers on paper and add them up. E.g., 5 star stickers + 3 heart stickers.", materials: "Stickers, paper" },
            { name: "Add & Paint Fingers", description: "Children use finger painting to press a number of prints from each hand, then count and write the sum.", materials: "Paint, paper" },
            { name: "Straw Add Counting", description: "Children group straws to show numbers and combine to find the sum (e.g., 4 red + 2 green = 6 total).", materials: "Straws" },
            { name: "Thread Add Count", description: "Thread two sets of beads on a string. Count total beads after adding both sets.", materials: "Beads, string" },
            { name: "Crayon Box Add", description: "Children place different numbers of crayons in two boxes. They count how many in total.", materials: "Crayons, boxes" },
            { name: "Addition Walk & Count", description: "Call out two numbers. Child walks that many steps (e.g., 3 + 2 = 5 steps). Say the sum aloud at the end.", materials: "No materials needed" },
            { name: "Draw & Add Game", description: "Children draw 2 groups of objects (e.g., 4 stars + 2 hearts), count total and write the sum.", materials: "Drawing sheets, crayons" },
            { name: "Addition Puzzle Grid", description: "Create a worksheet with sums and a grid. Children solve problems and color the matching answer in the grid.", materials: "Worksheet, crayons" },
            { name: "Clay Apple Add", description: "Children make clay apples and place them on 2 trees (e.g., 3 + 4). Count total apples and write the sum.", materials: "Clay, tree cutout sheets" },
            { name: "Bowl Color Sort Add", description: "Place buttons of 2 colors in a bowl (e.g., 5 red, 2 blue). Count all and write the total.", materials: "Buttons" },
            { name: "Dice Addition Roll", description: "Children roll 2 dice and count total dots to solve addition.", materials: "Dice" },
            { name: "Snap & Add Cards", description: "Turn 2 number cards. Children add the two numbers and give the correct total.", materials: "Number cards" },
            { name: "Egg Carton Add Game", description: "Drop 2 beads into different egg carton holes. Add the numbers written on the holes.", materials: "Egg carton, beads, number labels" },
            { name: "Add & Cover", description: "Provide worksheets with sums and answer circles. Children place clay bits over the correct answer.", materials: "Worksheets, clay balls" },
            { name: "Crayon Count Add", description: "Place a set number of crayons in 2 separate cups. Child counts and adds to find total.", materials: "Crayons, cups" },
            { name: "Puppet Add Drama", description: "Use puppets to act out addition stories (e.g., 3 children came to school, 2 more joined). Children say the total.", materials: "Puppets or paper cutouts" },
            { name: "Garden Add Game", description: "Draw two rows of flowers (e.g., 4 in one, 5 in another). Children count all flowers to find the total.", materials: "Paper, crayons, flower cutouts" }
          ],
          "Subtraction Activities": [
            { name: "Button Take Away", description: "Place a specific number of buttons (e.g., 6) in front of each child. Ask them to remove a certain number (e.g., 2), then count how many are left. Guide them to say the sentence: '6 take away 2 equals 4.'", materials: "Buttons" },
            { name: "Clay Ball Smash", description: "Children roll small clay balls (e.g., 5), then smash a specific number (e.g., 2) using fingers. They count the remaining ones and say the subtraction sentence.", materials: "Clay" },
            { name: "Spoon Subtract Game", description: "Write numbers (1–10) on spoons. Place a set number of spoons (e.g., 7), ask the child to remove some (e.g., 3), then count what's left.", materials: "Spoons, number stickers" },
            { name: "Fruit Subtraction", description: "Use paper fruit cutouts (like 8 apples). Children remove a number of them and count how many apples remain.", materials: "Paper fruit cutouts" },
            { name: "Count & Erase", description: "Provide worksheets with images (e.g., 10 stars). Child crosses out a given number (e.g., 4 stars), then counts how many stars are left and writes the subtraction.", materials: "Worksheet, crayons" },
            { name: "Bead Slide Back", description: "Use a string with 10 beads. Slide them to one side, then slide a few back (e.g., slide back 3 beads). Child counts the rest and completes the sentence.", materials: "Thread, beads" },
            { name: "Paper Strip Tear Off", description: "On a paper strip with 7 drawn flowers, child tears off 3. They count how many are left and write it. This gives a physical feeling of 'taking away.'", materials: "Paper strips, drawing materials" },
            { name: "Puppet Subtraction Stories", description: "Teacher uses two spoon puppets to narrate a story (e.g., 'I had 6 balloons, I gave away 2'). The child tells how many are left.", materials: "Spoon puppets" },
            { name: "Paint Dot Subtract", description: "Children make dot patterns using finger paint (e.g., 9 dots). After drying, they cross out or cover a few (e.g., 3) and count how many are left.", materials: "Paint, paper" },
            { name: "Sticker Take Away", description: "Children place 8 stickers on a paper. Then, they peel off 3 or cross them out. They count the remaining stickers.", materials: "Paper, stickers" },
            { name: "Clothespin Pull", description: "Clip 10 clothespins on a line. Ask the child to remove 4 and count how many are left. This strengthens motor skills too.", materials: "String, clothespins" },
            { name: "Subtraction Song Time", description: "Use songs like 'Five Little Monkeys Jumping on the Bed.' Pause after each verse to ask: 'How many are left now?'", materials: "Bluetooth speaker" },
            { name: "Subtract & Jump", description: "Write numbers 1 to 20 on the floor. Child stands on a number (e.g., 9), then jumps backward a number of times (e.g., 3) to find the answer.", materials: "Number flashcards or floor markers" },
            { name: "Crayon Subtraction", description: "Give 6 crayons to each child. Ask them to give away 2 to a friend. They count the crayons left and tell the subtraction.", materials: "Crayons" },
            { name: "Clay Cookie Subtract", description: "Make 8 small round cookies from clay. Children pretend to 'eat' (remove) 3 cookies and count what's left on the plate.", materials: "Clay" },
            { name: "Bowl Drop Subtraction", description: "Children drop 10 small beads into a bowl. Then take out 4 beads. They count the remaining beads inside the bowl.", materials: "Bowl, beads" },
            { name: "Picture Subtract & Tell", description: "Give a worksheet with pictures (e.g., 7 birds on a branch). Child crosses out the ones that flew away and tells how many stayed.", materials: "Worksheet, crayons" },
            { name: "Ice Cream Scoop Subtract", description: "Children make 5 scoops of paper ice cream on a cone. Teacher says 2 melted. Child removes scoops and counts how many are left.", materials: "Paper scoops" },
            { name: "Egg Carton Subtract", description: "Fill egg carton spaces with 10 clay balls. Child removes 3. They count the leftover balls in the egg carton.", materials: "Egg carton, clay" },
            { name: "Garden Flower Pull", description: "Create a paper garden of 6 flowers. Tell a story: '3 flowers were picked.' Child removes the flower cutouts and counts what remains.", materials: "Flower cutouts, garden mat" },
            { name: "Spoon Puppet Story Subtract", description: "Use 2 spoon puppets: one puppet gives a number (e.g., 'I had 9 balls'), and the second says, 'You lost 4 balls!' Children then act out by removing 4 buttons and count what's left.", materials: "Spoons, number cutouts, buttons" },
            { name: "Finger Fold Subtract", description: "Use fingers to show numbers. For example, show 8 fingers, fold down 3. Count how many fingers are still up.", materials: "No materials" },
            { name: "Balloon Burst Count", description: "Draw 10 balloons on a paper. Say '2 balloons popped!' Children cross out 2 balloons and count the rest.", materials: "Worksheet, crayons" },
            { name: "Dot Marker Subtract", description: "Make 10 dot stamps, then ask children to blot out (e.g., 3) dots with a different color, then count what's left.", materials: "Dot markers" },
            { name: "Backward Bead Count", description: "Slide 10 beads on a thread. Ask children to push back (e.g., 4) beads to one side. Count the remaining beads on the other side.", materials: "Thread, beads" },
            { name: "Crayon Box Take Away", description: "Provide 2 small crayon boxes, each with 10 crayons. Ask kids to take out (e.g., 5) and see what remains.", materials: "Crayons, boxes" },
            { name: "Cloth Subtraction Tag", description: "Hang 10 cloth/fabric pieces on a line. Ask children to remove a few and count what remains.", materials: "String, small cloth pieces" },
            { name: "Subtract with Buttons on Plate", description: "Put 7 buttons on a paper plate. Ask, 'If 3 rolled off, how many are still on the plate?' Count remaining.", materials: "Paper plate, buttons" },
            { name: "Spoon Toss Subtract", description: "Toss 10 spoons into a circle. Ask the child to remove (e.g., 3) from the circle and count what's left.", materials: "Spoons" },
            { name: "Subtraction Tug of War", description: "Two children each hold one end of a thread with 10 beads in the center. One child 'takes away' 3. The second counts how many beads they now have.", materials: "Thread, beads" },
            { name: "Spin & Subtract", description: "Create a spinner (1–5). Children spin twice and subtract the second number from the first. Use clay balls or buttons to show it.", materials: "Spinner, clay/buttons" },
            { name: "Story Card Subtraction", description: "Read picture cards with a subtraction story (e.g., 'There were 6 frogs. 2 jumped away!'). Kids show the action with their hands and answer.", materials: "Story cards or handmade drawing cards" },
            { name: "Leaf Count Subtract", description: "Stick 8 leaves on a tree drawing. Ask kids to remove (peel off) 3 leaves and count what's left on the tree.", materials: "Tree chart, leaf cutouts" },
            { name: "Hide & Subtract Game", description: "Place 10 buttons. Hide a few under a cup. Ask kids: 'How many are hidden?' They subtract the visible from 10.", materials: "Buttons, cup" },
            { name: "Subtraction Bridge Jump", description: "Make a paper 'bridge' with numbers from 1–10. Place child on number 7, ask to jump back 3 steps. They land on 4 and say: '7 minus 3 is 4.'", materials: "Floor number chart" },
            { name: "Paint & Wipe Subtract", description: "Paint 6 dots on a laminated card. Use a wet tissue to wipe off (e.g., 2) dots. Count the rest.", materials: "Paint, laminated sheet, tissue" },
            { name: "Subtract with Ice Cream Scoops", description: "Stack 5 paper scoops on a cone. '2 melted!' – remove them and count what remains. Write subtraction.", materials: "Paper scoops" },
            { name: "Chalkboard Cross-Out", description: "Draw 10 stars on the board. Ask child to cross out a number (e.g., 6). Count what remains.", materials: "Chalk, blackboard" },
            { name: "Subtraction Finger Puppet", description: "Each child wears number puppets on fingers (e.g., 6 fingers). Fold 2 down. How many puppets remain? Count and write it.", materials: "Paper finger puppets" },
            { name: "Clay Duck Pond Game", description: "Make 10 clay ducks in a pond (drawn). Say '3 ducks swam away!' Children remove 3 ducks and count what's left.", materials: "Clay, pond drawing" }
          ],
          "Greater, Lesser, Equal Activities": [
            { name: "Clay Number Compare", description: "Children form two sets of clay balls (e.g., 3 and 5). They count and say which is greater, lesser, or if both are equal.", materials: "Clay" },
            { name: "Button Count Match", description: "Provide two bowls with different button quantities. Children count and say which bowl has more or fewer buttons.", materials: "Buttons, bowls" },
            { name: "Spoon Number Compare", description: "Numbered spoons (1–10) are laid out. Children pick two and compare: Which number is greater or lesser?", materials: "Spoons, number stickers" },
            { name: "Paper Dot Compare", description: "Draw two groups of dots on paper (e.g., 6 and 4). Children count and compare using <, >, or =.", materials: "Paper, crayons" },
            { name: "Number Flashcard Showdown", description: "Two children pick one number flashcard each. The one with the higher number wins. The class says the comparison aloud.", materials: "Number flashcards" },
            { name: "Thread Bead Compare", description: "Children string beads on two threads (e.g., 5 beads vs. 3 beads) and compare which thread has more.", materials: "Thread, beads" },
            { name: "Vegetable Count Compare", description: "Provide paper cutouts of vegetables in two piles (e.g., 4 carrots and 6 potatoes). Children count and compare.", materials: "Paper vegetables" },
            { name: "Crayon Box Compare", description: "Place crayons in two boxes (e.g., 7 in one, 9 in the other). Children open, count, and compare which box has more or less.", materials: "Crayons, boxes" },
            { name: "Jump Compare", description: "Call two children to jump a certain number of times (e.g., 3 and 5). Then ask: 'Who jumped more? Who jumped less?'", materials: "No materials" },
            { name: "Pebble Plate Compare", description: "Put pebbles on two plates (e.g., 4 vs. 4). Children count and place a paper symbol: >, <, or =.", materials: "Pebbles, paper plates" },
            { name: "Chart Paper Arrow Match", description: "On a chart, children match numbers using arrows showing greater or lesser. (E.g., 2 → 5 means 5 is greater.)", materials: "Chart paper, number cutouts" },
            { name: "Finger Show Compare", description: "Two children hold up fingers (e.g., 4 and 7). Others say who is showing more or less.", materials: "No materials" },
            { name: "Cup Stack Compare", description: "Stack paper cups labeled with numbers (e.g., stack of 3 vs. stack of 6). Children compare stack height and numbers.", materials: "Paper cups, number cards" },
            { name: "Paint Dot Compare", description: "Children stamp paint dots in two sections on paper. Then count each side and decide which is greater or lesser.", materials: "Paint, paper" },
            { name: "Clothespin Count Compare", description: "Clip clothespins to two separate strings (e.g., 8 and 5). Children count and compare totals.", materials: "Clothespins, string" },
            { name: "Vegetable Basket Compare", description: "Use paper baskets filled with different paper vegetables. Children count items in each and compare which basket has more or less.", materials: "Paper baskets, paper vegetables" },
            { name: "Sticker Row Compare", description: "Children stick stickers in two rows (e.g., 6 stars and 6 hearts). They compare row length to decide if they are equal or different.", materials: "Stickers, paper" },
            { name: "Box Fill Compare", description: "Fill two boxes with clay balls (e.g., 6 in each). Ask if the number of balls is equal or if one has more.", materials: "Clay, boxes" },
            { name: "Number Toss Compare", description: "Children roll two dice or toss two number cards. Then compare the numbers: greater, lesser, or equal.", materials: "Dice or number cards" },
            { name: "Touch & Guess Insect Bag", description: "Place paper insect cutouts in a bag. Children touch and guess the insect based on shape.", materials: "Paper cutouts, cloth bag" },
            { name: "Fly Swatter Numbers", description: "Stick insect images with numbers on the wall. Call out a number; kids swat the matching bug.", materials: "Paper insects, numbers, stick/spoon" },
            { name: "Button Beetle Count", description: "Draw beetles with empty spots. Children place correct number of buttons as spots.", materials: "Buttons, paper beetles" },
            { name: "Spider Ring Toss", description: "Create paper spiders and throw clay rings around them to 'catch' them.", materials: "Clay rings, paper spiders" },
            { name: "Insect Walk Parade", description: "Children walk like different insects—crawl like ants, hop like grasshoppers, flap like butterflies.", materials: "None" },
            { name: "Bug Bingo", description: "Make a simple bingo card with bug pictures. Call out names; children cover matching images.", materials: "Bingo sheet, pebbles/buttons" },
            { name: "Yarn Snail Spiral", description: "Children create a snail shell spiral by coiling yarn or string on a drawn snail.", materials: "Paper, yarn/thread" },
            { name: "Insect Shadow Match", description: "Match insect shapes to their shadows drawn on paper.", materials: "Paper with shapes" },
            { name: "Beetle Rhyme Time", description: "Sing or recite simple insect rhymes like 'Incy Wincy Spider.' Add puppet actions.", materials: "Bluetooth speaker, puppets" },
            { name: "Ants on a Log Craft", description: "Use paper to draw logs. Children glue paper ants crawling across. Count the ants.", materials: "Paper, crayons, glue" },
            { name: "Bug Button Trails", description: "Children make trails of buttons leading to a bug (e.g., caterpillar). Practice direction words (left, right).", materials: "Buttons, paper" },
            { name: "Creepy Crawly Puzzle", description: "Cut insect pictures into 2-3 pieces. Children reassemble them.", materials: "Insect printouts" },
            { name: "Match the Legs", description: "Mix pictures of insect bodies and legs. Children match them to complete the insect.", materials: "Paper insect parts" },
            { name: "Storytime: Busy Bug World", description: "Tell a story about a day in the life of an ant or caterpillar. Children act it out.", materials: "None or puppets" },
            { name: "Leaf Bug Hunt Chart", description: "Paste dry leaves on paper. Draw small bugs crawling on them. Children count and mark how many bugs per leaf.", materials: "Leaves, paper, crayons" }
          ]
        } 
      },
      { 
        volume: 3, 
        topics: { 
          "Inside and Outside": [
            { name: "Basket Sorting", description: "Place a paper basket on the floor. Give kids small toys or buttons. They decide which ones go inside or outside the basket and say the word aloud.", materials: "Paper basket, buttons/toys" },
            { name: "Cloth Mat Walk", description: "Lay a big cloth on the floor. Children will walk inside or outside the mat when told. Add music for fun transitions.", materials: "Old cloth, Bluetooth speaker (optional)" },
            { name: "Inside-Outside Drawing", description: "Give a house or circle outline. Children paste or draw items inside or outside the shape (e.g., a cat inside a house, tree outside).", materials: "Paper, crayons, cutouts" },
            { name: "Toy House Play", description: "Use a box as a pretend house. Let kids move small toys in and out, describing them: 'Teddy is inside. Ball is outside.'", materials: "Cardboard box, toys" },
            { name: "Circle Jump Fun", description: "Draw big circles on the ground using chalk. Children will jump inside or outside the circles based on teacher instructions.", materials: "Chalk, open floor" },
            { name: "Paper Bag Surprise", description: "Place a small item inside a paper bag and one outside. Children guess and describe positions.", materials: "Paper bag, small toys" },
            { name: "Cloth Box Crawl", description: "Children crawl inside and outside a large cardboard box while chanting position words.", materials: "Cardboard box" },
            { name: "Circle Ring Toss", description: "Use rings to toss onto a bottle or stick inside or outside a drawn circle.", materials: "Rings, chalk, bottle" },
            { name: "Fruit Basket Sorting", description: "Place real or paper fruits inside or outside a drawn basket.", materials: "Cutouts or toy fruits, chart" },
            { name: "Color Inside the Shape", description: "Draw shapes and instruct children to color inside only. Then repeat with outside.", materials: "Drawing sheets, crayons" },
            { name: "Outside Line Parade", description: "Children walk in a line either inside a path or outside it.", materials: "Tape on floor" },
            { name: "Inside/Outside Roleplay", description: "Use a pretend tent (cloth fort) and ask kids to go inside or come outside.", materials: "Cloth, chairs" },
            { name: "Basket Drop", description: "Drop beads or buttons and ask: 'Did it fall inside or outside the basket?'", materials: "Basket, beads/buttons" },
            { name: "Envelope Play", description: "Put paper shapes inside and outside an envelope.", materials: "Envelopes, paper shapes" },
            { name: "Spoon Game", description: "Keep one spoon inside a cup and one outside. Children identify.", materials: "Spoons, cups" },
            { name: "Box Drawing Challenge", description: "Draw items that are only inside or outside a box outline.", materials: "Crayons, paper" },
            { name: "Hide the Button", description: "Hide a button inside or outside a napkin fold. Children guess.", materials: "Cloth, button" },
            { name: "Inside the Tunnel", description: "Create a tunnel with chairs and cloth. Kids crawl inside and back outside.", materials: "Cloth, chairs" },
            { name: "Sock It In", description: "Children throw paper balls inside or outside a sock hung like a basket.", materials: "Sock, paper balls" },
            { name: "Ball Roll Zones", description: "Roll a ball into 'inside' or 'outside' zones drawn on the floor.", materials: "Ball, chalk" }
          ],
          "Top and Bottom": [
            { name: "Block Tower Talk", description: "Stack 3-5 boxes. Ask children to identify what is on top and what is at the bottom. Then allow them to change the positions.", materials: "Blocks/boxes" },
            { name: "Top or Bottom Chart", description: "Draw a big ladder or tree. Children stick stars or pictures on either the top or bottom as instructed.", materials: "Chart, stickers/pictures" },
            { name: "Book Stack Game", description: "Pile books on a table. Ask: 'Which is on the top? Which is at the bottom?' Let children rearrange and answer again.", materials: "Books" },
            { name: "Top-Bottom Toss", description: "Place a box on the floor and one on a chair. Toss balls and ask where they landed – on top or bottom.", materials: "Boxes, balls" },
            { name: "Fruit Basket Sorting", description: "Draw a fruit basket and a tree. Ask kids to paste fruits on top of the tree and at the bottom near the basket.", materials: "Paper, fruit cutouts, glue" },
            { name: "Top Hat Stack", description: "Children stack hats or bowls and say which is on top or bottom.", materials: "Bowls/hats" },
            { name: "Flag Pole Art", description: "Draw a pole with flags and mark the top and bottom.", materials: "Drawing sheet" },
            { name: "Fruit Tower", description: "Stack fruits (real or fake) and say which is at the top.", materials: "Fruit or fruit models" },
            { name: "Pencil Cup Sort", description: "Place pencils pointing up and down. Ask what's at the bottom or top.", materials: "Pencil holder, pencils" },
            { name: "Chair Climb Comparison", description: "Show toy figures climbing a chair or box. Who is at the top?", materials: "Toy figures, box" },
            { name: "Stick Puppet Levels", description: "Stick puppets move up/down a paper ladder to show top/bottom.", materials: "Ice cream sticks, paper" },
            { name: "Water Bottles Stack", description: "Use empty bottles to stack. Ask children what's on top.", materials: "Bottles" },
            { name: "Top to Bottom Drawing", description: "Draw raindrops falling from the top to the bottom of the paper.", materials: "Crayons, paper" },
            { name: "Top/Bottom Spoon Game", description: "Put one spoon at the top and one at the bottom of a tray.", materials: "Spoons, tray" },
            { name: "Top of the Table", description: "Ask what is on top or under the table.", materials: "None" },
            { name: "Vertical Sorting Box", description: "Stick paper strips on a box: child pastes big star at top, small star at bottom.", materials: "Box, stickers" },
            { name: "Face Stack Fun", description: "Draw faces stacked vertically; label top and bottom.", materials: "Paper, crayons" },
            { name: "Cup Stack Guess", description: "Hide an item inside stacked cups—guess top or bottom cup?", materials: "Cups, small object" },
            { name: "Top of the Tree Activity", description: "Paste birds on top, animals at bottom of tree.", materials: "Tree cutout, paper animals" },
            { name: "Story Picture Column", description: "Print 3 pictures vertically and children say what's on top and bottom.", materials: "Pictures, paper" }
          ],
          "Big – Bigger – Biggest": [
            { name: "Button Sorting Fun", description: "Children sort buttons into three bowls labelled Big, Bigger, and Biggest based on size.", materials: "Assorted buttons, 3 bowls" },
            { name: "Paper Circle Sizes", description: "Give three paper circles of increasing sizes to glue in correct order.", materials: "Cut paper circles, glue" },
            { name: "Clay Ball Making", description: "Children roll 3 clay balls—small, medium, large—and label them as Big, Bigger, Biggest.", materials: "Clay" },
            { name: "Basket Fill Game", description: "Place big, bigger, and biggest toys in three baskets. Ask children to match items based on size.", materials: "Toys, baskets" },
            { name: "Leaf Hunt Outside", description: "Children collect 3 different-sized leaves from the garden or school area.", materials: "Real leaves" },
            { name: "Crayon Length Comparison", description: "Give crayons of different sizes. Ask children to place them in Big to Biggest order.", materials: "Used crayons" },
            { name: "Draw and Compare", description: "Ask children to draw 3 different-sized apples or balloons and label them Big, Bigger, Biggest.", materials: "Drawing sheet, crayons" },
            { name: "Button Tree Art", description: "Children glue big, bigger, and biggest buttons onto a paper tree art.", materials: "Buttons, paper, glue" },
            { name: "Ball Sorting Race", description: "Roll 3 different-sized balls and ask children to sort them fast by size.", materials: "Plastic balls" },
            { name: "Photo Sorting", description: "Show printed images of animals (mouse, dog, elephant). Ask which is big, bigger, or biggest.", materials: "Animal cutouts/photos" },
            { name: "Cup Stack", description: "Use paper cups of different sizes. Let children stack from smallest to biggest.", materials: "Paper cups" },
            { name: "Spoon Scoop Sorting", description: "Children use a spoon to scoop objects of varying size into size-marked bowls.", materials: "Spoon, buttons, 3 bowls" },
            { name: "Big to Biggest Puzzle", description: "Provide 3 image cards to arrange from Big to Biggest (e.g., 3 pumpkins).", materials: "Picture cards" },
            { name: "Circle Stamp Art", description: "Use caps/lids of different sizes to print big, bigger, and biggest circles.", materials: "Bottle caps, paint, paper" },
            { name: "Size Hop Game", description: "Draw 3 circle sizes on the ground. Children jump from Big to Biggest.", materials: "Chalk" },
            { name: "Size Rhyme", description: "Teach a chant: 'Big, Bigger, Biggest, what comes next?' Children shout answers.", materials: "None or speaker (optional)" },
            { name: "Fruit Drawing Size Order", description: "Draw three mangoes or bananas in increasing size order.", materials: "Drawing sheets" },
            { name: "Handprint Size Matching", description: "Use 3 handprints (sibling, friend, teacher) and compare sizes.", materials: "Paper, paint" },
            { name: "Paper Fan Comparison", description: "Fold paper fans in 3 sizes and compare them.", materials: "Paper" },
            { name: "Biggest Crown Activity", description: "Make 3 sizes of paper crowns and ask, 'Who wears the biggest one?'", materials: "Old newspaper, tape" }
          ],
          "Tall – Taller – Tallest": [
            { name: "Tower of Cups", description: "Children stack paper cups and compare: 'Which is tall?', 'Which is taller?', 'Which is tallest?'", materials: "Paper cups" },
            { name: "Clay Tree Models", description: "Make trees of three different heights using clay.", materials: "Clay" },
            { name: "Straw Building", description: "Create three straw towers and compare height.", materials: "Drinking straws, tape" },
            { name: "Box Stack Race", description: "Stack boxes and compare who makes the tallest tower.", materials: "Empty boxes" },
            { name: "Ribbon Towers", description: "Stick 3 ribbons vertically—short, medium, long—on a chart and label tall, taller, tallest.", materials: "Ribbon, glue, paper" },
            { name: "Standing Toy Line", description: "Stand 3 toys side by side and compare their height.", materials: "Toys" },
            { name: "Paper Strip Trees", description: "Stick paper strips of 3 lengths as trunks to show tall to tallest.", materials: "Colored paper" },
            { name: "Block Tower Relay", description: "Each child adds one block to their group's tower. Compare final heights.", materials: "Building blocks" },
            { name: "Plant Height Chart", description: "Compare 3 real or fake plant heights.", materials: "Potted plants or drawings" },
            { name: "Spoon Stick Flags", description: "Stick paper flags on spoons at different heights and compare.", materials: "Spoons, tape, paper" },
            { name: "Chalk Tower Drawing", description: "Draw 3 buildings with increasing heights on the floor. Children jump on the tallest one.", materials: "Chalk" },
            { name: "Height Order Photos", description: "Use class photos to compare tallest to shortest children.", materials: "Photo cutouts" },
            { name: "Cloth Strip Measurement", description: "Pin cloth strips of 3 lengths and compare.", materials: "Cloth strips, pins" },
            { name: "Stick Puppet Line-Up", description: "Make 3 puppets on sticks of different lengths.", materials: "Ice cream sticks, paper" },
            { name: "Rope Hanging Comparison", description: "Hang objects at different heights. Children identify tallest.", materials: "Rope, paper objects" },
            { name: "Cup Pyramid", description: "Make pyramids with different cup levels and compare.", materials: "Paper cups" },
            { name: "Foot Race with Height Guess", description: "Ask who's tallest before starting a mini race.", materials: "None" },
            { name: "String Planting", description: "Glue three vertical strings to show height difference.", materials: "String, glue" },
            { name: "Shape Tower Match", description: "Use big shapes to build tall towers and compare.", materials: "Paper shapes, glue" },
            { name: "Story: 'Tall Giraffe'", description: "Read or tell a story with three animals of increasing height.", materials: "None or speaker" }
          ],
          "Long – Longer – Longest": [
            { name: "Thread Length Sorting", description: "Children sort threads into Long, Longer, and Longest.", materials: "Thread or wool" },
            { name: "Paper Strip Race", description: "Children stick paper strips of 3 lengths in order.", materials: "Cut paper strips" },
            { name: "Clay Snake Lines", description: "Make 3 snakes from clay and compare length.", materials: "Clay" },
            { name: "Shoelace Stretch", description: "Stretch 3 shoelaces and measure visually.", materials: "Shoelaces or yarn" },
            { name: "Pencil Line Drawings", description: "Use different pencils to draw lines. Which pencil made the longest line?", materials: "Pencils, paper" },
            { name: "Spoon Line Activity", description: "Place spoons in a line—compare their length.", materials: "Spoons of different sizes" },
            { name: "Paper Chain Garland", description: "Create 3 paper chains of increasing lengths.", materials: "Scrap paper, glue" },
            { name: "Measuring Tape Fun", description: "Unroll tape to 3 lengths. Children observe and say 'Longest!'", materials: "Measuring tape" },
            { name: "Scarf or Cloth Stretch", description: "Lay down pieces of cloth of different lengths.", materials: "Cloth/fabric scraps" },
            { name: "String Jump Game", description: "Lay strings and ask kids to jump over the longest one.", materials: "String/wool" },
            { name: "Hand Draw Line Race", description: "Draw freehand lines on paper and compare their lengths.", materials: "Crayons, paper" },
            { name: "Ladder Drawing Activity", description: "Draw 3 ladders with increasing length steps.", materials: "Drawing sheets" },
            { name: "Animal Tail Craft", description: "Make 3 tails from ribbon or string to attach to animal cutouts.", materials: "Paper, ribbon" },
            { name: "Length Story: 'The Long Train'", description: "Tell a fun story about a short, longer, and longest train.", materials: "None or speaker" },
            { name: "Jump Rope Match", description: "Use jump ropes of varying lengths to compare.", materials: "Jump ropes or wool ropes" },
            { name: "Road Drawing Activity", description: "Children draw 3 roads of different lengths using black paper strips.", materials: "Paper" },
            { name: "Measuring with Footprints", description: "Children walk 3 paper lines with steps and compare how long each is.", materials: "Paper" },
            { name: "Wool Shape Track", description: "Use yarn to form three shapes of varying lengths and compare.", materials: "Wool/yarn" },
            { name: "Straw Length Sort", description: "Provide straws in 3 sizes. Children sort and glue them in order.", materials: "Straws, glue" },
            { name: "Ribbon Wave Dance", description: "Dance with 3 ribbons and observe which makes longer waves.", materials: "Ribbons" }
          ]
        }
      }
    ],
    evs: [
      { 
        volume: 1, 
        topics: { 
          "Healthy Habits": [
            { name: "Brushing Buddy Chart", description: "Children create a morning brushing chart with days of the week and tick it daily.", materials: "A4 sheet, crayons" },
            { name: "Button Teeth Cleaning", description: "Draw a mouth, paste buttons as teeth, and brush them with a paintbrush.", materials: "Paper, buttons, paintbrush" },
            { name: "Clay Food Plate", description: "Children make healthy food items from clay and place them on a paper plate.", materials: "Clay, paper plate" },
            { name: "Healthy or Junk? Sort It!", description: "Use mixed food cards — children sort them into healthy and junk food groups.", materials: "Food picture cards" },
            { name: "My Bath Time Steps", description: "Sequence cards for bath steps like soap, towel, water. Kids arrange them in the correct order.", materials: "Picture cards" },
            { name: "Song: 'Washy Washy Hands'", description: "Play a handwashing song and demonstrate the correct technique using actions.", materials: "Bluetooth speaker" },
            { name: "Dress Up Right Game", description: "Match seasonal clothes to weather for healthy living choices.", materials: "Clothes cutouts" },
            { name: "Spoon the Salad Relay", description: "Transfer paper salad items from one bowl to another using a spoon in a relay style.", materials: "Spoon, paper vegetables" },
            { name: "Drinking Water Tracker", description: "Children color a water drop each time they drink a glass of water during the day.", materials: "Tracker sheet, crayons" },
            { name: "Clean Me Puppet", description: "Create a puppet character who talks about bathing, brushing, and staying clean.", materials: "Scrap paper, colors" }
          ],
          "Be Good (Good Behaviour / Manners)": [
            { name: "Magic Words Song", description: "Sing a fun song using magic words like 'please,' 'sorry,' and 'thank you.'", materials: "Bluetooth speaker" },
            { name: "Kindness Chain", description: "Each time a child does a kind act, they add a paper strip to create a kindness chain.", materials: "Paper strips, glue" },
            { name: "Button Sharing Bowl", description: "Give buttons to children and encourage them to share with others.", materials: "Buttons, bowl" },
            { name: "My Helping Hands Chart", description: "Trace the child's hands on paper and write or draw ways they help others.", materials: "A4 sheet, crayons" },
            { name: "Smile Circle", description: "Children sit in a circle and smile at the next person to build friendliness and joy.", materials: "No materials" },
            { name: "Puppet Says Sorry", description: "Use a puppet to act out how and when to say sorry. Kids can give examples too.", materials: "Puppet or paper sock" },
            { name: "Thank You Card Making", description: "Children create simple cards to thank friends, teachers, or helpers.", materials: "Paper, crayons" },
            { name: "Be Good Story Time", description: "Read or tell stories like 'The Sharing Tree' or 'Kind Kitty' that show good behavior.", materials: "Story chart or printed books" },
            { name: "Button Please Game", description: "Children say 'please' before receiving a button toy to practice polite language.", materials: "Buttons or small toys" },
            { name: "Magic Word Hop", description: "Lay out paper floor cards labeled 'please,' 'thank you,' 'excuse me,' etc. Kids hop on them and say the word.", materials: "Paper floor cards" },
            { name: "Good Job Badge", description: "Create and wear badges like 'Good Friend,' 'Polite Child,' or 'Kind Helper.'", materials: "Paper, safety pins" },
            { name: "Role-Play: Good vs Rude", description: "Act out different behaviors — good and bad. Children guess which is which.", materials: "No materials" },
            { name: "Balloon of Praise", description: "Children write or draw kind words on balloons and display them on a class chart.", materials: "Balloons, marker" },
            { name: "Hello-Smile-Wave", description: "Practice greeting others with a wave, smile, and a friendly 'hello!'", materials: "No materials" },
            { name: "Pick & Say Kindly", description: "Children pick a random classmate's name and say one kind thing about them.", materials: "Name chits" },
            { name: "Wait-for-Turn Circle", description: "Pass a toy in a circle. Children wait for their turn to promote patience.", materials: "Toy" },
            { name: "Magic Door Rule", description: "Decorate the class door with rules like 'Be Kind,' 'Say Please,' 'Help Others.'", materials: "Chart paper, sketch pens" },
            { name: "Finger Puppet Manners Show", description: "Children create finger puppets and perform short skits on good manners.", materials: "Paper, colors" },
            { name: "Clap for Kindness", description: "Teacher describes a kind act like 'helping a friend' — the class claps to appreciate.", materials: "No materials" },
            { name: "Thankful Tree", description: "Create a tree on the wall. Children add leaves with messages of thanks.", materials: "Paper tree, cut-out leaves" },
            { name: "Be Good Maze", description: "Children follow a maze that only allows good habits to reach the 'Kind Castle.'", materials: "Maze printout" },
            { name: "Respect Sorting Game", description: "Sort picture cards into two groups: 'Respectful' and 'Not Respectful.'", materials: "Picture cards" },
            { name: "Say It with a Smile", description: "Children practice saying kind phrases ('May I help you?') while smiling.", materials: "Mirror (optional)" },
            { name: "Circle of Compliments", description: "In a circle, each child gives a compliment to the next person.", materials: "No materials" },
            { name: "Pick-Up Helper Race", description: "Quickly pick up classroom materials as a team — race to help others.", materials: "Toys, books, etc." },
            { name: "Heart Sticker for Good Act", description: "Whenever a child does something kind, they receive a heart sticker.", materials: "Stickers" },
            { name: "Our Classroom Manners Chart", description: "Children help create a manners chart with good behavior rules and illustrations.", materials: "Chart paper, sketch pens" },
            { name: "Say Sorry Balloon Toss", description: "Toss a balloon around. When a child catches it, they say a name and a polite sentence like 'Sorry for…'.", materials: "Balloon" },
            { name: "Puppet Praise Time", description: "A puppet praises children for good manners and polite behavior seen during the day.", materials: "Puppet" },
            { name: "Storybook Corner: Be Good Books", description: "Set up a corner with books that promote values like kindness, respect, and sharing.", materials: "Storybooks" }
          ],
          "National Festivals": [
            { name: "Flag Hoisting Role Play", description: "Children act out a simple flag hoisting ceremony with singing and saluting.", materials: "Paper flag, stick" },
            { name: "Festival Hat Parade", description: "Kids decorate paper hats with symbols of national festivals and wear them in a mini parade.", materials: "Hat cutouts, crayons" },
            { name: "March Past Music", description: "Children march around the class to patriotic tunes like the national anthem or 'Vande Mataram.'", materials: "Bluetooth speaker" },
            { name: "Festival Matching", description: "Match national festivals to their correct symbols, like a Gandhi cap for Gandhi Jayanti.", materials: "Festival picture cards" },
            { name: "Freedom Fighter Gallery", description: "Display pictures of freedom fighters on the wall. Kids walk through the gallery while the teacher tells mini-stories.", materials: "Chart, printed pictures, story slips" },
            { name: "Mini Parade", description: "Children group up and march with paper flags. Some may pretend to play drums.", materials: "Small flags, optional drums" },
            { name: "Festival Flash Freeze", description: "Hold up a festival image (like the Indian flag or Ashoka Chakra). Kids freeze and call out the festival name.", materials: "Festival flashcards" },
            { name: "Bapu Puppet Talk", description: "Use a sock puppet as 'Bapu' (Gandhiji) who talks about peace, truth, and cleanliness.", materials: "Sock puppet or paper puppet" },
            { name: "Festival Collage", description: "Create a collage on chart paper using images of Republic Day, Gandhi Jayanti, etc.", materials: "Chart, glue, cut-out pictures" },
            { name: "Patriotic Song Time", description: "Sing simple patriotic songs like 'Nanha Munna Rahi Hoon' or 'Saare Jahan Se Accha.'", materials: "Bluetooth speaker" },
            { name: "Handprint Flag Art", description: "Make the Indian flag using orange, white, and green handprints. Add a blue wheel in the center.", materials: "Paint, paper" },
            { name: "Story Circle", description: "Gather kids in a circle while the teacher narrates short stories about national festivals with pictures.", materials: "Story cards or images" },
            { name: "Republic Day Ramp Walk", description: "Kids dress up with tricolor accessories and do a confident ramp walk like national heroes.", materials: "Tricolor pins, caps, badges" },
            { name: "Freedom Slogan Echo", description: "Teacher says a slogan like 'Jai Hind!' or 'Vande Mataram,' and the children repeat loudly and proudly.", materials: "No materials" },
            { name: "Flag Garland Hanging", description: "Make a class decoration using small paper flags strung together and hang it up.", materials: "Paper, scissors, string" },
            { name: "Gandhi Glasses Craft", description: "Children make and wear round paper glasses like Gandhiji's for fun and learning.", materials: "Paper, string" },
            { name: "My Favorite Festival Drawing", description: "Kids draw and color their favorite national festival scene like a flag hoisting or school function.", materials: "A4 sheet, crayons" },
            { name: "Festival Memory Talk", description: "Children share what they did or saw on national festivals like Independence Day or Republic Day.", materials: "No materials" },
            { name: "Clap the Festival", description: "Teacher claps syllables (e.g., 'In-de-pen-dence') and kids guess which festival it is.", materials: "No materials" },
            { name: "Festival Song Flag Dance", description: "Children wave small paper flags while dancing to patriotic songs in class.", materials: "Paper flags, music system" }
          ],
          "National Symbols": [
            { name: "Symbol Puzzle Match", description: "Children match picture cards of national symbols with their correct names (e.g., Tiger, Lotus).", materials: "Symbol picture cards" },
            { name: "Clay Symbol Models", description: "Kids create models of national symbols like a clay tiger, lotus, mango, etc.", materials: "Clay" },
            { name: "Symbol Chart Craft", description: "Paste each national symbol (animal, bird, flower, fruit, etc.) on a big class chart and label them.", materials: "Chart paper, cut-out pictures, glue" },
            { name: "Symbol Sorting", description: "Provide a mix of pictures — children sort and pick out only the national symbols.", materials: "Picture cards of animals, birds, flowers, etc." },
            { name: "Peacock Feather Fans", description: "Make and decorate fans shaped like peacock feathers using paper and colors.", materials: "Paper, crayons or sketch pens" },
            { name: "Tiger Paw Track Game", description: "Place tiger paw prints on the floor. Kids follow the tracks to find a hidden toy tiger.", materials: "Paper paw cutouts, toy tiger" },
            { name: "Mango Tree Song", description: "Sing a fun rhyme about the mango tree — national fruit — and dance along.", materials: "Bluetooth speaker" },
            { name: "Lotus Folding Craft", description: "Make a lotus flower using simple paper folding techniques (origami).", materials: "Pink origami paper or any craft paper" },
            { name: "Symbol Collage", description: "Group activity where children cut and stick national symbol pictures onto a collage sheet.", materials: "Glue, paper, magazines or printed pictures" },
            { name: "National Symbol Hunt", description: "Hide flashcards of symbols (flag, emblem, flower, animal) around the room. Kids search and name them.", materials: "Flashcards" },
            { name: "Guess the Symbol Game", description: "Teacher gives clues like 'I am the king of the jungle' – children guess 'Tiger!'", materials: "No materials" },
            { name: "Symbol Drawing Time", description: "Each child chooses a national symbol to draw and color — e.g., the lotus or peacock.", materials: "Paper, crayons" },
            { name: "Story Time: Tiger Tale", description: "Teacher narrates a short story or fable featuring the tiger — India's national animal.", materials: "Storybook or oral story" },
            { name: "Symbol Dot Painting", description: "Children use earbuds and paint to make dot-art of symbols like the peacock or lotus.", materials: "Paint, earbuds, paper" },
            { name: "Banyan Leaf Rubbing", description: "Rub a crayon over a banyan leaf placed under paper to see its texture.", materials: "Leaf, crayon, paper" },
            { name: "Mango Smell Box", description: "Introduce a real mango or a scented object and talk about its sweet smell — linking to the national fruit.", materials: "Real mango or mango-scented object" },
            { name: "Symbol Badges", description: "Make small round badges with drawn symbols (e.g., Ashoka Chakra, peacock) and wear them.", materials: "Paper circles, crayons, pins" },
            { name: "Group Symbol Cheer", description: "Divide kids into groups (e.g., Tiger Group, Peacock Group) and have each chant their symbol name with a cheer.", materials: "No materials" },
            { name: "National Symbol Maze", description: "Children solve a simple maze by following only the correct symbols to reach the finish.", materials: "Printed maze sheet" },
            { name: "Symbol Role Play", description: "Kids pretend to be symbols — flap like a peacock, stand strong like a banyan tree, roar like a tiger.", materials: "No materials" }
          ],
          "National Flag": [
            { name: "Flag Making with Paper Strips", description: "Children stick three horizontal strips (orange, white, green) to make the Indian flag.", materials: "Orange, white, green paper strips, glue" },
            { name: "Ashoka Chakra Drawing", description: "Draw a blue Ashoka Chakra with 24 spokes in the center of a white circle.", materials: "A4 sheet, blue crayon or marker" },
            { name: "Tricolor Button Board", description: "Fill the three sections of a drawn flag with matching colored buttons.", materials: "Buttons in orange, white, green; glue" },
            { name: "Flag Pole Craft", description: "Stick a paper flag onto a drinking straw to create a mini flagpole.", materials: "Straw, paper flag cutout" },
            { name: "Flag Chanting Circle", description: "Children sit in a circle and pass around a small flag while chanting 'Saffron–White–Green!'", materials: "Small paper flag" },
            { name: "Tear & Paste Flag", description: "Tear colored paper into small bits and paste in flag pattern.", materials: "Scrap orange, white, green paper; glue" },
            { name: "Respect the Flag Pledge", description: "Children stand and say together: 'I will respect my flag.'", materials: "None" },
            { name: "Flag Hop Game", description: "Hop from mat to mat placed in saffron, white, and green order.", materials: "Colored floor cards" },
            { name: "Flag Coloring Race", description: "Each child colors a blank flag outline as quickly and neatly as possible.", materials: "Flag outline sheet, crayons" },
            { name: "Make Your Flag Cap", description: "Stick a flag onto a paper cap and wear it proudly.", materials: "Paper cap, flag sticker or cutout" },
            { name: "Flag Roll Necklace", description: "Roll up tiny tricolor paper flags and thread them into a necklace.", materials: "Paper, thread, glue" },
            { name: "Paint Flag Using Earbuds", description: "Use earbuds to dab paint and create flag stripes.", materials: "Orange, white, green paint; earbuds; paper" },
            { name: "Clay Flag Plate", description: "Make a flag design using tricolor clay on a paper plate.", materials: "Clay, paper plate" },
            { name: "Salute & Say 'Jai Hind'", description: "Teach children to salute and say 'Jai Hind' to the flag.", materials: "None" },
            { name: "Story: My India's Flag", description: "Narrate a simple story explaining the meaning of the colors and the Ashoka Chakra.", materials: "Story cards or oral story" },
            { name: "Flag Puzzle Activity", description: "Cut a flag into 3–4 pieces and let kids reassemble it.", materials: "Paper flag, scissors" },
            { name: "Flag Garland for Class", description: "Create a string of mini paper flags to hang in the classroom.", materials: "Thread, small paper flags" },
            { name: "Spin the Flag Wheel", description: "Make a spinner with flag elements (colors, Ashoka Chakra) — kids name what it lands on.", materials: "DIY spinner, pictures" },
            { name: "Tricolor Umbrella Art", description: "Draw an umbrella and fill each section with a flag color.", materials: "A4 sheet, crayons" },
            { name: "National Flag Song", description: "Play and sing patriotic songs like 'Vande Mataram' or other flag-related rhymes.", materials: "Bluetooth speaker" }
          ],
          "Warm-Up Exercise": [
            { name: "Head to Toe Wiggle", description: "Children touch and wiggle each body part – head, shoulders, knees, toes, etc.", materials: "None" },
            { name: "Jump and Count", description: "Children jump in place while counting 1–10 (or backward from 10).", materials: "None" },
            { name: "Stretch Like a Tree", description: "Kids stand tall and reach up like a growing tree, then sway side-to-side like a tree in the wind.", materials: "None" },
            { name: "Animal Walks", description: "Move like animals — hop like a frog, crawl like a crab, stomp like an elephant, etc.", materials: "None" },
            { name: "Shake It Out", description: "Shake each hand, foot, arm, leg, and whole body while counting aloud.", materials: "None" },
            { name: "Clap & Tap Circle", description: "Children stand in a circle and clap hands, tap knees, then feet in rhythm.", materials: "None" },
            { name: "Fly Like a Bird", description: "Children flap their arms and move gracefully around the room like flying birds.", materials: "Open space" },
            { name: "Reach & Roll", description: "Stretch up, then slowly roll down to touch toes and roll back up.", materials: "None" },
            { name: "Side-to-Side Hops", description: "Hop left and right while chanting days of the week or numbers.", materials: "None" },
            { name: "Balloon Breathing", description: "Inhale deeply (like inflating a balloon), then exhale slowly. Repeat.", materials: "None" },
            { name: "Spin and Freeze", description: "Spin slowly and freeze in a funny pose when music stops.", materials: "Optional music or speaker" },
            { name: "Shoulder Shrug Game", description: "Shrug shoulders up and down in a fun rhythm like dancing shoulders.", materials: "None" },
            { name: "Marching Band Parade", description: "March in place or in a line while lifting knees and swinging arms.", materials: "Drumbeat, claps, or rhythm" },
            { name: "Tiptoe Walk", description: "Walk quietly on tiptoes like sneaky cats across the room.", materials: "None" },
            { name: "Jump & Touch the Sky", description: "Jump high with arms up trying to 'touch the sky.' Repeat 10 times.", materials: "None" },
            { name: "Cross Your Body Tap", description: "Right hand taps left knee and vice versa to improve coordination.", materials: "None" },
            { name: "Bunny Jumps", description: "Crouch and hop forward like a bunny. Builds leg strength.", materials: "None" },
            { name: "Mirror Me", description: "Teacher makes movements slowly. Kids copy like a mirror.", materials: "None" },
            { name: "Arm Circles", description: "Make small, medium, and big arm circles forward and backward.", materials: "None" },
            { name: "High Five & Squat", description: "High five a partner, then both squat together. Repeat a few rounds.", materials: "Partners" }
          ]
        } 
      },
      { 
        volume: 2, 
        topics: { 
          "Story of a Butterfly": [
            { name: "Clay Life Cycle", description: "Children create all 4 stages of the butterfly using clay: egg, caterpillar, chrysalis, butterfly.", materials: "Clay" },
            { name: "Storytelling with Puppets", description: "Teacher narrates the butterfly story using simple puppets for each stage. Children repeat stages aloud.", materials: "Spoon or paper puppets" },
            { name: "Paint the Metamorphosis", description: "Children paint each stage of the butterfly on a folded A4 sheet like a storybook.", materials: "A4 paper, paint" },
            { name: "Caterpillar to Butterfly Song", description: "Play a simple song like 'There's a Tiny Caterpillar on a Leaf…' and have kids act out the stages.", materials: "Bluetooth speaker" },
            { name: "Thread Cocoon Wrap", description: "Wrap a small cotton ball in thread to make a cocoon. Later open it to show a paper butterfly hidden inside.", materials: "Thread, cotton, paper butterfly" },
            { name: "Button Life Cycle Chart", description: "Use buttons and paper to make a simple chart with each life stage. Stick buttons to mark the stages.", materials: "Paper, buttons" },
            { name: "Spoon Puppet Drama", description: "Create puppets on spoons for egg, caterpillar, cocoon, and butterfly. Use them in small skits.", materials: "Plastic spoons, paper, glue" },
            { name: "Leaf Egg Drop", description: "Stick paper 'eggs' onto a leaf drawn on paper, then show how they become caterpillars.", materials: "Paper, crayons" },
            { name: "Fold & Flip Life Cycle Book", description: "Make a small flipbook where each page shows a stage of the butterfly.", materials: "Scrap/A4 paper" },
            { name: "Fingerprint Butterfly", description: "Paint fingerprints for caterpillar and press two hands for butterfly wings.", materials: "Paint, paper" },
            { name: "Clay Caterpillar Crawl", description: "Make a long caterpillar using clay balls. Use it in pretend play to crawl around a 'leaf.'", materials: "Clay, paper leaf" },
            { name: "Thread to Wings", description: "Use thread to mimic the transformation — tangle thread in a circle for cocoon, then unfold wings made from paper.", materials: "Thread, paper" },
            { name: "'Grow Like a Butterfly' Yoga", description: "Movement activity: curl up like an egg, stretch like a caterpillar, wrap like a cocoon, flap like a butterfly.", materials: "None" },
            { name: "Life Cycle Puzzle", description: "Give students four mixed cards. They sequence the story correctly: egg → caterpillar → cocoon → butterfly.", materials: "Printed cards" },
            { name: "Bead Stages Necklace", description: "String beads: white for egg, green for caterpillar, brown for cocoon, and colorful for butterfly.", materials: "Beads, thread" },
            { name: "Butterfly Snack Talk", description: "Give a snack (like banana pieces or cucumber slices) to discuss caterpillar eating habits. Link to story stage.", materials: "Vegetables (optional)" },
            { name: "Leaf Count & Match", description: "Draw leaves with numbers. Children match caterpillars to correct number of leaves they 'eat.'", materials: "Paper, crayons" },
            { name: "Paper Plate Story Wheel", description: "Make a rotating wheel with butterfly stages. Children spin and name each step.", materials: "Paper plate, paper arrow, pin" },
            { name: "Color the Stages", description: "Provide pictures of the life cycle and ask children to color each stage.", materials: "Worksheet printouts" },
            { name: "Paper Chain Story", description: "Each stage is drawn or glued onto colored paper loops. Join to make a butterfly life chain.", materials: "Colored paper strips, glue" },
            { name: "Butterfly Song Parade", description: "Children sing and act out butterfly movements in a line as the stages are sung aloud.", materials: "Bluetooth speaker" },
            { name: "Insect vs. Butterfly", description: "Use sorting cards to compare a butterfly's story with other insects like ants or spiders.", materials: "Picture cards" },
            { name: "Symmetry Wings Painting", description: "Fold paper in half, paint one side of a butterfly, press to make symmetrical wings.", materials: "Paper, paint" },
            { name: "Pebble Stage Markers", description: "Place pebbles at each stage. Children walk over them while narrating what happens at each step.", materials: "Pebbles, stage markers" },
            { name: "Butterfly Walk Game", description: "Label 4 corners of classroom as 'egg,' 'caterpillar,' etc. Teacher calls a stage; children walk/fly to it.", materials: "Labels, open space" },
            { name: "Thread Hanging Life Cycle Mobile", description: "Hang 4 paper stages on a string to form a mobile. Children identify and retell the story.", materials: "Thread, paper" },
            { name: "Butterfly Counting Dots", description: "Make butterflies with numbered dots on wings. Children count and color matching numbers.", materials: "Butterfly printouts" },
            { name: "Nature Tray Talk", description: "Bring in dry leaves, twigs, etc. Place paper caterpillars and cocoons on them. Retell the story with real feel.", materials: "Leaves, twigs, paper insects" },
            { name: "Butterfly Dress-Up Day", description: "Children wear wings or make simple butterfly headbands and act out their transformation.", materials: "Paper wings/headbands" },
            { name: "Butterfly Craft Show & Tell", description: "Children make a butterfly craft and explain its story part (e.g., 'This is after the cocoon opens').", materials: "Paper, crayons, glue" }
          ],
          "Let's Grow a Plant": [
            { name: "Clay Seed to Plant", description: "Children use clay to model 4 plant stages: seed, sprout, stem, and flower.", materials: "Clay" },
            { name: "Seed Sorting Tray", description: "Show real or paper seeds. Children sort by size, color, or type.", materials: "Paper seeds or real seeds" },
            { name: "Spoon Puppet Story", description: "Use spoons with faces for Sun, Water, and Seed. Teacher tells a short story about how a plant grows.", materials: "Spoons, paper, glue" },
            { name: "Water Drop Trail Game", description: "Draw a trail from a water droplet to a plant. Children trace the trail with a crayon.", materials: "Worksheet, crayons" },
            { name: "Paint a Plant", description: "Children paint all plant parts: roots, stem, leaves, flower, and label them.", materials: "Paper, paint" },
            { name: "Grow with Song", description: "Sing a song like 'Planting a Seed' with gestures for sun, water, soil, and growth.", materials: "Bluetooth speaker" },
            { name: "Button Flower Craft", description: "Buttons form flower centers and petals. Children glue them onto drawn stems.", materials: "Paper, buttons, glue" },
            { name: "Thread Roots Activity", description: "Paste thread strips under a drawn plant to represent roots growing underground.", materials: "Paper, thread" },
            { name: "My Plant Chart", description: "Make a chart with 4 plant stages. Children paste cutouts or draw each step.", materials: "Scrap paper, glue" },
            { name: "Clay Pot Planting", description: "Use clay to make a tiny pot and seedling. Children pretend to water and place in 'sunlight.'", materials: "Clay" },
            { name: "Leaf Match Game", description: "Match different types of paper leaves to stems. Discuss how leaves help the plant.", materials: "Paper leaves, stems" },
            { name: "Circle the Plant Needs", description: "Worksheet with items like sun, water, milk, air, toys. Children circle what plants need.", materials: "Worksheet" },
            { name: "Water the Plant Relay", description: "Children pretend to carry water to a paper plant using a spoon. Learn how plants need water.", materials: "Spoons, water cups, paper plant" },
            { name: "Draw My Garden", description: "Children draw a garden with seeds, sprouts, and plants.", materials: "Paper, crayons" },
            { name: "Stick a Seed Game", description: "Children paste seeds (paper dots or real) on soil pictures, then draw roots and stem growing.", materials: "Paper, glue, seed cutouts" },
            { name: "Plant Parts Puzzle", description: "Cut up a plant image into 4–5 pieces. Children assemble and name parts.", materials: "Paper puzzle" },
            { name: "Dance Like a Plant", description: "Act out growing from a seed — curl up, sprout arms, grow tall like a plant.", materials: "None" },
            { name: "Bead Plant Model", description: "Use beads on string to represent root, stem, leaves, and flower.", materials: "Beads, thread" },
            { name: "Seed-to-Plant Roleplay", description: "Children act out as seed, soil, sun, and water. They take turns showing how a plant grows.", materials: "None" },
            { name: "Crayon Plant Labeling", description: "Provide plant diagrams for children to label with crayons: root, stem, leaf, flower.", materials: "Worksheets" },
            { name: "Paint Drop Germination", description: "Drip watercolors from a spoon onto a drawn seed to simulate watering. Then draw the sprout.", materials: "Paint, paper" },
            { name: "Paper Cup Planter", description: "Decorate a paper cup like a pot. Pretend to plant and grow a seed inside it.", materials: "Paper cup, markers" },
            { name: "Cloth Flower Bloom", description: "Use folded cloth petals tied in a bud. When untied, they bloom. Show flower opening.", materials: "Cloth, thread" },
            { name: "Pebble Soil Layering", description: "Arrange pebbles on paper to show how seeds sit on soil. Draw stem growing up.", materials: "Pebbles, paper" },
            { name: "Seed and Sun Matching", description: "Match seed cutouts with matching sun cards to complete the plant growing pair.", materials: "Cutouts" },
            { name: "Wind or Water? Sorting", description: "Show what helps plants grow and what doesn't. Children sort cards into 'Helps' and 'Doesn't Help.'", materials: "Flashcards" },
            { name: "Life Cycle Bracelet", description: "Make a bracelet with beads: brown for seed, green for sprout, red for flower.", materials: "Beads, string" },
            { name: "Whisper a Plant Story", description: "Children sit in a circle. Whisper plant steps in one ear to complete a 'plant growing' message chain.", materials: "None" },
            { name: "Song + Stretch 'Grow Tall'", description: "Play a plant song and stretch slowly from seed (floor) to tall (standing with arms up).", materials: "Bluetooth speaker" },
            { name: "My Seed Diary", description: "Fold a small booklet. Children draw seed → sprout → plant over 3 days.", materials: "A4 paper, crayons" }
          ],
          "Parts of a Plant": [
            { name: "Plant Puzzle Build", description: "Children assemble cut-out parts (root, stem, leaf, flower) to form a plant.", materials: "Paper, scissors (pre-cut), glue" },
            { name: "Clay Plant Model", description: "Roll and shape a full plant using clay — roots, stem, leaves, flower.", materials: "Clay" },
            { name: "Thread Roots Art", description: "Draw a stem and leaf, then paste thread pieces below for roots.", materials: "Thread, crayons, paper" },
            { name: "Parts of a Plant Song", description: "Sing: 'Roots hold tight, stem stands right, leaves catch sun, flowers are bright!'", materials: "Bluetooth speaker" },
            { name: "Button Flower Craft", description: "Make a plant drawing and glue buttons to form the flower.", materials: "Paper, buttons" },
            { name: "Spoon Plant Puppets", description: "Decorate spoons with drawings of flower, leaf, root. Use in storytelling.", materials: "Spoons, markers, paper" },
            { name: "Name & Point", description: "Show a plant diagram. Ask children to point and say 'This is the stem,' etc.", materials: "Plant chart or drawing" },
            { name: "Paint My Plant", description: "Children paint a plant on paper, identifying each part.", materials: "Paint, paper" },
            { name: "Cloth Leaf Patch", description: "Stick bits of cloth as leaves on a paper plant drawing.", materials: "Scrap cloth, glue" },
            { name: "Plant Talk Game", description: "Children take turns acting as parts of a plant and telling their function in one line.", materials: "None" },
            { name: "Leaf Rubbing Art", description: "Place a leaf under paper and rub crayon to see texture.", materials: "Paper, crayon, leaf" },
            { name: "Clay Leaf Imprint", description: "Press real leaves into clay to get a leaf pattern.", materials: "Clay, leaves" },
            { name: "Painted Leaf Shapes", description: "Dip leaves in paint and press on paper. Make patterns or art.", materials: "Paint, paper, leaves" },
            { name: "Leaf Count Game", description: "Count how many paper leaves are stuck to a tree cutout.", materials: "Paper, cutouts" },
            { name: "Big & Small Leaves Match", description: "Match large and small paper leaves in pairs.", materials: "Paper leaves" },
            { name: "Dry Leaf Sorting", description: "Bring leaves from outside. Sort by size, shape, or texture.", materials: "Real leaves" },
            { name: "Leaf Thread Chain", description: "Punch holes in paper leaves and string them into a garland.", materials: "Paper, thread" },
            { name: "Spoon Leaf Toss", description: "Toss small paper leaves into a bowl using a spoon.", materials: "Paper leaves, spoon, bowl" },
            { name: "Leaf Maze Path", description: "Draw a path of leaves. Children follow the path by finger or toy insect.", materials: "Paper, crayons" },
            { name: "Leaf Song Dance", description: "Play a leaf-themed rhyme and dance fluttering like falling leaves.", materials: "Bluetooth speaker" }
          ],
          "Vegetables": [
            { name: "Vegetable Stamp Art", description: "Cut okra or potato to stamp on paper using paint.", materials: "Cut vegetables, paint, paper" },
            { name: "Clay Vegetable Garden", description: "Children create small carrots, brinjals, etc. using colored clay.", materials: "Clay" },
            { name: "Match the Veggie Game", description: "Match vegetable name cards to their paper pictures.", materials: "Paper cutouts, labels" },
            { name: "Vegetable Sorting Mat", description: "Sort paper vegetables into leafy/root/fruit types.", materials: "Paper cutouts" },
            { name: "Vegetable Spoon Toss", description: "Toss paper vegetable cutouts into correct labeled baskets.", materials: "Paper veggies, baskets" },
            { name: "Name That Veggie Song", description: "Sing a rhyme: 'Tomato is red, carrot is orange…' with actions.", materials: "Bluetooth speaker" },
            { name: "Button Vegetable Patch", description: "Draw a vegetable bed and glue buttons as seeds/veggies.", materials: "Paper, buttons" },
            { name: "Vegetable Color Match", description: "Match paper vegetables to colored circles (e.g., brinjal → purple).", materials: "Color cards, veggie cutouts" },
            { name: "Vegetable Shopping Roleplay", description: "Use paper or cloth veggies in a pretend vegetable shop.", materials: "Paper vegetables, basket" },
            { name: "Thread the Veggies", description: "Punch hole in paper vegetables and string them into a necklace.", materials: "Paper veggies, thread" }
          ],
          "Fruits": [
            { name: "Fruit Button Match", description: "Stick buttons onto drawn fruits like grapes or kiwi dots.", materials: "Paper fruits, buttons" },
            { name: "Fruit Basket Craft", description: "Make a basket on paper and fill with paper fruits.", materials: "Paper, glue" },
            { name: "Fruit Puzzle Fix", description: "Cut large fruit pictures in 2–3 parts. Children reassemble them.", materials: "Fruit cutouts" },
            { name: "Fruit Taste Talk (No Eating)", description: "Talk about fruit tastes — sweet mango, sour lemon — using toy or paper fruits.", materials: "Paper fruits" },
            { name: "Fruit Color Match", description: "Match color swatches to paper fruits (e.g., red → apple).", materials: "Color cards, fruits" },
            { name: "Fruit Dance Song", description: "Act and dance to 'Banana Banana' or other fruit-themed song.", materials: "Bluetooth speaker" },
            { name: "Clay Fruit Basket", description: "Children make a fruit basket with colored clay fruits.", materials: "Clay" },
            { name: "Fruit Chart Point & Say", description: "Teacher shows a fruit chart. Children name fruits aloud.", materials: "Chart or paper" },
            { name: "Fruit Sorting Tray", description: "Mix paper fruits and ask children to sort by color or size.", materials: "Paper cutouts" },
            { name: "Fruit Stick Puppet Skit", description: "Make fruit stick puppets and act out a skit like 'Who is the Juiciest?'", materials: "Sticks, paper fruits" }
          ],
          "Fruits & Vegetables with Seeds": [
            { name: "Seed Sorting Tray", description: "Provide paper or real seeds from fruits and vegetables (like tomato, orange, cucumber). Children sort by type.", materials: "Real or paper seeds, trays" },
            { name: "Clay Fruit with Seeds", description: "Children make fruits like papaya or watermelon using clay and press small black beads as seeds.", materials: "Clay, beads/buttons" },
            { name: "Paint the Seeds", description: "Provide fruit outlines. Children use fingers or earbuds to dot seeds inside each fruit.", materials: "Paper, paint, earbuds" },
            { name: "Spoon & Seed Scoop", description: "Scoop paper seeds into correct fruit or vegetable bowls labeled with pictures.", materials: "Paper seeds, spoons, bowls" },
            { name: "Paper Fold Fruit Reveal", description: "Fold paper to create a fruit. Inside, children draw seeds (e.g., fold apple with dots inside).", materials: "Folded paper, crayons" },
            { name: "Button Seed Count", description: "Stick buttons on fruit cutouts to represent seeds. Count and compare (e.g., 5 watermelon seeds, 2 mango).", materials: "Buttons, glue, paper fruits" },
            { name: "Sing 'Seeds Inside Me'", description: "Rhyme time: 'Mango has one, papaya has many, watermelon seeds are plenty!' Clap on the seed count.", materials: "Bluetooth speaker" },
            { name: "Threaded Seed Circles", description: "Use paper circles for fruits and thread black dots (paper or beads) inside to show seeds.", materials: "Paper, thread, beads" },
            { name: "Fruit or Veggie? Match-Up", description: "Match fruit or vegetable pictures to seed types (many, few, or none).", materials: "Paper cutouts" },
            { name: "Vegetable Seed Hunt Chart", description: "Teacher sticks pictures of brinjal, ladyfinger, tomato. Children circle those with visible seeds.", materials: "Chart or worksheet" },
            { name: "Spoon Puppet 'Mr. Seed'", description: "Make spoon puppets to act out seed stories — 'I grow inside fruits like mango!'", materials: "Spoons, paper, glue" },
            { name: "Paper Seed Puzzle", description: "Provide cut fruit/vegetable pictures with missing seeds. Children paste dots to complete them.", materials: "Paper cutouts, dot stickers" },
            { name: "Seed in the Middle Game", description: "Draw fruits with empty centers. Children place black dot seeds correctly in the middle.", materials: "Paper, crayons" },
            { name: "Stamp a Seed Trail", description: "Children stamp a seed path from fruit to plant using paint and stamps or fingers.", materials: "Paint, paper, stamps" },
            { name: "Dry Seed Art Plate", description: "Glue dry seeds (e.g., mustard, moong, chana) on paper fruits to show seed locations.", materials: "Dry seeds, glue, paper" },
            { name: "Cloth Fruit Slice", description: "Cut cloth pieces shaped like fruit slices. Children stick paper seeds on the inside.", materials: "Cloth scraps, paper dots" },
            { name: "Guess the Fruit Riddle", description: "'I'm red inside, green outside, my black seeds hide!' – Children guess (Watermelon).", materials: "Spoken activity" },
            { name: "My Fruit Seed Necklace", description: "Punch holes in fruit shapes and string them with paper 'seeds' to create a necklace.", materials: "Paper, thread" },
            { name: "Clay Pod Vegetable", description: "Children make ladyfinger or pea pods using clay and add tiny beads or buttons as seeds inside.", materials: "Clay, buttons/beads" },
            { name: "Big Seed, Small Seed Sort", description: "Children sort cutout fruits/vegetables by size of seed — big like mango, small like guava.", materials: "Paper cutouts" }
          ],
          "Motor Skill Development": [
            { name: "Clay Press & Shape", description: "Children roll, press, and pinch clay to form simple shapes, letters, or objects.", materials: "Clay" },
            { name: "Button Sorting Race", description: "Children sort buttons by color or size using fingers or tweezers.", materials: "Buttons, bowls" },
            { name: "Threading Beads", description: "Thread beads onto string or shoelaces. Great for hand–eye coordination.", materials: "Beads, thread" },
            { name: "Newspaper Ball Toss", description: "Make paper balls and toss into a bucket. Helps arm strength and aim.", materials: "Newspaper, bucket" },
            { name: "Spoon Walk", description: "Walk with a spoon holding a small ball or button. Try not to drop it.", materials: "Spoons, plastic balls" },
            { name: "Crumple & Throw Game", description: "Crumple paper using only one hand, then throw into a target box.", materials: "Scrap paper, box" },
            { name: "Cloth Folding Challenge", description: "Fold small cloth pieces neatly and place in a pile. Builds finger strength.", materials: "Old cloth pieces" },
            { name: "String Maze Crawl", description: "Create a maze using string across the room. Children crawl under/over without touching.", materials: "String" },
            { name: "Peg Pick & Place", description: "Pick up and clip clothespins onto a line or edge of a box.", materials: "Clothespins" },
            { name: "Paint Dot Patterns", description: "Use earbuds or fingers to paint dots and patterns. Improves grip and control.", materials: "Paint, earbuds, paper" },
            { name: "Jump & Count", description: "Call out a number; children jump that many times. Combines movement with number sense.", materials: "None" },
            { name: "Walk the Line", description: "Draw zig-zag or curved lines on the floor with chalk/tape. Children walk along them.", materials: "Tape or chalk" },
            { name: "Clay Finger Pushups", description: "Children push small clay balls flat using each finger. Builds strength.", materials: "Clay" },
            { name: "Finger Puppet Show", description: "Use paper puppets on fingers to tell a story or rhyme.", materials: "Paper, glue" },
            { name: "Ball Roll Challenge", description: "Roll a ball back and forth with a partner without dropping. Builds coordination.", materials: "Plastic balls" },
            { name: "Balance the Book", description: "Balance a light book or paper tray on head and walk across the room.", materials: "Light book" },
            { name: "Leaf Punch Collage", description: "Use hole punchers on leaf shapes and make a collage. Builds finger muscles.", materials: "Paper, puncher" },
            { name: "Sit & Reach Game", description: "Children sit and stretch forward to pick up objects without moving legs.", materials: "Buttons or clay balls" },
            { name: "Thread the Straw Rings", description: "Cut straws into small pieces and thread them like beads.", materials: "Straws, thread" },
            { name: "Crawling Caterpillar", description: "Crawl under chairs or tables in a caterpillar line.", materials: "Open space" },
            { name: "Pick with Chopsticks", description: "Use chopsticks or tweezers to pick up small items like beads.", materials: "Beads, tweezers or sticks" },
            { name: "Balloon Tap Race", description: "Keep a balloon in the air using taps. Don't let it fall!", materials: "Balloons" },
            { name: "Sponge Squeeze Race", description: "Squeeze water from sponge into a cup. Strengthens grip.", materials: "Sponge, water, cups" },
            { name: "Roll & Match Balls", description: "Roll clay into colored balls and match to colored spots.", materials: "Clay, colored paper" },
            { name: "Obstacle Course Fun", description: "Combine crawling, jumping, and balancing in a mini obstacle course.", materials: "Chairs, mats, boxes" }
          ]
        } 
      },
      { 
        volume: 3, 
        topics: { 
          "Trees": [
            { name: "Leaf Collage Tree", description: "Children collect fallen leaves and stick them on chart paper to make a tree. They can arrange big leaves for the canopy and small ones for the bottom.", materials: "Fallen leaves, glue, old paper or chart" },
            { name: "Bark Rubbing Fun", description: "Children press paper gently against a tree trunk and rub crayons to capture the bark's texture.", materials: "Crayons, paper, access to a nearby tree" },
            { name: "Fingerprint Tree", description: "Draw a tree trunk on paper. Let children dip fingers in green paint to make leaf dots on the branches.", materials: "Brown marker, green paint, paper" },
            { name: "Tree Yoga", description: "Children pretend to be trees—stand tall, spread arms like branches, sway gently like trees in the wind.", materials: "Open space" },
            { name: "Clay Tree Making", description: "Kids use clay to make a model of a tree, forming trunks and leaves.", materials: "Brown and green clay" },
            { name: "Match the Leaves", description: "Collect different shapes of leaves. Children match similar leaves or group by size.", materials: "Leaves of various types, paper" },
            { name: "Singing Tree Song", description: "Sing songs about trees and encourage children to clap and act along.", materials: "Bluetooth speaker (optional), lyrics" },
            { name: "Tree Puzzle", description: "Cut a big drawing of a tree into 4–5 large pieces. Let children put it back together.", materials: "Paper tree drawing, scissors (for teacher only)" },
            { name: "My Favorite Tree Drawing", description: "Ask children to draw and color a tree they've seen or like.", materials: "Crayons, drawing paper" },
            { name: "Parts of a Tree Poster", description: "Create a simple poster with 'Roots', 'Trunk', 'Branches', and 'Leaves'. Children paste pictures or draw each part.", materials: "Paper, glue, crayons" },
            { name: "Nature Walk – Spot a Tree", description: "Take kids on a nature walk to observe trees, colors, and bird sounds.", materials: "Outdoor access" },
            { name: "Button Leaf Tree", description: "Draw a tree, and children paste buttons as leaves.", materials: "Buttons, paper, glue" },
            { name: "Growing Tall Game", description: "Children pretend to be seeds and slowly grow into tall trees as you narrate.", materials: "None" },
            { name: "Story Time: Tree Tale", description: "Tell a short story about a tree and its friends (birds, shade, fruits).", materials: "Teacher's voice, story visuals (optional)" },
            { name: "Shadow of the Tree", description: "Let kids observe tree shadows in the sunlight and trace them on paper.", materials: "Chalk or paper, pencil" },
            { name: "Tree Sorting Basket", description: "Put items under 'comes from trees' (fruit, twig, paper) and 'not from trees' (metal spoon). Kids sort them.", materials: "Basket, objects from nature and household" },
            { name: "Tissue Roll Tree Craft", description: "Use empty tissue rolls for trunks and paste paper leaves to make trees.", materials: "Tissue rolls, paper, glue" },
            { name: "Listen to Tree Sounds", description: "Close eyes under a tree and listen for rustling leaves or chirping birds.", materials: "Quiet outdoor space" },
            { name: "Guess the Tree Part", description: "Show one part of a tree (leaf, bark, fruit) and let kids guess what it is.", materials: "Tree samples or images" },
            { name: "Dress the Tree", description: "Use fabric scraps to decorate a drawn tree like clothing—fun, sensory, and imaginative.", materials: "Cloth scraps, glue, paper" }
          ],
          "Uses of Plants": [
            { name: "Vegetable Sorting", description: "Provide real or plastic vegetables and help children sort them as 'we eat leaves', 'roots', or 'fruits'.", materials: "Real or toy vegetables, baskets" },
            { name: "Plant Product Basket", description: "Place items like fruits, wood, paper, cotton in a basket. Kids name how they come from plants.", materials: "Paper, cotton, twigs, fruits, old basket" },
            { name: "Leaf as Plate", description: "Children observe how banana leaves or big leaves can be used like plates in villages.", materials: "Banana leaves or large leaves" },
            { name: "Paint with Leaves", description: "Dip leaves in paint and press on paper to make plant-print artwork.", materials: "Leaves, paint, paper" },
            { name: "Clothes from Plants", description: "Show cotton, explain it's from the cotton plant. Kids feel the material.", materials: "Cotton wool, cloth sample" },
            { name: "Tree to Paper", description: "Show old notebook and explain how paper comes from trees. Kids decorate used pages for reuse.", materials: "Old paper, crayons" },
            { name: "Plant Puppets", description: "Make simple stick puppets of flowers, fruits, trees. Use for storytelling.", materials: "Sticks, paper, glue, crayons" },
            { name: "Spices from Plants", description: "Show real spices like cloves, cinnamon, and explain they come from plants.", materials: "Small spice samples in boxes" },
            { name: "Match Plant with Use", description: "Match card with a plant (banana, rose) to its use (fruit, flower, decoration).", materials: "Flashcards or printed pictures" },
            { name: "Scent Guessing Game", description: "Children smell basil, mint, or coriander and guess the plant.", materials: "Fresh herbs" },
            { name: "Plant Puzzle", description: "Make simple puzzles with a plant picture cut into 3–4 parts.", materials: "Chart paper, scissors (for teacher)" },
            { name: "Cotton Art", description: "Make flowers or clouds using cotton and talk about cotton plants.", materials: "Cotton balls, glue, paper" },
            { name: "My Favorite Plant Drawing", description: "Children draw a plant they like and say what it gives us.", materials: "Crayons, drawing paper" },
            { name: "Reuse Paper Activity", description: "Give children used paper to fold or draw on instead of wasting new sheets.", materials: "Old paper, crayons" },
            { name: "Role Play a Gardener", description: "Children pretend to water, care for plants and talk about plant uses.", materials: "Water bottle, apron (optional)" },
            { name: "Plant-Based Food Display", description: "Show rice, wheat, or fruits and explain how they're from plants.", materials: "Grains, fruits in bowls" },
            { name: "Grow a Bean", description: "Soak a bean and keep in wet cotton to observe plant growth over days.", materials: "Bean seed, cotton, small bowl" },
            { name: "Fabric Leaf Printing", description: "Dip leaves in paint and press onto old cloth to decorate.", materials: "Leaves, paint, old cloth" },
            { name: "Plant Walk", description: "Take a walk and point out useful plants—shade trees, fruit trees, herbs.", materials: "Outdoor space" },
            { name: "Thank You Plants Circle Time", description: "Sit in a circle and say aloud 'Thank you plants for giving us ___ (fruits, paper, air).'", materials: "None" }
          ],
          "Living and Non-Living Things": [
            { name: "Sorting Bag", description: "Children are shown a mix of pictures or small objects. They sort them into two groups: living and non-living.", materials: "Magazine cutouts or small toys, paper bags, chart for sorting" },
            { name: "Walk and Spot", description: "Children walk around the school and point out things that are living (plants, birds) and non-living (bench, bag).", materials: "Observation sheet (optional), pencil" },
            { name: "Clap for Living", description: "Teacher names items, and children clap only for living things.", materials: "Word flashcards or teacher voice" },
            { name: "Breathing Balloon", description: "Teacher shows how living things breathe using a balloon to mimic the chest expanding.", materials: "Balloon" },
            { name: "Moving or Not?", description: "Children discuss what can move on its own and what cannot.", materials: "Pictures or toy samples" },
            { name: "Life Needs", description: "Children match living things to what they need—air, food, water.", materials: "Printed cards with needs and beings" },
            { name: "Clay Living Models", description: "Make animals or plants from clay and display them.", materials: "Clay, paper label tags" },
            { name: "Story Time: The Rock and the Rabbit", description: "Teacher narrates a short story comparing a rock and a rabbit. Children answer which one is living and why.", materials: "Props (optional), storytelling voice" },
            { name: "Living Thing Hunt", description: "Give children a simple checklist. They tick living things they see outside.", materials: "Checklist, pencil" },
            { name: "Sing 'I Am Alive!'", description: "Sing a short action song on things living beings can do—eat, grow, move.", materials: "Bluetooth speaker (optional)" },
            { name: "Jump and Sit", description: "Say an item name. Children jump if it's living, sit if it's not.", materials: "None" },
            { name: "Feel the Pulse", description: "Help children feel their heartbeat and understand it's a sign of life.", materials: "None" },
            { name: "Draw My Pet/Plant", description: "Children draw their pet or a plant and say how it grows.", materials: "Paper, crayons" },
            { name: "Living Puppet Show", description: "Puppets talk about being alive. 'I need food', 'I sleep'.", materials: "Sock puppets, or paper stick puppets" },
            { name: "Breath on Mirror", description: "(For teacher demo) Breath fog shows we are alive and breathing.", materials: "Small mirror or spoon (optional demo)" },
            { name: "Non-Living Shape Hunt", description: "Children find non-living things around them that have shapes (rectangle = book).", materials: "None" },
            { name: "Growing or Not?", description: "Children match which items grow and which don't.", materials: "Cutouts or drawings" },
            { name: "Dance Like Animals", description: "Children mimic the movements of different animals (living beings).", materials: "Music (optional)" },
            { name: "Living Things Puzzle", description: "Simple paper puzzle matching animals to food.", materials: "Scrap paper, markers" },
            { name: "Living Chain", description: "Children hold hands to form a chain: sun helps plants grow, animals eat plants, etc.", materials: "None" }
          ],
          "Natural and Human-Made": [
            { name: "Sorting Tray", description: "Give a mix of natural and human-made items to sort.", materials: "Stones, leaves, plastic spoon, paper clip, tray" },
            { name: "Nature Walk Sorting", description: "Children collect natural items (leaves, twigs) and spot human-made ones (bottles).", materials: "Collection basket" },
            { name: "Clap and Tap", description: "Clap if it's natural, tap the table if it's human-made.", materials: "Teacher voice" },
            { name: "Natural Art", description: "Make a collage with only natural items collected outdoors.", materials: "Twigs, leaves, glue, paper" },
            { name: "Who Made It? Game", description: "Teacher says items. Children say 'Nature' or 'Humans'.", materials: "Picture cards (optional)" },
            { name: "Rock vs Brick", description: "Show a rock and a brick. Children observe and compare.", materials: "Rock, brick" },
            { name: "Nature Tray Guess", description: "Blindfold a child. Let them feel an item and guess if it's natural.", materials: "Cloth, natural objects" },
            { name: "Recreate a Scene", description: "Children draw a scene with both natural and man-made items.", materials: "Crayons, paper" },
            { name: "My Favorite Tree vs Toy", description: "Talk about natural and man-made favorites.", materials: "None" },
            { name: "Building with Both", description: "Create a pretend house using twigs (natural) and buttons/caps (man-made).", materials: "Twigs, paper caps, glue" },
            { name: "Natural Sound / Human Sound", description: "Play animal or machine sounds; children guess source.", materials: "Bluetooth speaker, sounds" },
            { name: "Clay Models", description: "Make a flower (natural) and a bus (human-made) from clay.", materials: "Clay" },
            { name: "Nature Puzzle", description: "Simple drawing with missing natural items to fill in.", materials: "Worksheet, crayons" },
            { name: "Stone Tower", description: "Children make towers with stones (natural).", materials: "Stones" },
            { name: "What Can We Eat?", description: "Identify natural things we eat vs. man-made (like candy).", materials: "Flashcards, real examples (optional)" },
            { name: "Water and Bottle", description: "Show water (natural) and bottle (human-made).", materials: "Water bottle" },
            { name: "Natural or Not Basket", description: "Fill a box with mixed items. Children pick one and answer.", materials: "Mixed objects" },
            { name: "Indoor Nature Corner", description: "Set up a small table with leaves, twigs, soil, etc. Let children explore.", materials: "Tray, leaves, twigs, soil" },
            { name: "Talk with Tree", description: "Children speak to a tree as if it's telling how it came from nature.", materials: "None" },
            { name: "Draw Your House and Garden", description: "House = man-made, garden = nature.", materials: "Paper, crayons" }
          ],
          "Indoor Games": [
            { name: "Button Bowling", description: "Set up empty plastic bottles and roll a button or small ball to knock them down.", materials: "Buttons or plastic balls, reused plastic bottles" },
            { name: "Spoon Balance Walk", description: "Children walk across a line balancing a button or small ball on a spoon.", materials: "Spoon from home, plastic ball or button" },
            { name: "Clap and Count", description: "Clap in patterns and have children repeat or add numbers as a memory game.", materials: "None" },
            { name: "Color Toss", description: "Toss paper balls into labeled baskets (red, blue, yellow). Learn colors and coordination.", materials: "Crushed paper balls, labeled containers" },
            { name: "String Maze", description: "Create a floor maze with thread for children to walk through without touching the lines.", materials: "String or thread, floor space" },
            { name: "Paper Hopscotch", description: "Make a hopscotch grid using newspaper squares on the floor.", materials: "Newspaper" },
            { name: "Stack the Cups", description: "Children stack and unstack paper cups in a race.", materials: "Old paper cups" },
            { name: "Button Sorting Race", description: "Sort buttons by color or size into bowls.", materials: "Buttons, bowls or containers" },
            { name: "Cloth Puppet Talk", description: "Use cloth puppets to act out simple guessing or action games.", materials: "Old cloth, marker" },
            { name: "Shape Memory", description: "Show shapes for 5 seconds, cover them, then ask children to recall.", materials: "Paper shape cut-outs" },
            { name: "Alphabet Search Box", description: "Hide letters in a box of shredded newspaper and ask children to find the letters.", materials: "Newspaper, cut-out letters" },
            { name: "Balloon Tap", description: "Children try to keep a balloon in the air without letting it touch the ground.", materials: "Balloon" },
            { name: "Match the Sound", description: "Shake two containers with the same objects (e.g., rice) and match the sounds.", materials: "Small boxes, rice, beads, paper clips" },
            { name: "Button Drop Game", description: "Drop buttons into a jar from a height and see who scores more.", materials: "Jar, buttons" },
            { name: "Memory Tray", description: "Show 5 items, then cover and ask children what they saw.", materials: "Small objects from class (spoon, paper, bead)" },
            { name: "Toss the Cloth", description: "Toss a piece of cloth into a bucket or circle.", materials: "Old cloth, bucket" },
            { name: "Freeze and Act", description: "Play music. When it stops, children freeze in a pose like a cat, dog, etc.", materials: "Bluetooth speaker" },
            { name: "Make-a-Pattern", description: "Create patterns using clay balls, buttons, or paper pieces.", materials: "Buttons, clay, or paper" },
            { name: "Jump the Letters", description: "Place letter cards on the ground. Call a sound and the child jumps on the right letter.", materials: "A4 sheets with letters" },
            { name: "Tunnel Crawl", description: "Use classroom tables covered with cloth to create a crawl tunnel.", materials: "Cloth and tables" }
          ],
          "Outdoor Games": [
            { name: "Leaf Relay", description: "Children carry a leaf on a spoon and race without dropping it.", materials: "Leaves, spoon" },
            { name: "Run to the Color", description: "Teacher calls out a color and children run to an object of that color.", materials: "Outdoor objects, color cards (optional)" },
            { name: "Rolling Race", description: "Roll a plastic ball to a friend and back in a relay.", materials: "Plastic ball" },
            { name: "Jump and Count", description: "Children jump over lines and count loudly.", materials: "Chalk for lines on ground" },
            { name: "Circle Dance", description: "Form a circle, dance to music, freeze on command.", materials: "Bluetooth speaker" },
            { name: "Follow the Leader", description: "Children follow the leader's actions (jump, crawl, spin).", materials: "None" },
            { name: "Water Carry Walk", description: "Carry water in a cup from one bucket to another.", materials: "Two buckets, small plastic cups" },
            { name: "Balloon Toss", description: "Toss a balloon to a partner without bursting it.", materials: "Balloon" },
            { name: "Nature Treasure Hunt", description: "Find a leaf, a stone, and a stick.", materials: "Natural materials outdoors" },
            { name: "Walk Like Animals", description: "Hop like a frog, walk like a crab, fly like a bird.", materials: "None" },
            { name: "Sidewalk Alphabet Jump", description: "Draw letters with chalk and ask children to jump on a called-out sound.", materials: "Chalk" },
            { name: "Shadow Catch", description: "Try to step on a friend's shadow playfully.", materials: "Sunny outdoor space" },
            { name: "Obstacle Path", description: "Set a path using sticks, stones, or leaves. Children walk around or over them.", materials: "Outdoor items" },
            { name: "Run to the Shape", description: "Place shapes on ground. Teacher names shape and children run to it.", materials: "Paper shapes" },
            { name: "Pass the Ball", description: "Form a circle and pass the ball while music plays. Freeze when music stops.", materials: "Ball, Bluetooth speaker" },
            { name: "Clap and Move", description: "Teacher claps in patterns; children mimic and move accordingly.", materials: "None" },
            { name: "Big Steps, Small Steps", description: "Take 10 big steps, then 10 small ones — compare distances.", materials: "None" },
            { name: "Hop and Pick", description: "Pick up paper items while hopping on one foot.", materials: "Paper pieces" },
            { name: "Alphabet Chain", description: "Children say the next alphabet letter while passing a button.", materials: "Button" },
            { name: "Cloud Watch Story", description: "Lie down and describe shapes of clouds as imaginary animals or objects.", materials: "Open sky" }
          ],
          "Air": [
            { name: "Paper Fan Breeze", description: "Children make simple fans with folded paper and use them to feel air on their faces.", materials: "A4 or scrap paper" },
            { name: "Blow the Ball", description: "Place a light plastic ball on a table. Children blow it gently to move it from one point to another.", materials: "Plastic ball" },
            { name: "Air Balloon Tap", description: "Blow up a balloon and let children tap it in the air without letting it fall.", materials: "Balloon" },
            { name: "Tissue Dance", description: "Hang light tissue strips and turn on a fan. Children watch how air makes them move.", materials: "Tissue strips, fan" },
            { name: "Straw Blow Painting", description: "Children blow paint drops on paper using straws, watching how air spreads the color.", materials: "Straw, watery paint, paper" },
            { name: "Whistle Time", description: "Give each child a simple whistle or let them make one using paper to understand air flow.", materials: "Paper or whistles" },
            { name: "Air-Filled Bag Squeeze", description: "Trap air in a small plastic bag and let kids press it to feel resistance.", materials: "Ziplock or light plastic bag" },
            { name: "Blow and Race", description: "Children blow buttons or paper balls across the table like a race.", materials: "Buttons or paper, table" },
            { name: "Paper Helicopter Drop", description: "Drop paper spinners from height and watch how air slows them down.", materials: "Scrap paper, scissors" },
            { name: "Wind and Leaves", description: "Use a fan or blow air to move cut-out leaves and watch which direction they go.", materials: "Fan, paper leaves" },
            { name: "Air Guess Game", description: "Blow gently on different body parts (hand, cheek, ear) and ask child to guess where they feel air.", materials: "No materials" },
            { name: "Air Fills Balloon", description: "Demonstrate how air fills a balloon. Let each child try to inflate one.", materials: "Balloons" },
            { name: "Parachute Drop", description: "Create small parachutes using cloth and thread, and drop from height.", materials: "Old cloth, string" },
            { name: "Kite Talk", description: "Use mini paper kites indoors and talk about how air helps them fly.", materials: "Scrap paper, stick, string" },
            { name: "Candle and Air (Teacher-led)", description: "Demonstrate how blowing puts out a candle to explain air's movement.", materials: "Candle (teacher-led only)" },
            { name: "Air Drum", description: "Make drums using tin boxes and stretch paper over the top. Air vibrations make sound!", materials: "Empty tin, paper" },
            { name: "Pinwheel Craft", description: "Children create pinwheels that spin when they blow on them.", materials: "Paper, straw/stick, pin" },
            { name: "Bubbles Fun", description: "Children blow bubbles and chase them, observing air movement.", materials: "Soap water, bubble stick" },
            { name: "Hair Dryer Demo", description: "Teacher uses a hairdryer on low to show air movement (teacher-led).", materials: "Hair dryer" },
            { name: "Air Sound Hunt", description: "Children close eyes and try to hear air sounds: fan, blowing, rustling.", materials: "Fan, paper, cloth" }
          ],
          "Water": [
            { name: "Water Pouring Practice", description: "Children pour water from one cup to another for control and understanding flow.", materials: "Cups, water" },
            { name: "Sponge Squeeze", description: "Give sponges soaked in water and let children squeeze into bowls.", materials: "Sponges, water, bowl" },
            { name: "Float or Sink", description: "Test which objects float or sink in water.", materials: "Bowl of water, clay, buttons, plastic balls" },
            { name: "Water Drop Race", description: "Children use droppers to transfer water drop by drop into marked cups.", materials: "Droppers, cups, water" },
            { name: "Cloth Drying Game", description: "Children dip cloths and hang them to dry.", materials: "Old cloth, string" },
            { name: "Color Mixing", description: "Use food coloring or watercolors in water to show how colors mix.", materials: "Water, watercolor/food color" },
            { name: "Ice Cube Painting", description: "Use colored ice cubes to paint on paper.", materials: "Ice cubes, food color, paper" },
            { name: "Bubble Play", description: "Blow soap bubbles in a basin and let children pop them.", materials: "Soap water, basin" },
            { name: "Water Transfer with Spoon", description: "Children carry water in a spoon from one bowl to another.", materials: "Spoon, bowls" },
            { name: "Match the Drop Sound", description: "Let children drop water on different surfaces and listen to the sound.", materials: "Water, metal plate, paper, cloth" },
            { name: "Watering Plants", description: "Children take turns watering small potted plants.", materials: "Water, mug/cup, plant" },
            { name: "Hand Wash Demo", description: "Teach children proper hand washing using water and soap.", materials: "Soap, water" },
            { name: "Wet and Dry Sorting", description: "Show dry and wet cloths. Children sort them.", materials: "Old cloths" },
            { name: "Rain Cloud in a Jar (Teacher-led)", description: "Use shaving foam and colored water to mimic rain clouds.", materials: "Jar, shaving cream, water, color" },
            { name: "Raindrop Art", description: "Make fingerprint raindrops on umbrella drawings.", materials: "Paper, paint" },
            { name: "Wash the Toys", description: "Children clean their plastic toys in a tub of soapy water.", materials: "Water tub, toys, soap" },
            { name: "Water Walk", description: "Place stepping cloths dipped in water to walk across like puddles.", materials: "Cloth pieces, water" },
            { name: "Sink Washing", description: "Use a basin and cloths to let children 'wash' classroom items.", materials: "Basin, water, cloth" },
            { name: "Ice Touch", description: "Children explore melting ice with their hands and describe how it feels.", materials: "Ice cubes" },
            { name: "Water Safety Talk", description: "Simple talk and role-play about drinking clean water and not wasting it.", materials: "Pictures, cup" }
          ],
          "Physical Education": [
            { name: "Stretch Like Animals", description: "Call out animals and kids stretch like them – tall like a giraffe, wide like an elephant.", materials: "None" },
            { name: "Jump the Line", description: "Place ropes or paper strips on the ground. Children jump over them.", materials: "String or paper lines" },
            { name: "Clay Ball Toss", description: "Children make balls with clay and toss into buckets.", materials: "Clay, bucket" },
            { name: "Walk on a Line", description: "Stick a straight line with tape and ask kids to walk on it heel-to-toe.", materials: "Tape or string" },
            { name: "Balloon Balance", description: "Children balance a balloon between knees and try walking.", materials: "Balloon" },
            { name: "Marching with Music", description: "Play music and have kids march in rhythm around the room.", materials: "Bluetooth speaker" },
            { name: "Shape Forming with Bodies", description: "Call out shapes and kids use arms and legs to mimic them.", materials: "None" },
            { name: "Tiptoe Path", description: "Make a soft path and let kids walk on it tiptoed.", materials: "Old cloth pieces" },
            { name: "Arm Circles", description: "Children stretch arms and rotate in circles.", materials: "None" },
            { name: "Sit and Stand Relay", description: "Kids take turns sitting and standing quickly in response to commands.", materials: "Chairs" },
            { name: "Partner Balance", description: "Children work in pairs and balance small objects on their heads.", materials: "Button or paper ball" },
            { name: "Simon Says Fitness", description: "Play 'Simon Says' using action words (jump, stretch, bend, etc.)", materials: "None" },
            { name: "Chair Push Crawl", description: "Children push a small chair from one end to another for exercise.", materials: "Plastic chairs" },
            { name: "Ball Passing Circle", description: "Children sit in a circle and pass a ball with music playing.", materials: "Ball, Bluetooth speaker" },
            { name: "Flag Touch Race", description: "Place colored flags/paper around. Call out color and kids run to touch it.", materials: "Colored paper" },
            { name: "Clay Squish Strength", description: "Give clay and let kids squeeze, roll, and press to build hand muscles.", materials: "Clay" },
            { name: "Jumping Jack Count", description: "Do jumping jacks with counting – slowly with each jump.", materials: "None" },
            { name: "Tunnel Crawl", description: "Make a tunnel from chairs and cloth. Children crawl under.", materials: "Cloth, chairs" },
            { name: "Beanbag Balance", description: "Children walk while balancing a small item on their heads.", materials: "Paper bag or cloth beanbag" },
            { name: "Shadow Moves", description: "Play outdoors and ask children to copy their shadows' movements.", materials: "Outdoor space" }
          ]
        }
      }
    ]
  }
};

// State variables
let currentClass = null;
let currentSubject = null;
let currentVolume = null;
let currentTopic = null;
let currentActivityIndex = 0;
let currentActivities = [];

function goToClass(className) {
  currentClass = className;
  currentSubject = null;
  currentVolume = null;
  currentTopic = null;
  currentActivityIndex = 0;
  renderSubjects();
}

function renderSubjects() {
  if (!activitiesData) {
    document.getElementById('activities').innerHTML = '<p>Loading activities...</p>';
    return;
  }
  
  if (!activitiesData[currentClass]) {
    document.getElementById('activities').innerHTML = `
      <h2>Class Not Found</h2>
      <p>Activities for ${currentClass} are not available yet.</p>
      <button onclick="goToClass('nursery')" style="margin-top:1em;">Go to Nursery</button>
    `;
    return;
  }
  
  const subjects = Object.keys(activitiesData[currentClass]);
  const subjectButtons = subjects.map(subj => {
    let emoji = '';
    if (subj === 'english') emoji = '📝';
    else if (subj === 'maths') emoji = '➗';
    else if (subj === 'evs') emoji = '🌍';
    return `<button class="subject-btn" onclick="goToSubject('${subj}')">${emoji} ${capitalize(subj)}</button>`;
  }).join(' ');
  document.getElementById('activities').innerHTML = `
    <h2>Select Subject</h2>
    <div class="subject-btns">${subjectButtons}</div>
  `;
}

function goToSubject(subjectName) {
  currentSubject = subjectName;
  currentVolume = null;
  currentTopic = null;
  currentActivityIndex = 0;
  if (!activitiesData) {
    document.getElementById('activities').innerHTML = '<p>Loading activities...</p>';
    return;
  }
  renderVolumes();
}

function renderVolumes() {
  if (!activitiesData) {
    document.getElementById('activities').innerHTML = '<p>Loading activities...</p>';
    return;
  }
  const volumes = activitiesData[currentClass][currentSubject];
  const volumeButtons = volumes.map((vol, idx) => {
    let emoji = '';
    if (vol.volume === 1) emoji = '📖';
    else if (vol.volume === 2) emoji = '📚';
    else if (vol.volume === 3) emoji = '📘';
    return `<button class="volume-btn" onclick="goToVolume(${idx})">${emoji} Volume ${vol.volume}</button>`;
  }).join(' ');
  document.getElementById('activities').innerHTML = `
    <h2>Select Volume</h2>
    <div class="volume-btns">${volumeButtons}</div>
  `;
}

function goToVolume(volumeIdx) {
  currentVolume = volumeIdx;
  currentTopic = null;
  currentActivityIndex = 0;
  const volume = activitiesData[currentClass][currentSubject][currentVolume];
  const topics = volume.topics;
  renderTopics(topics);
}

function renderBackButton(onClick, label = 'Back') {
  return `<button onclick="${onClick}" style="margin-bottom:1em;display:block;">&#8592; ${label}</button>`;
}

function renderTopics(topics) {
  const topicNames = Object.keys(topics);
  const topicButtons = topicNames.map(
    topic => `<button class="subject-btn" onclick="goToTopic('${topic.replace(/'/g, "\\'")}')">${topic}</button>`
  ).join(' ');
  document.getElementById('activities').innerHTML = `
    ${renderBackButton('goBackFromTopics()', 'Back to Volumes')}
    <h2>Select Topic</h2>
    <div class="subject-btns">${topicButtons}</div>
  `;
}

function goBackFromTopics() {
  renderVolumes();
}

function goToTopic(topicName) {
  currentTopic = topicName;
  currentActivityIndex = 0;
  const volume = activitiesData[currentClass][currentSubject][currentVolume];
  const topicData = volume.topics[topicName];
  if (topicData && !Array.isArray(topicData) && typeof topicData === 'object') {
    const subtopicNames = Object.keys(topicData);
    const subtopics = subtopicNames.map(name => ({ name, activities: topicData[name] }));
    renderSubtopics(subtopics);
  } else if (Array.isArray(topicData)) {
    renderActivities(topicData);
  }
}

function renderSubtopics(subtopics) {
  const subtopicButtons = subtopics.map(
    (sub, idx) => `<button class="volume-btn" onclick="goToSubtopic(${idx})">${sub.name}</button>`
  ).join(' ');
  document.getElementById('activities').innerHTML = `
    ${renderBackButton('goBackFromSubtopics()', 'Back to Topics')}
    <h2>Select Subtopic</h2>
    <div class="volume-btns">${subtopicButtons}</div>
  `;
}

function goBackFromSubtopics() {
  const volume = activitiesData[currentClass][currentSubject][currentVolume];
  renderTopics(volume.topics);
}

function goToSubtopic(subtopicIdx) {
  const volume = activitiesData[currentClass][currentSubject][currentVolume];
  const topicData = volume.topics[currentTopic];
  const subtopicNames = Object.keys(topicData);
  const subtopics = subtopicNames.map(name => ({ name, activities: topicData[name] }));
  const subtopic = subtopics[subtopicIdx];
  renderActivities(subtopic.activities);
}

function renderActivities(activities) {
  currentActivities = activities;
  showActivityCard(currentActivityIndex, true);
  setupSwipeListeners();
}

function showActivityCard(idx, showBack = false) {
  if (!currentActivities.length) {
    document.getElementById('activities').innerHTML = '<p>No activities found.</p>';
    return;
  }
  const act = currentActivities[idx];
  document.getElementById('activities').innerHTML = `
    ${showBack ? renderBackButton('goBackFromActivities()', 'Back to ' + (currentTopic ? 'Subtopics' : 'Topics')) : ''}
    <div class="activity-card" style="max-width:400px;margin:2em auto;box-shadow:0 2px 12px #9c27b033;padding:2em 1em;border-radius:18px;position:relative;">
      <h3 style="color:#7b1fa2;">${act.name}</h3>
      <p>${act.description}</p>
      <p><strong>Materials:</strong> ${act.materials}</p>
      <div style="display:flex;justify-content:space-between;margin-top:1.5em;">
        <button onclick="prevActivity()" ${currentActivityIndex === 0 ? 'disabled' : ''} style="border-radius:50%;width:40px;height:40px;font-size:1.5em;">&#8592;</button>
        <button onclick="nextActivity()" ${currentActivityIndex === currentActivities.length - 1 ? 'disabled' : ''} style="border-radius:50%;width:40px;height:40px;font-size:1.5em;">&#8594;</button>
      </div>
    </div>
  `;
}

function goBackFromActivities() {
  const volume = activitiesData[currentClass][currentSubject][currentVolume];
  if (currentTopic && volume.topics[currentTopic] && volume.topics[currentTopic].subtopics) {
    renderSubtopics(volume.topics[currentTopic].subtopics);
  } else {
    renderTopics(volume.topics);
  }
}

function nextActivity() {
  if (currentActivities.length === 0) return;
  if (currentActivityIndex < currentActivities.length - 1) {
    currentActivityIndex++;
  } else {
    currentActivityIndex = 0;
  }
  showActivityCard(currentActivityIndex);
}

function prevActivity() {
  if (currentActivities.length === 0) return;
  if (currentActivityIndex > 0) {
    currentActivityIndex--;
  } else {
    currentActivityIndex = currentActivities.length - 1;
  }
  showActivityCard(currentActivityIndex);
}

function setupSwipeListeners() {
  const container = document.getElementById('activities');
  let startX = null;
  container.ontouchstart = function(e) {
    if (e.touches.length === 1) {
      startX = e.touches[0].clientX;
    }
  };
  container.ontouchend = function(e) {
    if (startX !== null && e.changedTouches.length === 1) {
      const endX = e.changedTouches[0].clientX;
      if (endX - startX < -50) {
        nextActivity();
      } else if (endX - startX > 50) {
        prevActivity();
      }
      startX = null;
    }
  };
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Search functionality
let searchResults = [];
let isListening = false;
let recognition = null;

// Initialize speech recognition
function initSpeechRecognition() {
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    recognition.onstart = function() {
      isListening = true;
      document.getElementById('voiceSearchBtn').classList.add('listening');
      showVoiceStatus('Listening... Speak now!');
    };
    
    recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript.toLowerCase();
      document.getElementById('searchBar').value = transcript;
      performSearch(transcript);
      stopListening();
    };
    
    recognition.onerror = function(event) {
      console.error('Speech recognition error:', event.error);
      showVoiceStatus('Error: ' + event.error);
      stopListening();
    };
    
    recognition.onend = function() {
      stopListening();
    };
  } else {
    console.log('Speech recognition not supported');
    document.getElementById('voiceSearchBtn').style.display = 'none';
  }
}

function stopListening() {
  isListening = false;
  document.getElementById('voiceSearchBtn').classList.remove('listening');
  hideVoiceStatus();
  if (recognition) {
    recognition.stop();
  }
}

function showVoiceStatus(message) {
  const status = document.getElementById('voiceStatus');
  status.textContent = message;
  status.classList.add('show');
}

function hideVoiceStatus() {
  const status = document.getElementById('voiceStatus');
  status.classList.remove('show');
}

// Voice search button click handler
function toggleVoiceSearch() {
  if (!recognition) {
    showVoiceStatus('Voice search not supported');
    return;
  }
  
  if (isListening) {
    stopListening();
  } else {
    recognition.start();
  }
}

// Text search functionality
function performSearch(query) {
  if (!query.trim()) {
    hideSearchResults();
    return;
  }
  
  searchResults = [];
  const searchTerm = query.toLowerCase();
  
  // Search through all activities data for TOPICS only
  Object.keys(activitiesData).forEach(className => {
    Object.keys(activitiesData[className]).forEach(subjectName => {
      activitiesData[className][subjectName].forEach(volume => {
        Object.keys(volume.topics).forEach(topicName => {
          const topic = volume.topics[topicName];
          
          // Search in topic name only
          if (topicName.toLowerCase().includes(searchTerm)) {
            searchResults.push({
              type: 'topic',
              className: className,
              subjectName: subjectName,
              volume: volume.volume,
              topicName: topicName,
              match: topicName
            });
          }
          
          // Search in subtopics if they exist
          if (typeof topic === 'object' && !Array.isArray(topic)) {
            Object.keys(topic).forEach(subtopicName => {
              if (subtopicName.toLowerCase().includes(searchTerm)) {
                searchResults.push({
                  type: 'subtopic',
                  className: className,
                  subjectName: subjectName,
                  volume: volume.volume,
                  topicName: topicName,
                  subtopicName: subtopicName,
                  match: subtopicName
                });
              }
            });
          }
        });
      });
    });
  });
  
  displaySearchResults();
}

function displaySearchResults() {
  const searchWrapper = document.querySelector('.search-wrapper');
  let existingResults = document.querySelector('.search-results');
  
  if (existingResults) {
    existingResults.remove();
  }
  
  if (searchResults.length === 0) {
    return;
  }
  
  const resultsDiv = document.createElement('div');
  resultsDiv.className = 'search-results';
  
  // Limit results to first 10
  const limitedResults = searchResults.slice(0, 10);
  
  limitedResults.forEach(result => {
    const resultItem = document.createElement('div');
    resultItem.className = 'search-result-item';
    
    let title = '';
    let details = '';
    
    switch (result.type) {
      case 'topic':
        title = `${result.topicName}`;
        details = `${capitalize(result.className)} • ${capitalize(result.subjectName)} • Volume ${result.volume}`;
        break;
      case 'subtopic':
        title = `${result.subtopicName}`;
        details = `${capitalize(result.className)} • ${capitalize(result.subjectName)} • ${result.topicName} • Volume ${result.volume}`;
        break;
      case 'activity':
        title = `${result.activity.name}`;
        details = `${capitalize(result.className)} • ${capitalize(result.subjectName)} • ${result.topicName} • Volume ${result.volume}`;
        break;
    }
    
    resultItem.innerHTML = `
      <div class="result-title">${title}</div>
      <div class="result-details">${details}</div>
    `;
    
    resultItem.addEventListener('click', () => {
      navigateToResult(result);
      hideSearchResults();
    });
    
    resultsDiv.appendChild(resultItem);
  });
  
  searchWrapper.appendChild(resultsDiv);
}

function hideSearchResults() {
  const existingResults = document.querySelector('.search-results');
  if (existingResults) {
    existingResults.remove();
  }
}

function navigateToResult(result) {
  // Navigate to the specific result
  currentClass = result.className;
  currentSubject = result.subjectName;
  
  // Find the volume index
  const volumes = activitiesData[currentClass][currentSubject];
  const volumeIndex = volumes.findIndex(v => v.volume === result.volume);
  currentVolume = volumeIndex;
  
  // Navigate to the appropriate level
  if (result.type === 'topic') {
    currentTopic = result.topicName;
    renderTopics(volumes[volumeIndex].topics);
  } else if (result.type === 'subtopic') {
    currentTopic = result.topicName;
    const volume = volumes[volumeIndex];
    const topicData = volume.topics[currentTopic];
    const subtopicNames = Object.keys(topicData);
    const subtopics = subtopicNames.map(name => ({ name, activities: topicData[name] }));
    const subtopicIndex = subtopics.findIndex(s => s.name === result.subtopicName);
    if (subtopicIndex !== -1) {
      renderActivities(subtopics[subtopicIndex].activities);
    }
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  initSpeechRecognition();
  
  // Text search
  const searchBar = document.getElementById('searchBar');
  let searchTimeout;
  
  searchBar.addEventListener('input', function() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(this.value);
    }, 300);
  });
  
  searchBar.addEventListener('focus', function() {
    if (this.value.trim()) {
      performSearch(this.value);
    }
  });
  
  // Voice search
  const voiceSearchBtn = document.getElementById('voiceSearchBtn');
  voiceSearchBtn.addEventListener('click', toggleVoiceSearch);
  
  // Hide search results when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-wrapper') && !e.target.closest('.voice-search-btn')) {
      hideSearchResults();
    }
  });
  
  // Clear search on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      hideSearchResults();
      searchBar.value = '';
    }
  });
});

function searchActivities() {
  // Legacy function - now handled by performSearch
  const searchBar = document.getElementById('searchBar');
  performSearch(searchBar.value);
}
