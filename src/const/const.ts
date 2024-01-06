export enum APIRoute {
    Films = '/films',
}

export enum APIRoute {
    Login = '/login',
    Logout = '/logout',
}

export const COUNT_SIMILAR_MOVIES = 4;

export enum NameSpace {
    Genre = 'GENRE',
    Film = 'FILM',
    User = 'USER',
}

export const SignInError = {
  InvalidEmail: 'Please enter a valid email address.',
  InvalidPassword: 'Please use at least one number and one letter in your password',
} as const;

export const ValidationPattern = {
  Email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  Password: /([0-9].*[a-zA-Z])|([a-zA-Z].*[0-9])/,
} as const;

const RATINGVALUE = {
  BAD: 3,
  NORMAL: 5,
  GOOD: 8,
  VERY_GOOD: 10,
};
export function FilmRatingLevel(rating: number | undefined): string {
  if (rating === undefined) {
    return 'No rating';
  }
  if (rating < RATINGVALUE.BAD) {
    return 'Bad';
  }
  if (RATINGVALUE.BAD <= rating && rating < RATINGVALUE.NORMAL) {
    return 'Normal';
  }
  if (RATINGVALUE.NORMAL <= rating && rating < RATINGVALUE.GOOD) {
    return 'Good';
  }
  if (RATINGVALUE.GOOD <= rating && rating < RATINGVALUE.VERY_GOOD) {
    return 'Very good';
  }
  if (rating >= RATINGVALUE.VERY_GOOD) {
    return 'Awsome';
  }
  return 'No rating';
}
