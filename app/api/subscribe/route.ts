import mailchimp from "@mailchimp/mailchimp_marketing";
import { NextResponse } from "next/server";

// configuration de mailchimp
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY!,
  server: process.env.MAILCHIMP_API_SERVER!,
});

// route pour l'api

export async function POST(request: Request) {
  try {
    // récupération de l'email
    const email = await request.json();

    // Vérification si l'email contient une adresse mail
    if (!email) {
      return NextResponse.json(
        { error: "Email manquant et est obligatoire" },
        { status: 400 }
      );
    }

    // ajout de l'email à la liste de diffusion
    const response = await mailchimp.lists.addListMember(

      // où mettre le membre
      process.env.MAILCHIMP_AUDIENCE_ID!,
      {email_address: email, status: "subscribed"}
    );

    return NextResponse.json(
      { message: "L'adresse email a bien été inscrite", data: response },
      { status: 200 }
    )

  } catch (error) {
    return NextResponse.json(
      { error: "Cette adresse email est déjà inscrite ou n'existe pas" },
      { status: 500 }
    );
    console.log(error);
  }
}
