<template>
  <div class="worked-on">
    <ul>
      <li>
        <div v-html="link('bloomstays.com')"></div>
      </li>
      <li>
        <div v-html="link('www.discovermetis.com')"></div>
      </li>
      <li>
        <div v-html="link('uberem.com.ua')"></div>
      </li>
      <li>
        <div v-html="link('my.uberem.com.ua')"></div>
      </li>
      <li>
        <div v-html="link('cleaners.uberem.com.ua')"></div>
      </li>
      <li>
        <div v-html="link('crm.uberem.com.ua')"></div>
      </li>
      <li>
        <div v-html="link('rud.thinkdemo.co.uk')"></div>
      </li>
      <li>
        <div v-html="link('kateandtoms.think.studio')"></div>
      </li>
      <li>
        <div v-html="link('fmc-advertisers.think.studio')"></div>
      </li>
      <li>
        <div v-html="link('fmc.think.studio')"></div>
      </li>
      <li>
        <div v-html="link('classroom.baileybalfour.com')"></div>
      </li>
      <li>
        <div v-html="link('succeedpartnership.co.uk')"></div>
      </li>
      <li>
        <div v-html="link('uc2f.co.uk', '- support')"></div>
      </li>
      <li>
        <div v-html="link('theboatmansreadingrooms.com', '- back sync support')"></div>
      </li>
      <li>
        <div v-html="link('georgeroberts.com', '- back sync support')"></div>
      </li>
      <li>
        <div v-html="link('rxphoto.com', '- rxphoto integration')"></div>
      </li>
      <li>
        <div v-html="link('theyard.com', '- support')"></div>
      </li>
      <li>
        <div v-html="link('andersen-ev.com', '- support')"></div>
      </li>
      <li>
        <div v-html="link('www.mjhudson.com', '- team part')"></div>
      </li>
      <li>
        <div v-html="link('www.fl3xx.com', '- support')"></div>
      </li>
      <li>
        <div v-html="link('www.nadesigns.co.il', '- support')"></div>
      </li>
      <li>
        <div v-html="link('passendo.com', '- team part')"></div>
      </li>
      <li>
        <div v-html="link('www.thinkjuice.com', '- team part')"></div>
      </li>
      <li>
        <div v-html="link('www.trium-capital.com')"></div>
      </li>
      <li>
        <div v-html="link('pathmap.ca')"></div>
      </li>
      <li>
        <div v-html="link('pathmap.globalcyberspace.club', '- compass')"></div>
      </li>
      <li>
        <div v-html="link('kealink.com')"></div>
      </li>
      <li>
        ... and multiple others
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    link(domain, label = '') {
      return `<a href="https://${domain}" style="display: flex; align-items: center"><img src="https://s2.googleusercontent.com/s2/favicons?domain=${domain}&sz=32" />&nbsp;${domain} ${label}</a>`;
    },
  },
};
</script>
