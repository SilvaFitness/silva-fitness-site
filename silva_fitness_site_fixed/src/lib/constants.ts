import type { GoogleReviewsResponse } from '#/lib/reviews'

export const GOOGLE_FORMS_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdVFFt_QqwLEJXQheTJS1wyA9a3jnryoicpbFDeBJHwlHg_HA/viewform?usp=pp_url'

export const FALLBACK_REVIEWS: GoogleReviewsResponse = {
  rating: 5,
  user_ratings_total: 5,
  reviews: [
    {
      author_name: 'Carmen Sprus',
      rating: 5,
      text: 'Gilson provides a wide range of knowledge, exercises and is a great person who motivates me to train every morning again and again. He is not only very patient but also flexibel which makes it very easy for me to stick with my trainings schedule. I am convinced that I reach further goals with him and look already forward to the next training sessions with him.',
      relative_time_description: '3 years ago',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a/ACg8ocJUWRT_c4jmreHGrgkVQ_YAooBSdQvDPIqQsKlYUH-vqCfVAw=s128-c0x00000000-cc-rp-mo',
    },
    {
      author_name: 'Ahmad Horani',
      rating: 5,
      text: 'A friend , a coach, and a smart person,  i really appreciate it\nThank you',
      relative_time_description: '3 years ago',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/ALV-UjWQRsk97iaS5hyqR80WkkZ-44e8sIj1EHroKmuUSe4KWNaImne2=s128-c0x00000000-cc-rp-mo-ba2',
    },
    {
      author_name: 'Salomé Valente',
      rating: 5,
      text: 'O SilvaFitness é excelente para treinar (no meu caso, para aprender) boxe e manter a forma física! O Gilson é super simpático, sabe motivar um "atleta", o que torna os treinos desafiantes mas sempre com boa energia e muito profissional. O treino é individual e personalizado "à medida".\nO espaço é acolhedor e tem tudo o que é necessário para um treino completo e dinâmico.\nRecomendo a quem procura uma rotina de exercício físico com um acompanhamento dedicado e motivador !',
      relative_time_description: '7 months ago',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a/ACg8ocL8QPLLUR5toe6YqrTpLbt1rm6Zkbd-f1M4Tc_xDeEPjCo4wA=s128-c0x00000000-cc-rp-mo',
    },
    {
      author_name: 'Andreia Martinho',
      rating: 5,
      text: 'O Gilson é um profissional muito dedicado e os seus treinos marcam pelo respeito da individualidade de cada atleta. Recomendo a quem pretenda um treino personalizado e na tranquilidade de um espaço acolhedor.  Os resultados são visíveis!',
      relative_time_description: '7 months ago',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/ALV-UjUaz64cgMKmwDjsaL4a3XdqwEB3fQLkZm0buSFCAltHCwvP4Z1I=s128-c0x00000000-cc-rp-mo',
    },
    {
      author_name: 'Eduardo Nascimento',
      rating: 5,
      text: 'Por experiência pessoal, os treinos de boxe são muito dinâmicos e intensos criando vários tipos combinações. Não esquece o aquecimento e alongamento. O prof Gilson é capaz de ensinar com clareza e boa disposição a alunos dos mais diferentes níveis de aprendizagem e faixas etárias sem esquecer o incentivo.\nPS. Obrigado ainda por segurares os plastrons para mim e vice versa. Abraço',
      relative_time_description: '4 years ago',
      profile_photo_url:
        'https://lh3.googleusercontent.com/a-/ALV-UjVmIqqLukgm-VVY2j_eZS70gSt3F48rXVNsXfBmfRt3k-uBp1LxxQ=s128-c0x00000000-cc-rp-mo-ba2',
    },
  ],
}
