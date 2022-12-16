// Fortæller programmet, at disse variable referer og skal bruge discord.js
const { Client, Events, GatewayIntentBits } = require('discord.js');
// Her sætter vi intents i botten, som fortæller hvilke rettigheder vi giver den.
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildVoiceStates,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent] });
// Skriver i vores konsol når vi logger ind
  client.on('ready', () => {
    console.log(`Logget ind som: ${client.user.tag}! Vi er klar til Rock'n'Roll`);
  });

// Fortæller at når der bliver lavet en besked skal den starte en funktion
client.on('messageCreate', message => {
  // Skriver i konsolen når dette event er gået igennem (Bruges til fejlsøgning)
  console.log("MessageEvent Godkendt ");
  // Fortæller at hvis beskeden starter med !move, så skal den gøre følgende
  if (message.content.startsWith('!move')) {
    // Skriver i konsolen, når dette event er gået igennem (Bruges til fejlsøgning)
    console.log("MoveCommand Godkendt ")
    // Modtager @role og #!Channel fra beskeden
    const role = message.mentions.roles.first();
    const channel = message.mentions.channels.first();

    // Tjekker at der blev nævnt en @role og #!Channel
    if (role && channel) {
      // Finder de medlemmer der har den nævnte Rolle
      const members = message.guild.members.cache.filter(m => m.roles.cache.has(role.id));

      // Flytter hver medlem med rollen til den nævnte kanal
      members.forEach(member => {
        member.voice.setChannel(channel);
      });
    }
  }
});

// Login på botten
client.login('MTA1MTkyNjMwNTUwNTAzMDIwNA.GJKRxI.I6PZMj2xQzlXB1HjGekQ4p9WKtGejdBh6gM6JU');