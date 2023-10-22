export type OverviewProps = {
  descriptionMovie: string;
  rating: string;
  descriptionRating: 'Bad' | 'Normal' | 'Good' | 'Very good' | 'Awesome';
  countRating: string;
  director: string;
  actorsList: string;
  id: number;
}

export const overviewMovie: OverviewProps[] = [{
  descriptionMovie: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave\'s friend and protege.\n' +
    '\n' +
    'Gustave prides himself on providing first-class service to the hotel\'s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave\'s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.',
  rating: '8.9',
  descriptionRating: 'Very good',
  countRating: '24083 rating',
  director: ' Wes Anderson',
  actorsList: 'Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other',
  id: 1
}, {
  descriptionMovie: 'Bohemian Rhapsody is a 2018 biographical musical drama film that focuses on the life of Freddie Mercury, the lead singer of the British rock band Queen, from the formation of the band in 1970 to their 1985 Live Aid performance at the original Wembley Stadium.',
  rating: '8.0',
  descriptionRating: 'Very good',
  countRating: '46540 rating',
  director: 'Bryan Singer',
  actorsList: 'Rami Malek,Lucy Boynton, Gwilym Lee, Ben Hardy and other',
  id: 2
}, {
  descriptionMovie: 'Macbeth is a 2015 epic historical drama film directed by Justin Kurzel and written for the screen by Todd Louiso, Jacob Koskoff, and Michael Lesslie, based on William Shakespeare\'s eponymous play.',
  rating: '7.1',
  descriptionRating: 'Good',
  countRating: '34892 rating',
  director: 'Iain Canning',
  actorsList: 'Michael Fassbender, Marion Cotillard, Paddy Considine and other',
  id: 3
}, {
  descriptionMovie: 'The Aviator is a 2004 epic biographical drama film directed by Martin Scorsese and written by John Logan. ',
  rating: '7.6',
  descriptionRating: 'Good',
  countRating: '52358 rating',
  director: 'Michael Mann',
  actorsList: ' Leonardo DiCaprio, Cate Blanchett, Kate Beckinsale and other',
  id: 4
}, {
  descriptionMovie: 'We Need to Talk About Kevin is a 2011 psychological thriller drama film directed by Lynne Ramsay from a screenplay she co-wrote with Rory Stewart Kinnear, based on the 2003 novel of the same name by Lionel Shriver. A long process of development and financing began in 2005, with filming commencing in April 2010.',
  rating: '7.2',
  descriptionRating: 'Good',
  countRating: '32356 rating',
  director: 'Lynne Ramsay',
  actorsList: 'Tilda Swinton, John C. Reilly, Ezra Miller',
  id: 5
}, {
  descriptionMovie: 'What We Do in the Shadows is a 2014 New Zealand mockumentary horror comedy film written and directed by Jemaine Clement and Taika Waititi and the first installment in the What We Do in the Shadows franchise. ',
  rating: '7.5',
  descriptionRating: 'Good',
  countRating: '35632 rating',
  director: 'Jemaine Clement and Taika Waititi',
  actorsList: 'Taika Waititi, Jemaine Clement, Jonathan Brugh and other',
  id: 6
}, {
  descriptionMovie: 'The Revenant is a 2015 American Western action drama film directed by Alejandro G. Iñárritu. The screenplay by Mark L. Smith and Iñárritu is based in part on Michael Punke\'s 2002 novel The Revenant, which describes frontiersman Hugh Glass\'s experiences in 1823, and which is based on the 1915 poem The Song of Hugh Glass. The film stars Leonardo DiCaprio and Tom Hardy.',
  rating: '7.8',
  descriptionRating: 'Good',
  countRating: '89882 rating',
  director: 'Alejandro G. Iñárritu',
  actorsList: 'Leonardo DiCaprio and Tom Hardy.',
  id: 7
}, {
  descriptionMovie: 'Johnny English is a 2003 spy action comedy film directed by Peter Howitt and written by Neal Purvis, Robert Wade and William Davies. It is a British-French venture produced by StudioCanal and Working Title Films, and distributed by Universal Pictures.',
  rating: '6.7',
  descriptionRating: 'Good',
  countRating: '23094 rating',
  director: 'Peter Howitt',
  actorsList: ' Rowan Atkinson, Natalie Imbruglia, Ben Miller and John Malkovich',
  id: 8
}];
