import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { ButtonStyle, ContainerBuilder, MessageFlags, StringSelectMenuBuilder } from 'discord.js';

@ApplyOptions<Command.Options>({
    description: 'Manage Issue'
})
export class UserCommand extends Command {
    public override registerApplicationCommands(registry: Command.Registry) {
        registry.registerChatInputCommand((builder) =>
            builder //
                .setName(this.name)
                .setDescription(this.description)
        );
    }

    public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
        const exampleContainer = new ContainerBuilder()
            .setAccentColor(0xeb3489)
            .addTextDisplayComponents((textDisplay) =>
                textDisplay.setContent("This is the title!")
            )
            .addActionRowComponents((row) =>
                row.addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('select')
                        .setPlaceholder('Select')
                        .setRequired(true)
                        .addOptions([
                            { label: 'A', value: 'a' },
                            { label: 'B', value: 'b' },
                            { label: 'C', value: 'c' }
                        ])
                )
            )
            .addSeparatorComponents((sep) => sep)
            .addSectionComponents((section) =>
                section.addTextDisplayComponents((td) => td.setContent("a Section"))
                    .setButtonAccessory((btn) => btn.setCustomId('button').setLabel('Click me').setStyle(ButtonStyle.Primary))
            )

        return interaction.reply({ components: [exampleContainer], flags: MessageFlags.IsComponentsV2 });
    }
}
