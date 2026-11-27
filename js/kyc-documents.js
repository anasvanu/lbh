/**
 * LBH Bullion - Official KYC Document Generator & Print Engine
 * Strictly aligned with uploaded Word templates.
 * Unnecessary boilerplate removed. Clean, neat, and authentic.
 */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getVal(form, name, fallback = '______________________________') {
  if (!form) return fallback;
  const input = form.querySelector(`[name="${name}"]`);
  if (!input) return fallback;
  const val = input.value.trim();
  return val ? escapeHtml(val) : fallback;
}

function getRadioVal(form, name, fallback = 'NO') {
  if (!form) return fallback;
  const input = form.querySelector(`[name="${name}"]:checked`);
  return input ? input.value : fallback;
}

function getTodayFormatted() {
  const d = new Date();
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

/**
 * Builds the exact document HTML strictly following the uploaded Word templates.
 */
function buildDocumentInnerHtml(type) {
  const dateStr = getTodayFormatted();

  // 1. AUTHORIZATION LETTER (matches Authorisation_Letter.docx)
  if (type === 'auth') {
    const form = document.getElementById('online-form-auth');
    const company = getVal(form, 'client_company', '[Insert Client name]');
    const signatory = getVal(form, 'signatory_name', '------------------------------');
    const nationality = getVal(form, 'signatory_nationality', '-----------------');
    const passport = getVal(form, 'signatory_passport', '---------------');
    const eid = getVal(form, 'signatory_eid', '----------------------');

    const off1Name = getVal(form, 'officer1_name', '');
    const off1Pass = getVal(form, 'officer1_passport', '');
    const off1Contact = getVal(form, 'officer1_contact', '');

    const off2Name = getVal(form, 'officer2_name', '');
    const off2Pass = getVal(form, 'officer2_passport', '');
    const off2Contact = getVal(form, 'officer2_contact', '');

    const off3Name = getVal(form, 'officer3_name', '');
    const off3Pass = getVal(form, 'officer3_passport', '');
    const off3Contact = getVal(form, 'officer3_contact', '');

    let tableRows = `
      <tr>
        <td style="border: 1px solid #000; padding: 6px; text-align: center;">1.</td>
        <td style="border: 1px solid #000; padding: 6px;">${off1Name || '&nbsp;'}</td>
        <td style="border: 1px solid #000; padding: 6px;">${off1Pass || '&nbsp;'}</td>
        <td style="border: 1px solid #000; padding: 6px; text-align: center;">${off1Name ? '____________________' : '&nbsp;'}</td>
        <td style="border: 1px solid #000; padding: 6px;">${off1Contact || '&nbsp;'}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #000; padding: 6px; text-align: center;">2.</td>
        <td style="border: 1px solid #000; padding: 6px;">${off2Name || '&nbsp;'}</td>
        <td style="border: 1px solid #000; padding: 6px;">${off2Pass || '&nbsp;'}</td>
        <td style="border: 1px solid #000; padding: 6px; text-align: center;">${off2Name ? '____________________' : '&nbsp;'}</td>
        <td style="border: 1px solid #000; padding: 6px;">${off2Contact || '&nbsp;'}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #000; padding: 6px; text-align: center;">3.</td>
        <td style="border: 1px solid #000; padding: 6px;">${off3Name || '&nbsp;'}</td>
        <td style="border: 1px solid #000; padding: 6px;">${off3Pass || '&nbsp;'}</td>
        <td style="border: 1px solid #000; padding: 6px; text-align: center;">${off3Name ? '____________________' : '&nbsp;'}</td>
        <td style="border: 1px solid #000; padding: 6px;">${off3Contact || '&nbsp;'}</td>
      </tr>
    `;

    return `
      <div style="text-align: center; font-weight: bold; font-size: 14pt; margin-bottom: 25px; border-bottom: 1px solid #333; padding-bottom: 8px;">
        COMPANY LETTER HEAD
      </div>

      <div style="margin-bottom: 18px; font-size: 11pt;">
        Date: <u>${dateStr}</u>
      </div>

      <p style="margin-bottom: 12px; font-size: 11pt;">Dear Sir/Madam,</p>

      <div style="font-weight: bold; font-size: 11.5pt; margin-bottom: 15px;">
        Sub: Authorization letter
      </div>

      <p style="text-align: justify; line-height: 1.6; font-size: 11pt; margin-bottom: 14px;">
        I, undersigned. Mr <strong><u>${signatory}</u></strong>, <strong><u>${nationality}</u></strong> nationality, holding passport holder no. <strong><u>${passport}</u></strong> and Emirates Id No <strong><u>${eid}</u></strong>, is the authorized signatory of <strong><u>${company}</u></strong>. I hereby authorize the following personnel individually to operate our account with <strong>LBH Bullion Gold Trading L.L.C</strong>.
      </p>

      <p style="font-size: 11pt; margin-bottom: 8px;">They have fully authority to:</p>
      <ul style="font-size: 10.5pt; line-height: 1.6; margin-top: 0; margin-bottom: 16px; padding-left: 24px;">
        <li>Fix gold</li>
        <li>Deliver gold</li>
        <li>Take delivery of gold</li>
        <li>Sign all statements in connection with the delivery of gold and statement of accounts</li>
        <li>Signing / issuing receipt, vouchers, in connection with the delivery of gold and payment in such transactions.</li>
        <li>Collecting cheques and cash in connection with the delivery of gold.</li>
      </ul>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 10pt;">
        <thead>
          <tr style="background-color: #f2f2f2;">
            <th style="border: 1px solid #000; padding: 6px; width: 35px; text-align: center;">S.N</th>
            <th style="border: 1px solid #000; padding: 6px; text-align: left;">Name</th>
            <th style="border: 1px solid #000; padding: 6px; text-align: left;">Passport No.</th>
            <th style="border: 1px solid #000; padding: 6px; width: 140px; text-align: center;">Specimen Signature</th>
            <th style="border: 1px solid #000; padding: 6px; text-align: left;">Contact No.</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>

      <div style="margin-top: 35px; font-size: 11pt; line-height: 1.5;">
        <p style="margin: 0 0 45px 0;">Yours truly,</p>
        <p style="margin: 0; font-weight: bold;">Authorised signatory</p>
        <p style="margin: 4px 0 0 0;">${company}</p>
      </div>
    `;
  }

  // 2. DECLARATION SOURCE OF FUNDS (matches DECLARATION_SOURCE_OF_FUNDS-_CORPORATE.docx)
  if (type === 'funds') {
    const form = document.getElementById('online-form-funds');
    const company = getVal(form, 'company_name', '(COMPANY NAME)');
    const signatory = getVal(form, 'signatory_name', 'Authorized signature’s name');
    const purpose = getVal(form, 'purpose', '(STATE THE PURPOSE)');

    return `
      <div style="margin-bottom: 18px; font-size: 11pt;">
        Date: <u>${dateStr}</u>
      </div>

      <div style="margin-bottom: 18px; font-size: 11pt; line-height: 1.4;">
        TO:<br>
        <strong>LBH Bullion Gold Trading L.L.C</strong><br>
        Office No. 403, Al Dhagaya Building, Al Ras, Deira, Dubai, UAE
      </div>

      <div style="font-weight: bold; font-size: 11.5pt; margin-bottom: 15px;">
        Subject: DECLARATION SOURCE OF FUNDS
      </div>

      <p style="margin-bottom: 12px; font-size: 11pt;">Dear Sir/Madam,</p>

      <p style="text-align: justify; line-height: 1.6; font-size: 11pt; margin-bottom: 14px;">
        We are writing this letter to confirm the source of funds that will be used for <strong><u>${purpose}</u></strong>
      </p>

      <p style="text-align: justify; line-height: 1.6; font-size: 11pt; margin-bottom: 14px;">
        The funds that I will be using for <strong><u>${purpose}</u></strong>, have been acquired through business income. We declare that the funds are legitimate and do not have any illegal origin.
      </p>

      <p style="text-align: justify; line-height: 1.6; font-size: 11pt; margin-bottom: 14px;">
        We understand that your entity has an obligation to comply with the laws and regulations on money laundering and terrorist financing. I assure you that the funds used to purchase your products are from legitimate sources.
      </p>

      <p style="text-align: justify; line-height: 1.6; font-size: 11pt; margin-bottom: 14px;">
        If necessary, I am willing to provide any additional documentation or information to support the legitimacy of the funds.
      </p>

      <p style="text-align: justify; line-height: 1.6; font-size: 11pt; margin-bottom: 14px;">
        Please inform us if you need any further clarification or information.
      </p>

      <p style="font-size: 11pt; margin-bottom: 25px;">Thank you for your understanding and cooperation.</p>

      <div style="font-size: 11pt; line-height: 1.5; margin-top: 30px;">
        <p style="margin: 0 0 45px 0;">For & on Behalf of <strong>${company}</strong></p>
        <p style="margin: 0;">___________________________</p>
        <p style="margin: 4px 0 0 0; font-weight: bold;">${signatory}</p>
        <p style="margin: 2px 0 0 0;">${company}</p>
        <p style="margin: 8px 0 0 0; color: #666; font-style: italic;">[Company stamp]</p>
      </div>
    `;
  }

  // 3. UNDERTAKING LETTER (matches UNDERTAKING_LETTER.docx)
  if (type === 'sanctions') {
    const form = document.getElementById('online-form-sanctions');
    const name = getVal(form, 'declarant_name', '----------------------------');
    const nationality = getVal(form, 'nationality', '-----------');
    const passport = getVal(form, 'passport_no', '------------------------------');
    const company = getVal(form, 'company_name', '(COMPANY NAME)');
    const signatory = getVal(form, 'signatory_name', name);

    return `
      <div style="margin-bottom: 18px; font-size: 11pt;">
        Date: <u>${dateStr}</u>
      </div>

      <div style="font-weight: bold; font-size: 12pt; text-align: center; margin-bottom: 18px;">
        Undertaking Letter
      </div>

      <div style="font-weight: bold; font-size: 11pt; margin-bottom: 15px;">
        To Whomsoever It May Concern
      </div>

      <p style="margin-bottom: 12px; font-size: 11pt;">Dear Sir,</p>

      <p style="text-align: justify; line-height: 1.65; font-size: 11pt; margin-bottom: 14px; text-indent: 20px;">
        I, <strong><u>${name}</u></strong>, <strong><u>${nationality}</u></strong> National having Passport number <strong><u>${passport}</u></strong> owner & UBO of <strong><u>${company}</u></strong> hereby confirm that neither of our entities nor any of our related parties are dealing with sanctioned countries listed by UAE, United Nations, United States, European Union, or the UK, nor Owned or controlled by, or operating as agents of the Governments of Iran, North Korea, Myanmar or Resident or domiciled in Iran, North Korea or Myanmar.
      </p>

      <p style="text-align: justify; line-height: 1.65; font-size: 11pt; margin-bottom: 14px; text-indent: 20px;">
        I hereby further confirm that all our business operations have never dealt with / won’t involve a sanctioned country (at present Iran, North Korea or Myanmar) or violate or to cause any economic or financial sanctions or trade embargoes implemented, administered or enforced by the United Arab Emirates, The United Nations, United States, European Union, United Kingdom or other relevant sanctions authorities.
      </p>

      <p style="text-align: justify; line-height: 1.65; font-size: 11pt; margin-bottom: 14px; text-indent: 20px;">
        I also confirm that neither I nor any of key person acting as nominee of any person national / residing any of the above sanctioned countries.
      </p>

      <p style="text-align: justify; line-height: 1.65; font-size: 11pt; margin-bottom: 25px; text-indent: 20px;">
        Finally, I confirm that the funds used to sale/purchase precious metals do not consist money which is derived from the proceeds of Criminal activities/or from means of any illegal sources.
      </p>

      <div style="font-size: 11pt; line-height: 1.5; margin-top: 30px;">
        <p style="margin: 0 0 5px 0;">Sincerely,</p>
        <p style="margin: 0 0 45px 0;">For & on Behalf of <strong>${company}</strong></p>
        <p style="margin: 0;">_________________________</p>
        <p style="margin: 4px 0 0 0; font-weight: bold;">${signatory}</p>
        <p style="margin: 2px 0 0 0;">${company}</p>
        <p style="margin: 8px 0 0 0; color: #666; font-style: italic;">[Company stamp]</p>
      </div>
    `;
  }

  // 4. PEP DECLARATION (matches PEP_DECLARATION.docx)
  if (type === 'pep') {
    const form = document.getElementById('online-form-pep');
    const name = getVal(form, 'pep_name', 'Name');
    const designation = getVal(form, 'pep_designation', 'Designation');
    const isPep = getRadioVal(form, 'is_pep', 'NO');
    const relatedPep = getRadioVal(form, 'related_to_pep', 'NO');
    const details = getVal(form, 'pep_details', '');

    return `
      <div style="text-align: center; font-weight: bold; font-size: 12.5pt; margin-bottom: 15px;">
        POLITICALLY EXPOSED PERSON (PEP) DECLARATION FORM
      </div>

      <p style="text-align: justify; font-size: 10pt; line-height: 1.5; margin-bottom: 10px;">
        The information in this form is collected to comply with the Anti-Money Laundering, Anti-Terrorism Financing and Proceeds of Unlawful Activities requirement.
      </p>

      <p style="text-align: justify; font-size: 10pt; line-height: 1.5; margin-bottom: 8px;">
        A politically exposed person (PEP) is an individual who is or who has been entrusted with prominent public functions domestically' or by a foreign country.
      </p>

      <p style="font-size: 10pt; margin-bottom: 6px;">Prominent public functions include the following profiles:</p>
      <ol style="font-size: 9.5pt; line-height: 1.45; margin-top: 0; margin-bottom: 10px; padding-left: 20px;">
        <li>Head of State or of Government</li>
        <li>Senior politician</li>
        <li>Senior government, judicial or military official</li>
        <li>Member of ruling royal family</li>
        <li>Senior executive of state-owned corporation I government linked company.</li>
        <li>Important political party official</li>
      </ol>

      <p style="font-size: 10pt; line-height: 1.45; margin-bottom: 14px;">
        The definition of PEP also includes immediate family members, relatives, adviser, personal adviser, or business associate of an individual stated above:
      </p>

      <div style="margin-bottom: 12px; font-size: 10.5pt;">
        <strong>1. Are you a PEP?</strong> &nbsp;&nbsp;&nbsp;&nbsp;
        <strong>${isPep === 'YES' ? '[X] YES' : '[ &nbsp; ] YES'}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
        <strong>${isPep === 'NO' ? '[X] NO' : '[ &nbsp; ] NO'}</strong>
      </div>

      <div style="margin-bottom: 12px; font-size: 10.5pt;">
        <strong>2. Is you or the entity related to a PEP?</strong> &nbsp;&nbsp;&nbsp;&nbsp;
        <strong>${relatedPep === 'YES' ? '[X] YES' : '[ &nbsp; ] YES'}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
        <strong>${relatedPep === 'NO' ? '[X] NO' : '[ &nbsp; ] NO'}</strong>
      </div>

      <p style="font-size: 9pt; color: #444; margin-bottom: 6px; font-style: italic;">
        (Please fill the below questions if the first two questions you answered - yes)
      </p>

      <p style="font-size: 10pt; margin-bottom: 6px;">3. If you are or related to a PEP, please indicate the profile and relationship to you:</p>
      <div style="font-size: 9.5pt; line-height: 1.4; margin-bottom: 12px; padding-left: 15px;">
        A. Head of State or of Government<br>
        B. Senior politician<br>
        C. Senior government, judicial or military official<br>
        D. Member of ruling royal family<br>
        E. Senior executive of state-owned corporation I Government linked company<br>
        F. Important political party official<br>
        G. Other ${details ? `: <strong><u>${details}</u></strong>` : ''}
      </div>

      <p style="font-size: 10pt; line-height: 1.5; margin-bottom: 20px; text-align: justify;">
        I hereby declare that the details and information given above are complete and true to the best of my knowledge.
      </p>

      <div style="font-size: 10.5pt; line-height: 1.6; margin-top: 25px;">
        <div>Name: <strong>${name}</strong></div>
        <div>Designation: <strong>${designation}</strong></div>
        <div>Signature: __________________________</div>
        <div>Date: <u>${dateStr}</u></div>
      </div>
    `;
  }

  // 5. SUPPLY CHAIN POLICY & UNDERTAKING (matches SUPPLY_CHAIN_POLICY_-_DECLARATION_AND_UNDERTAKING.docx)
  if (type === 'supply') {
    const form = document.getElementById('online-form-supply');
    const company = getVal(form, 'company_name', '[COMPANY NAME]');
    const signatory = getVal(form, 'signatory_name', 'Name & Title');

    return `
      <div style="text-align: center; font-weight: bold; font-size: 13pt; margin-bottom: 18px;">
        SUPPLY CHAIN POLICY & UNDERTAKING
      </div>

      <p style="text-align: justify; font-size: 10pt; line-height: 1.55; margin-bottom: 12px;">
        <strong>${company}</strong> is committed to conducting all business activities with integrity, transparency, and adherence to the highest ethical and professional standards. We recognize our shared responsibility with all counterparties to maintain a conflictfree, responsible, and transparent supply chain. Our company fully aligns with and commits to the OECD Due Diligence Guidance for Responsible Supply Chains of Minerals from ConflictAffected and HighRisk Areas, the LBMA Responsible Gold Guidance, the Responsible Minerals Initiative (RMI), the World Gold Council ConflictFree Gold Standard, and all applicable UAE Ministry of Economy (MOEC) legislations and regulatory requirements for supply chain responsible sourcing of precious metals and stones.
      </p>

      <div style="font-weight: bold; font-size: 10.5pt; margin-bottom: 6px;">OUR COMMITMENTS</div>

      <div style="font-weight: bold; font-size: 10pt; margin-bottom: 4px;">Zero Tolerance for Human Rights Violations</div>
      <p style="font-size: 9.5pt; line-height: 1.45; margin: 0 0 10px 0; text-align: justify;">
        ${company} shall neither participate in nor benefit from any form of human rights abuse, including inhumane treatment, forced labor, child labor, human trafficking, or any criminal activity. Immediately suspend or discontinue engagement with any supplier where a reasonable risk is identified that their operations are linked to such abuses.
      </p>

      <div style="font-weight: bold; font-size: 10pt; margin-bottom: 4px;">No Support to NonState Armed Groups</div>
      <p style="font-size: 9.5pt; line-height: 1.45; margin: 0 0 10px 0; text-align: justify;">
        We strictly prohibit any direct or indirect support to nonstate armed groups through mineral procurement, logistics, payments, or illegal control of mine sites and transport routes. Where such risks are identified, ${company} will immediately cease transactions with the upstream supplier.
      </p>

      <div style="font-weight: bold; font-size: 10pt; margin-bottom: 4px;">Promotion of Responsible Sourcing Practices</div>
      <p style="font-size: 9.5pt; line-height: 1.45; margin: 0 0 10px 0; text-align: justify;">
        We commit to building long-term, transparent relationships and disseminating responsible sourcing guidance issued by OECD, LBMA, RMI, DMCC, World Gold Council, and UAE MOEC.
      </p>

      <div style="font-weight: bold; font-size: 10pt; margin-bottom: 4px;">AntiBribery, AntiCorruption, AntiMoney Laundering & CFT</div>
      <p style="font-size: 9.5pt; line-height: 1.45; margin: 0 0 12px 0; text-align: justify;">
        ${company} shall not offer, promise, give, or accept bribes, and shall implement a robust AML/CFT compliance framework ensuring no precious metals are sourced from sanctioned entities or embargoed regions without enhanced due diligence.
      </p>

      <div style="font-weight: bold; font-size: 10.5pt; margin-bottom: 8px;">UNDERTAKING</div>
      <p style="font-size: 9.5pt; line-height: 1.45; margin-bottom: 6px;">By signing this document, we hereby confirm that:</p>
      <ul style="font-size: 9.5pt; line-height: 1.45; margin: 0 0 16px 0; padding-left: 20px;">
        <li>We have implemented an adequate supply chain due diligence system in accordance with the OECD Due Diligence Guidance.</li>
        <li>We comply with all applicable national and international laws and regulations governing the trade of precious metals.</li>
        <li>We review, understand, and integrate all relevant laws and regulations into our internal processes and riskmitigation strategies.</li>
        <li>We do not source or trade precious metals originating from sanctioned, conflictaffected, or highrisk areas unless enhanced due diligence is conducted and risks are mitigated.</li>
        <li>We commit to full compliance with this Supply Chain Policy in all interactions with LBH Bullion Gold Trading L.L.C.</li>
        <li>We are open to collaborating on improvements to responsible sourcing practices where necessary.</li>
      </ul>

      <div style="font-size: 10pt; line-height: 1.6; margin-top: 20px;">
        <div>Company Name: <strong>${company}</strong></div>
        <div>Authorized Signature: _________________________________</div>
        <div>Name & Title: <strong>${signatory}</strong></div>
        <div>Date: <u>${dateStr}</u></div>
      </div>
    `;
  }

  // 6. CDD FORM - INDIVIDUAL (matches CDD_FORM_-_INDIVIDUAL.docx)
  if (type === 'cdd') {
    const form = document.getElementById('online-form-cdd');
    const invoiceNo = getVal(form, 'cdd_invoice_no', '………………….');
    const name = getVal(form, 'cdd_full_name', '…………………………………………………………………………………………');
    const occupation = getVal(form, 'cdd_occupation', '…………………………………………………');
    const pobox = getVal(form, 'cdd_pobox', '…………………………………………');
    const doorNo = getVal(form, 'cdd_door_no', '………………..');
    const address = getVal(form, 'cdd_address', '…………………………………………………………………………………………');
    const telephone = getVal(form, 'cdd_telephone', '……………………………………………..');
    const mobile = getVal(form, 'cdd_mobile', '…………………………………………….');
    const dob = getVal(form, 'cdd_dob', '……………………………');
    const resStatus = getVal(form, 'cdd_res_status', 'RESIDENT');
    const nationality = getVal(form, 'cdd_nationality', '…………………………');
    const countryBirth = getVal(form, 'cdd_country_birth', '………………………');
    const pepStatus = getVal(form, 'cdd_pep_status', 'NO');
    const idType = getVal(form, 'cdd_id_type', 'PASSPORT');
    const idNumber = getVal(form, 'cdd_id_number', '……………………………………………….');
    const issuingCountry = getVal(form, 'cdd_issuing_country', '……………………………………………');
    const issueDate = getVal(form, 'cdd_issue_date', '………………………………………………….');
    const expiryDate = getVal(form, 'cdd_expiry_date', '……………………………………………………');
    const income = getVal(form, 'cdd_income', 'ABOVE 100,000');
    const sourceIncome = getVal(form, 'cdd_source_income', 'BUSINESS');

    return `
      <div style="display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 10.5pt;">
        <div>DATE: <u>${dateStr}</u></div>
        <div>INVOICE NO: <u>${invoiceNo}</u></div>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 9.5pt;">
        <tbody>
          <tr>
            <td style="border: 1px solid #000; padding: 6px;" colspan="2">FULL NAME: <strong>${name}</strong></td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px;">OCCUPATION: <strong>${occupation}</strong></td>
            <td style="border: 1px solid #000; padding: 6px;">P.O BOX: <strong>${pobox}</strong> &nbsp;&nbsp; DOOR NO: <strong>${doorNo}</strong></td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px;" colspan="2">ADDRESS: <strong>${address}</strong></td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px;">TELEPHONE: <strong>${telephone}</strong></td>
            <td style="border: 1px solid #000; padding: 6px;">MOBILE PHONE: <strong>${mobile}</strong></td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px;">DATE OF BIRTH: <strong>${dob}</strong></td>
            <td style="border: 1px solid #000; padding: 6px;">RESIDENTIAL STATUS: <strong>${resStatus}</strong></td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px;">NATIONALITY: <strong>${nationality}</strong></td>
            <td style="border: 1px solid #000; padding: 6px;">COUNTRY OF BIRTH: <strong>${countryBirth}</strong> &nbsp;&nbsp; PEP STATUS: <strong>${pepStatus}</strong></td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px;">ID TYPE: <strong>${idType}</strong></td>
            <td style="border: 1px solid #000; padding: 6px;">ID NUMBER: <strong>${idNumber}</strong></td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px;">ISSUING COUNTRY: <strong>${issuingCountry}</strong></td>
            <td style="border: 1px solid #000; padding: 6px;">ISSUE DATE: <strong>${issueDate}</strong> &nbsp;&nbsp; EXPIRY: <strong>${expiryDate}</strong></td>
          </tr>
          <tr>
            <td style="border: 1px solid #000; padding: 6px;">EXPECTED ANNUAL INCOME (AED): <strong>${income}</strong></td>
            <td style="border: 1px solid #000; padding: 6px;">SOURCE OF INCOME: <strong>${sourceIncome}</strong></td>
          </tr>
        </tbody>
      </table>

      <div style="font-weight: bold; font-size: 10pt; margin-bottom: 4px;">DECLARATION:</div>
      <p style="text-align: justify; font-size: 9.5pt; line-height: 1.5; margin-bottom: 25px;">
        I hereby certify that all the information I have provided is true and accurate. I agree to comply with the AML REGULATION and GUIDELINES of UAE with other relevant supervisory authorities/ regulatory. I consent to conduct transactions with entity complying with all applicable standards and regulations.
      </p>

      <div style="display: flex; justify-content: space-between; font-size: 10pt; margin-top: 30px;">
        <div>Customer Signature: …………………………………</div>
        <div>Authorised signature: …………………………………</div>
      </div>
    `;
  }

  return '';
}

/**
 * Generates the full standalone document HTML for printing or Word .doc export.
 */
function generateDocumentHtml(type, forWord = false) {
  const titles = {
    auth: 'Authorization Letter',
    funds: 'Declaration Source of Funds',
    sanctions: 'Undertaking Letter',
    pep: 'PEP Declaration Form',
    supply: 'Supply Chain Policy & Undertaking',
    cdd: 'CDD Form - Individual'
  };

  const title = titles[type] || 'Compliance Document';
  const innerHtml = buildDocumentInnerHtml(type);

  if (forWord) {
    return `
      <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>${title}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          @page { size: 21cm 29.7cm; margin: 2cm; mso-page-orientation: portrait; }
          body { font-family: 'Times New Roman', Times, serif; font-size: 11pt; line-height: 1.45; color: #000; }
          table { border-collapse: collapse; width: 100%; margin: 12px 0; }
          th, td { border: 1px solid #000; padding: 6px 8px; font-size: 10pt; }
          th { background-color: #f2f2f2; font-weight: bold; }
        </style>
      </head>
      <body>
        ${innerHtml}
      </body>
      </html>
    `.trim();
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${title}</title>
      <style>
        @page {
          size: A4 portrait;
          margin: 18mm 20mm;
        }
        * {
          box-sizing: border-box;
        }
        body {
          font-family: 'Times New Roman', Times, Georgia, serif;
          font-size: 11pt;
          line-height: 1.45;
          color: #000;
          margin: 0;
          padding: 0;
          background: #fff;
        }
        .doc-page {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          background: #fff;
        }
        table {
          border-collapse: collapse;
          width: 100%;
        }
        th, td {
          border: 1px solid #000;
          padding: 6px 8px;
        }
        th {
          background-color: #f2f2f2;
          font-weight: bold;
        }
        @media print {
          body {
            background: #fff !important;
            color: #000 !important;
          }
        }
      </style>
    </head>
    <body>
      <div class="doc-page">
        ${innerHtml}
      </div>
    </body>
    </html>
  `.trim();
}

/**
 * Triggers isolated printing of ONLY the filled official document.
 */
function printOfficialDocument(type) {
  const fullHtml = generateDocumentHtml(type, false);
  const innerHtml = buildDocumentInnerHtml(type);

  // Update fallback in-page sheet
  const sheet = document.getElementById('document-print-sheet');
  if (sheet) {
    sheet.innerHTML = innerHtml;
  }

  // Create or reuse hidden isolated iframe
  let frame = document.getElementById('document-print-iframe');
  if (!frame) {
    frame = document.createElement('iframe');
    frame.id = 'document-print-iframe';
    frame.style.position = 'fixed';
    frame.style.right = '0';
    frame.style.bottom = '0';
    frame.style.width = '0';
    frame.style.height = '0';
    frame.style.border = '0';
    frame.style.visibility = 'hidden';
    document.body.appendChild(frame);
  }

  const doc = frame.contentWindow.document;
  doc.open();
  doc.write(fullHtml);
  doc.close();

  setTimeout(() => {
    frame.contentWindow.focus();
    frame.contentWindow.print();
  }, 350);
}

/**
 * Generates and downloads the pre-filled Word document (.doc).
 */
function downloadFilledWordDoc(type) {
  const fileNames = {
    auth: 'Authorisation_Letter_Filled.doc',
    funds: 'Declaration_Source_of_Funds_Filled.doc',
    sanctions: 'Undertaking_Letter_Filled.doc',
    pep: 'PEP_Declaration_Filled.doc',
    supply: 'Supply_Chain_Policy_Filled.doc',
    cdd: 'CDD_Form_Individual_Filled.doc'
  };

  const fileName = fileNames[type] || 'Compliance_Document_Filled.doc';
  const wordContent = generateDocumentHtml(type, true);

  const blob = new Blob(['\ufeff', wordContent], {
    type: 'application/msword;charset=utf-8'
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
